import type { ReactNode } from "react";
import ArticleEvidence from "@/components/ArticleEvidence";

export default function BestLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ArticleEvidence />
    </>
  );
}
