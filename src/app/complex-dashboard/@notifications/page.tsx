// app/notifications/page.tsx
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Notifications",
  description: "Internal notifications dashboard.",
  path: "/complex-dashboard",
  noIndex: true,
});

export default async function NotificationsPage() {
  await new Promise((r) => setTimeout(r, 3000)); // 3-second delay

  return <div>Notifications loaded!</div>;
}
