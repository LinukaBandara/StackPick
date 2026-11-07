import type { Metadata } from "next";
import AccountForm from "@/components/AccountForm";

export const metadata: Metadata = {
  title: "Your StackPick Account",
  description: "Sign in or create an account to share software reviews on StackPick.",
  robots: { index: false, follow: true },
};

export default function AccountPage() {
  return (
    <div className="min-h-[70vh] bg-[#f5f5f7] px-4 py-16 sm:py-24">
      <div className="mx-auto mb-8 max-w-md text-center">
        <p className="sp-eyebrow">StackPick community</p>
        <h1 className="sp-title mt-3">Your account.</h1>
      </div>
      <AccountForm />
    </div>
  );
}
