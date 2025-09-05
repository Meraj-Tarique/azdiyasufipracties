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
      𝖳𝗁𝖾 𝖫𝗂𝖿𝖾 𝗈𝖿 𝗍𝗁𝖾 𝖥𝗂𝗇𝖺𝗅 𝖬𝖾𝗌𝗌𝖾𝗇𝗀𝖾𝗋 {pbuh} – 𝖠 𝖩𝗈𝗎𝗋𝗇𝖾𝗒 𝗈𝖿 𝖥𝖺𝗂𝗍𝗁, 𝖲𝗍𝗋𝗎𝗀𝗀𝗅𝖾, 𝖺𝗇𝖽 𝖣𝗂𝗏𝗂𝗇𝖾 𝖫𝗈𝗏𝖾.
    </>
  );

  const services = [
    {
      title: "𝚀𝚞𝚛'𝚊𝚗",
      description:
        "𝖤𝗑𝗉𝗅𝗈𝗋𝖾 𝗍𝗁𝖾 𝗆𝖾𝗍𝗂𝖼𝗎𝗅𝗈𝗎𝗌 𝗉𝗋𝗈𝖼𝖾𝗌𝗌 𝗈𝖿 𝗍𝗁𝖾 𝖰𝗎𝗋𝖺𝗇'𝗌 𝖼𝗈𝗆𝗉𝗂𝗅𝖺𝗍𝗂𝗈𝗇 𝖺𝗇𝖽 𝖼𝗈𝗅𝗅𝖺𝗍𝗂𝗈𝗇, 𝖾𝗇𝗌𝗎𝗋𝗂𝗇𝗀 𝗂𝗍𝗌 𝖺𝗎𝗍𝗁𝖾𝗇𝗍𝗂𝖼𝗂𝗍𝗒 𝖺𝗇𝖽 𝗉𝗋𝖾𝗌𝖾𝗋𝗏𝖺𝗍𝗂𝗈𝗇.",
      icon: getImagePath("quran-rehal.svg"),
      slug: "quran",
    },
    {
      title: "𝚂𝚞𝚗𝚗𝚊𝚑/𝙷𝚊𝚍𝚒𝚝𝚑",
      description:
        "𝖤𝗌𝗌𝖾𝗇𝗍𝗂𝖺𝗅 𝖧𝖺𝖽𝗂𝗍𝗁 & 𝖲𝗎𝗇𝗇𝖺𝗁 𝗀𝖾𝗆𝗌 𝗂𝗇 𝗈𝗇𝖾 𝖺𝖼𝖼𝖾𝗌𝗌𝗂𝖻𝗅𝖾 𝗇𝗈𝗍𝖾 𝖿𝗈𝗋 𝖽𝖺𝗂𝗅𝗒 𝗌𝗉𝗂𝗋𝗂𝗍𝗎𝖺𝗅 𝗀𝗋𝗈𝗐𝗍𝗁.",
      icon: getImagePath("quran-rehal.svg"),
      slug: "sunnah",
    },
    {
      title: "𝚂𝚎𝚎𝚛𝚊𝚑",
      description: description,
      icon: getImagePath("quran-rehal.svg"),
      slug: "seerah",
    },
    {
      title: "𝙱𝚎𝚕𝚒𝚎𝚏𝚜 & 𝙲𝚛𝚎𝚎𝚍𝚜",
      description:
        "𝖳𝗁𝖾 𝖠𝗎𝗍𝗁𝖾𝗇𝗍𝗂𝖼 𝖲𝗎𝗇𝗇𝗂 𝖢𝗋𝖾𝖾𝖽 - 𝖢𝗈𝗋𝖾 𝖡𝖾𝗅𝗂𝖾𝖿𝗌 𝗈𝖿 𝖮𝗋𝗍𝗁𝗈𝖽𝗈𝗑 𝖨𝗌𝗅𝖺𝗆 𝖠𝖼𝖼𝗈𝗋𝖽𝗂𝗇𝗀 𝗍𝗈 𝖰𝗎𝗋𝖺𝗇 & 𝖲𝗎𝗇𝗇𝖺𝗁",
      icon: getImagePath("quran-rehal.svg"),
      slug: "beliefs",
    },
    {
      title: "𝙵𝚒𝚚𝚑/𝙹𝚞𝚛𝚒𝚜𝚙𝚛𝚞𝚍𝚎𝚗𝚌𝚎",
      description:
        "𝖯𝗋𝖺𝖼𝗍𝗂𝖼𝖺𝗅 𝖨𝗌𝗅𝖺𝗆𝗂𝖼 𝖱𝗎𝗅𝗂𝗇𝗀𝗌 - 𝖳𝗁𝖾 𝖥𝗂𝗊𝗁 𝗈𝖿 𝖣𝖺𝗂𝗅𝗒 𝖫𝗂𝖿𝖾 𝖿𝗋𝗈𝗆 𝖠𝗎𝗍𝗁𝖾𝗇𝗍𝗂𝖼 𝖲𝗈𝗎𝗋𝖼𝖾𝗌",
      icon: getImagePath("quran-rehal.svg"),
      slug: "fiqh",
    },
    {
      title: "𝚂𝚞𝚏𝚒 𝙿𝚛𝚊𝚌𝚝𝚒𝚌𝚎𝚜/𝙴𝚑𝚜ā𝚗",
      description:
        "𝖯𝗎𝗋𝗂𝖿𝗒𝗂𝗇𝗀 𝗍𝗁𝖾 𝖧𝖾𝖺𝗋𝗍 - 𝖤𝗌𝗌𝖾𝗇𝗍𝗂𝖺𝗅 𝖲𝗎𝖿𝗂 𝖯𝗋𝖺𝖼𝗍𝗂𝖼𝖾𝗌 𝖿𝗈𝗋 𝖲𝗉𝗂𝗋𝗂𝗍𝗎𝖺𝗅 𝖤𝗑𝖼𝖾𝗅𝗅𝖾𝗇𝖼𝖾 (𝖤𝗁𝗌ā𝗇)",
      icon: getImagePath("quran-rehal.svg"),
      slug: "sufi-practices",
    },

    {
      title: "𝚂𝚊𝚒𝚗𝚝𝚜' 𝙱𝚒𝚘𝚐𝚛𝚊𝚙𝚑𝚒𝚎𝚜",
      description: "𝖫𝗂𝗀𝗁𝗍𝗌 𝗈𝖿 𝖦𝗎𝗂𝖽𝖺𝗇𝖼𝖾 - 𝖲𝗉𝗂𝗋𝗂𝗍𝗎𝖺𝗅 𝖦𝗂𝖺𝗇𝗍𝗌 𝗈𝖿 𝖨𝗌𝗅𝖺𝗆𝗂𝖼 𝖧𝗂𝗌𝗍𝗈𝗋𝗒ā𝗇)",
      icon: getImagePath("quran-rehal.svg"),
      slug: "saints-biographies",
    },
    {
      title: "𝙼𝚒𝚜𝚌𝚎𝚕𝚕𝚊𝚗𝚎𝚘𝚞𝚜",
      description:
        "𝖨𝗌𝗅𝖺𝗆𝗂𝖼 𝖦𝖾𝗆𝗌 𝖢𝗈𝗅𝗅𝖾𝖼𝗍𝗂𝗈𝗇 - 𝖱𝖺𝗋𝖾 𝖨𝗇𝗌𝗂𝗀𝗁𝗍𝗌 𝖠𝖼𝗋𝗈𝗌𝗌 𝖬𝗎𝗅𝗍𝗂𝗉𝗅𝖾 𝖣𝗂𝗌𝖼𝗂𝗉𝗅𝗂𝗇𝖾𝗌",
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
