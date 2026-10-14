const target = process.env.LOAD_TEST_URL || "https://www.stackpick.tech/";
const concurrency = Number(process.env.LOAD_TEST_CONCURRENCY || 10);
const durationMs = Number(process.env.LOAD_TEST_DURATION_MS || 10000);
const pauseMs = 250;
const start = Date.now();
const latencies = [];
let requests = 0;
let failures = 0;
const statuses = {};

async function virtualUser() {
  while (Date.now() - start < durationMs) {
    const requestStart = Date.now();
    try {
      const response = await fetch(target, { signal: AbortSignal.timeout(8000) });
      await response.arrayBuffer();
      const elapsed = Date.now() - requestStart;
      latencies.push(elapsed);
      requests += 1;
      statuses[response.status] = (statuses[response.status] || 0) + 1;
      if (!response.ok) failures += 1;
    } catch (error) {
      requests += 1;
      failures += 1;
      statuses.error = (statuses.error || 0) + 1;
      console.error("Request failed:", error instanceof Error ? error.message : String(error));
    }
    await new Promise((resolve) => setTimeout(resolve, pauseMs));
  }
}

await Promise.all(Array.from({ length: concurrency }, () => virtualUser()));
latencies.sort((a, b) => a - b);
const average = latencies.length ? Math.round(latencies.reduce((sum, value) => sum + value, 0) / latencies.length) : 0;
const p95 = latencies.length ? latencies[Math.min(latencies.length - 1, Math.ceil(latencies.length * 0.95) - 1)] : 0;
console.log(JSON.stringify({ target, concurrency, durationMs: Date.now() - start, requests, failures, statuses, averageLatencyMs: average, p95LatencyMs: p95 }, null, 2));
if (requests === 0 || failures / requests > 0.05) process.exitCode = 1;
