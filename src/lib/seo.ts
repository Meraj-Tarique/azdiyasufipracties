import type { Metadata } from "next";

export const siteConfig = {
  name: "Azdiya Sufi Practices",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://azdiasufipractices.com",
  description:
    "Azdiya Sufi Practices offers Islamic teachings on the Qur'an, Sunnah, Seerah, Fiqh, beliefs, Sufi practices, spiritual influence, and biographies of saints.",
  author: "Meraj Tarique",
  ogImage: "/assets/images/logo.png",
};

export const defaultKeywords = [
  "Azdiya Sufi Practices",
  "Islamic teachings",
  "Quran compilation",
  "Sunnah Hadith",
  "Seerah",
  "Fiqh",
  "Islamic beliefs",
  "Sufi practices",
  "Tasawwuf",
  "spiritual influence",
  "saints biographies",
];

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = siteConfig.ogImage,
  noIndex = false,
}: SeoOptions): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
