import type { SoftwareProfile } from "@/lib/software";

export type FinderGoal =
  | "crm"
  | "accounting"
  | "project"
  | "marketing"
  | "design"
  | "development"
  | "support"
  | "commerce"
  | "productivity"
  | "any";

export type FinderTeam = "solo" | "small" | "growing" | "large";
export type FinderBudget = "free" | "value" | "flexible";

export type FinderPreferences = {
  goal: FinderGoal;
  team: FinderTeam;
  budget: FinderBudget;
  priorities: string[];
};

const GOALS: Record<Exclude<FinderGoal, "any">, RegExp> = {
  crm: /crm|sales|lead|pipeline|customer relationship|contact management/i,
  accounting: /accounting|bookkeeping|invoice|invoicing|expense|finance|payroll/i,
  project: /project|task|kanban|work management|team planning/i,
  marketing: /marketing|email campaign|seo|social media|audience|newsletter/i,
  design: /design|creative|graphic|visual|video|presentation|content creation/i,
  development: /developer|code|api|database|hosting|deploy|devops|automation platform/i,
  support: /support|help ?desk|service desk|ticket|customer service|live chat/i,
  commerce: /ecommerce|e-commerce|online store|payment|checkout|pos|point of sale/i,
  productivity: /calendar|scheduling|notes|knowledge|workflow|productivity|automation/i,
};

const PRIORITIES: Record<string, { label: string; test: RegExp }> = {
  simple: { label: "Easy to get started", test: /simple|easy|straightforward|low learning curve|quick setup|intuitive/i },
  automation: { label: "Automation", test: /automation|automate|workflow|trigger|integration/i },
  collaboration: { label: "Team collaboration", test: /team|collaborat|shared|assignee|workspace|multi.?user/i },
  integrations: { label: "Integrations", test: /integrat|connect|marketplace|api|third.party/i },
  reporting: { label: "Reports and analytics", test: /report|analytics|dashboard|insight|forecast/i },
  ai: { label: "AI features", test: /\bAI\b|artificial intelligence|machine learning|generative/i },
};

function hasPermanentFreePlan(profile: SoftwareProfile) {
  const text = profile.freePlan.toLowerCase();
  if (/no permanent free|does not offer a permanent free|does not advertise a permanent free|no standard free/i.test(text)) return false;
  return /\byes\b|free edition|free tier|free plan|free account|free tools|free forever|starter is free|hobby is free|developer is a free/i.test(text);
}

function searchable(profile: SoftwareProfile) {
  return [
    profile.name, profile.category, profile.tagline, profile.summary, profile.pricingSummary,
    profile.freePlan, ...profile.bestFor, ...profile.keyFeatures, ...profile.strengths, ...profile.tradeoffs,
  ].join(" ");
}

function teamFit(profile: SoftwareProfile, team: FinderTeam) {
  const text = [...profile.bestFor, profile.summary, ...profile.keyFeatures].join(" ");
  const patterns: Record<FinderTeam, RegExp> = {
    solo: /freelancer|solo|individual|independent|one.person|self.employed|consultant/i,
    small: /small team|small business|small businesses|up to \d+ users|\d+ collaborators|startup/i,
    growing: /growing business|growing team|sales team|multiple teams|scal|mid.size|medium business/i,
    large: /enterprise|large organisation|large organization|advanced administration|governance|large team/i,
  };
  return patterns[team].test(text);
}

function buildReasons(profile: SoftwareProfile, goal: FinderGoal, priorities: string[]) {
  const text = searchable(profile);
  const reasons: string[] = [];
  if (goal !== "any" && GOALS[goal].test(text)) {
    const bestFor = profile.bestFor.find((item) => GOALS[goal].test(item));
    reasons.push(bestFor || profile.keyFeatures.find((item) => GOALS[goal].test(item)) || "Its published description aligns with this workflow.");
  }
  for (const id of priorities) {
    const priority = PRIORITIES[id];
    if (!priority || !priority.test.test(text)) continue;
    const evidence = [...profile.keyFeatures, ...profile.strengths, ...profile.bestFor].find((item) => priority.test.test(item));
    if (evidence && !reasons.includes(evidence)) reasons.push(evidence);
    if (reasons.length >= 3) break;
  }
  if (!reasons.length) reasons.push(profile.tagline);
  return reasons.slice(0, 3);
}

export function recommendSoftware(
  profiles: SoftwareProfile[],
  preferences: FinderPreferences,
) {
  const ranked = profiles
    .filter((profile) => preferences.goal === "any" || GOALS[preferences.goal].test.test(searchable(profile)))
    .filter((profile) => preferences.budget !== "free" || hasPermanentFreePlan(profile))
    .map((profile) => {
      const text = searchable(profile);
      const goalMatch = preferences.goal === "any" || GOALS[preferences.goal].test(text);
      const matchedPriorities = preferences.priorities.filter((id) => PRIORITIES[id]?.test.test(text));
      const matchesTeam = teamFit(profile, preferences.team);
      const free = hasPermanentFreePlan(profile);
      const score = Math.min(100,
        (goalMatch ? 45 : 0)
        + Math.round((matchedPriorities.length / Math.max(1, preferences.priorities.length)) * 30)
        + (matchesTeam ? 15 : 5)
        + (preferences.budget === "free" ? (free ? 10 : 0) : preferences.budget === "value" ? (free ? 10 : /starter|basic|entry.level|low.cost|affordable/i.test(profile.pricingSummary) ? 6 : 2) : 10)
      );
      return {
        profile,
        score,
        free,
        reasons: buildReasons(profile, preferences.goal, preferences.priorities),
        teamNote: matchesTeam ? "Published use cases mention a similar team size." : "Check seat limits and administration features for your team size.",
      };
    })
    .sort((a, b) => b.score - a.score || a.profile.name.localeCompare(b.profile.name));
  return ranked.slice(0, 8);
}

export const FINDER_GOALS: { value: FinderGoal; label: string }[] = [
  { value: "any", label: "I'm exploring / not sure yet" },
  { value: "crm", label: "Manage customers and sales" },
  { value: "accounting", label: "Accounting, invoices and expenses" },
  { value: "project", label: "Projects and team tasks" },
  { value: "marketing", label: "Marketing and audience growth" },
  { value: "design", label: "Design and content creation" },
  { value: "development", label: "Developer tools and IT" },
  { value: "support", label: "Customer support" },
  { value: "commerce", label: "Ecommerce and payments" },
  { value: "productivity", label: "Productivity and workflows" },
];

export const FINDER_PRIORITIES = Object.entries(PRIORITIES).map(([value, item]) => ({ value, label: item.label }));
