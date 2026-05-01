import type { Metadata } from "next";
import HomePage from "@/components/dashboard/index";
import { Footer } from "@/components/layout/Footer";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: "Islamic Teachings, Sufi Practices and Spiritual Guidance",
  description:
    "Explore Islamic teachings on the Qur'an, Sunnah, Seerah, Fiqh, beliefs, Sufi practices, spiritual influence, and biographies of saints.",
  path: "/",
  keywords: ["Islamic center", "Islamic resources", "spiritual guidance"],
});

export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
        {/* <Header /> */}
        <HomePage />
        <Footer />
      </main>
    </div>
  );
}
