
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Revenue Metrics",
  description: "Internal revenue metrics dashboard.",
  path: "/complex-dashboard",
  noIndex: true,
});

export default function RevenuePage() {
    return <div>Revenue Metrix</div>;
  }
  
