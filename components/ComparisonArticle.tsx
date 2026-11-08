import { headers } from "next/headers";
import ComparisonArticleClient, { type ComparisonArticleProps } from "./ComparisonArticleClient";

export default async function ComparisonArticle(props: ComparisonArticleProps) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return <ComparisonArticleClient {...props} nonce={nonce} />;
}
