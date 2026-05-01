import type { Metadata } from "next";
import React from "react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Page Not Found",
  description: "The requested page could not be found on Azdiya Sufi Practices.",
  noIndex: true,
});

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl mt-4">Page not found</p>
    </div>
  );
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default NotFoundPage;
