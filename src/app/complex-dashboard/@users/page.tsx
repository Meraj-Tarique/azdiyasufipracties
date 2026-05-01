
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "User Analytics",
  description: "Internal user analytics dashboard.",
  path: "/complex-dashboard",
  noIndex: true,
});

export default function UserAnalytics() {
  return <div>User Analytics</div>;
}
