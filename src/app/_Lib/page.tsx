import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Private Route",
  description: "Internal private route for Azdiya Sufi Practices.",
  path: "/_Lib",
  noIndex: true,
});

export default function PrivateRoute() {
  return <div>page</div>;
}
