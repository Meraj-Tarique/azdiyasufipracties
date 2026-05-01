// complex-dashboard/page.tsx

import type { Metadata } from "next";
import React from 'react';
import { createMetadata } from "@/lib/seo";

const ComplexDashboardPage = () => {
  return <h1>Complex Dashboard</h1>;
};

export const metadata: Metadata = createMetadata({
  title: "Complex Dashboard",
  description: "Internal dashboard for Azdiya Sufi Practices.",
  path: "/complex-dashboard",
  noIndex: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
};

export default ComplexDashboardPage;
