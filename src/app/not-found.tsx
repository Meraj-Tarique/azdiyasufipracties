import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl mt-4">Page not found</p>
    </div>
  );
};

// General metadata for the page
export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

// Move the viewport export outside of the metadata export
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default NotFoundPage;
