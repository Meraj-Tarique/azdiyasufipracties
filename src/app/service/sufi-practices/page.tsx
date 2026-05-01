/* eslint-disable react/no-unescaped-entities */

import MainHeading from "@/components/Headings/MainHeading";
import { createMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Sufi Practices and Ehsan",
  description:
    "Explore Sufi practices, Ehsan, purification of the heart, and spiritual resources prepared for Islamic spiritual growth.",
  path: "/service/sufi-practices",
  keywords: ["Sufi practices", "Ehsan", "Tasawwuf", "purification of the heart"],
});

const ComingSoon = () => {
  return (
    <div className="max-w-8xl mx-auto py-10 px-5 mt-8 text-xl">
      <div className="lg:p-6 pt-2 space-y-6 w-full lg:w-[85%] mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
          <MainHeading/>

          {/* Coming Soon Section */}
          <div className="text-center p-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
                More Content Coming Soon
              </h2>
              <p className="text-lg text-gray-600">
                We're currently preparing these valuable resources for you:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
