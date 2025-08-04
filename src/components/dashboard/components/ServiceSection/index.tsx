/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "@/styles/blogCardStyle.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/ServiceCard/card";
import { getImagePath } from "@/helpers/utils";
import MissionAndVissionPage from "../MissionAndVisson";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  weight: "700",
  subsets: ["arabic"], // Must include 'arabic' subset
  display: "swap",
});

// interface ContentItem {
//   title: string;
//   description: string;
//   icon: string;
//   slug: string;
// }

export default function Services() {
  const router = useRouter();
  const pbuh = (
    <span className={`${amiri.className} text-xl inline`}>( ﷺ )</span>
  );

  const description = (
    <>
      The Life of the Final Messenger {pbuh} – A Journey of Faith, Struggle, and
      Divine Love.
    </>
  );

  const services = [
    {
      title: "Qur'an",
      description:
        "Explore the meticulous process of the Quran's compilation and collation, ensuring its authenticity and preservation.",
      icon: getImagePath("quran-rehal.svg"),
      slug: "quran",
    },
    {
      title: "Sunnah/Hadith",
      description:
        "Essential Hadith & Sunnah gems in one accessible note for daily spiritual growth.",
      icon: getImagePath("quran-rehal.svg"),
      slug: "sunnah",
    },
    {
      title: "Seerah",
      description: description,
      icon: getImagePath("quran-rehal.svg"),
      slug: "seerah",
    },
    {
      title: "Beliefs & Creeds ",
      description:
        "The Authentic Sunni Creed - Core Beliefs of Orthodox Islam According to Quran & Sunnah",
      icon: getImagePath("quran-rehal.svg"),
      slug: "beliefs",
    },
    {
      title: "Fiqh/Jurisprudence",
      description:
        "Practical Islamic Rulings - The Fiqh of Daily Life from Authentic Sources",
      icon: getImagePath("quran-rehal.svg"),
      slug: "fiqh",
    },
    {
      title: "Sufi Practices/Ehsān",
      description:
        "Purifying the Heart - Essential Sufi Practices for Spiritual Excellence (Ihsān)",
      icon: getImagePath("quran-rehal.svg"),
      slug: "sufi-practices",
    },

    {
      title: "Saints' Biographies",
      description: "Lights of Guidance - Spiritual Giants of Islamic History",
      icon: getImagePath("quran-rehal.svg"),
      slug: "saints-biographies",
    },
    {
      title: "Miscellaneous",
      description:
        "Islamic Gems Collection - Rare Insights Across Multiple Disciplines",
      icon: getImagePath("quran-rehal.svg"),
      slug: "miscellaneous",
    },
  ];

  const handleBlogsRoute = (slug: string) => {
    console.log(slug);

    router.push(`service/${slug}`);
  };

  return (
    <div className="py-20 bg-gray-50 service-bg-container">
      <MissionAndVissionPage />

      <div className="elementor-widget-container" id="services">
        <img
          width="180"
          height="5"
          src="https://templatekits.themewarrior.com/jamaah/wp-content/uploads/sites/12/2021/01/dividers-1.png"
          className="attachment-full size-full wp-image-1133 object-none"
          alt=""
        />
      </div>
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {services.map((service, index) => (
            <div
              onClick={() => handleBlogsRoute(service.slug)}
              key={index}
              className={`flex flex-col items-center ${styles.cardContainer} cursor-pointer`}
              style={{
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
              onTouchStart={(e) => e.preventDefault()}
            >
              <Card
                className={`bg-[#00000003] text-center w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] rounded-[50%] flex items-center justify-center ${styles.circleCardStyle}`}
              >
                <div className=" rounded-[50%] flex items-center justify-center p-2">
                  <Image
                    alt="quran image"
                    src={service?.icon}
                    height={50}
                    width={50}
                    className="w-[30px] h-[30px] xs:w-[40px] xs:h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px]"
                  />
                </div>
              </Card>
              <h3
                className={`text-[clamp(0.875rem,3vw,1.25rem)] font-semibold mt-2 sm:mt-4 text-center px-1 ${styles.headingStyle}`}
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-[0.75rem] xs:text-[0.8125rem] sm:text-sm mt-1 sm:mt-2 text-center px-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
