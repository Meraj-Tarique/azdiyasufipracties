/* eslint-disable react/no-unescaped-entities */
// "use client";
import styles from "@/styles/missionStyle.module.css";
import { Amiri } from "next/font/google";
// import ContentWithIndex from "./Indexing/ContentWithIndex";
// import { useEffect, useRef, useState } from "react";
import { sections } from "./Indexing/content";
import DownloadButton from "@/components/DownloadButton";
import MainHeading from "@/components/Headings/MainHeading";

const amiri = Amiri({
  weight: "700",
  subsets: ["arabic"], 
  display: "swap",
});

// export const metadata = {
//   title: "SEERAH",
//   description: "This is about SEERAH.",
// };



const BlogDetailPage = () => {
  // const [activeSection, setActiveSection] = useState(null);
  // const contentRef = useRef(null);
  // const observerRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5,
  //   };

  //   observerRef.current = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setActiveSection(entry.target.id);
  //       }
  //     });
  //   }, options);

  //   // Observe all section elements
  //   document.querySelectorAll("section[id]").forEach((section) => {
  //     observerRef.current.observe(section);
  //   });

  //   return () => {
  //     if (observerRef.current) {
  //       observerRef.current.disconnect();
  //     }
  //   };
  // }, []);
  return (
    <>
      <div className="max-w-8xl mx-auto py-10 px-5 mt-8 text-xl">
        <div className="lg:p-6 pt-2 space-y-6 w-full lg:w-[85%] mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
            <MainHeading />
            <div className={`text-center mb-12 ${styles.textStyle} relative`}>
              <div className="mx-auto">
                <h1
                  className="font-bold 
              md:mb-2
              sm:text-xl 
              md:text-1xl 
              lg:text-3xl 
              xl:text-3xl"
                >
                  𝚃𝙷𝙴 𝚁𝙰𝙳𝙸𝙰𝙽𝚃 𝚂𝙴𝙴𝚁𝙰𝙷
                </h1>
                <h2
                  className=" font-bold 
                md:mb-2
                sm:text-xl 
                md:text-1xl 
                lg:text-3xl 
                xl:text-3xl"
                >
                  𝙽𝚘𝚋𝚕𝚎 𝙿𝚛𝚘𝚙𝚑𝚎𝚝 𝙼𝚞𝚑𝚊𝚖𝚖𝚊𝚍{" "}
                  <span className={`${amiri.className} text-4xl inline`}>
                    {" "}
                    ﷺ
                  </span>
                </h2>
                <DownloadButton url="https://raw.githubusercontent.com/Meraj-Tarique/azdiyasufipracties/main/The%20Radiant%20Seerah.pdf" />
              </div>
            </div>
            <div className="max-w-4xl mx-auto md:p-6 bg-white text-slate-800 font-sans">
              {/* Main Content */}
              <div className="mb-8">
                {/* Introduction */}
                <div className="preface-section">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    PREFACE
                  </h3>

                  <div className="preface-content">
                    <div className="mb-6">
                      <p className="text-justify leading-relaxed">
                        <span className="highlight mt-3">
                          The Arabic word{" "}
                          <span className="font-semibold italic">
                            ‘Seerah’{" "}
                          </span>
                          is literally translated into English as life-journey,
                          biography, demeanor, way of life, mode of life etc. of
                          any person. Nevertheless, in Islamic tradition the
                          word ‘Seerah’ is a terminology specifically used for
                          the Islamic Science of knowing the life of Prophet
                          Muhammad صلى الله عليه وسلم,
                        </span>
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="mt-3 mb-6">
                        Imam Muslim bin Hujaj in his Sahih Muslim narrates a
                        long hadith a part of which is as such; Sa’d ibn Hisham
                        ibn Amir, when he visited Ayesha bint Abu Bakr said; “
                      </p>
                      <div className="hadith-box bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                        <p className="italic text-gray-700">
                          "O mother of believers, tell me about the character of
                          the Prophet صلى الله عليه وسلم." She said: "Do you not
                          recite the Quran?" He said: "Yes." She said:{" "}
                          <span className="font-bold text-primary">
                            "Indeed the Prophet's صلى الله عليه وسلم character
                            was the Quran."
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          (Authentic Hadith – Narrated by Muslim within a long
                          Hadith, Sahih Muslim –#764).
                        </p>
                      </div>
                    </div>

                    <div className="author-note bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">
                        About This Compilation
                      </h4>
                      <p>
                        So when the character of Prophet صلى الله عليه وسلم is
                        Quran , the Seerah of Prophet Muhammad صلى الله عليه
                        وسلم is the best way to understand the Quran. Since day
                        one muslims have been narrating and writing upon the
                        Seerah of the Prophet صلى الله عليه وسلم. I am not a
                        scholar of Seerah, but due to the blessing from Allah (
                        سبحانه وتعالى ) I have read a number of Seerah books and
                        works by the scholars in the urdu and english languages.
                        This booklet “The Radiant Seerah” is a collage made from
                        Seerah books written by renowned Seerah Scholars, based
                        on the earliest islamic sources. The under-mentioned
                        books were consulted to compile this booklet.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    // className="py-12 border-b border-gray-200 last:border-b-0"
                  >
                    <h2 className="text-2xl font-bold mb-2 mt-6">
                      {section.title}
                    </h2>
                    <div className="prose">
                      {/* Your content for each section would go here */}
                      {/* <div dangerouslySetInnerHTML={{ __html: section.content }} /> */}
                      {/* Repeat for all 51 points */}
                      {section.content}
                    </div>
                  </div>
                ))}

                {/* References and Contact */}
                <div className="text-center mt-12 border-t pt-4 ">
                  <h4 className="font-bold mb-2">References</h4>
                  <p>
                    1. Muhammad: His Life Based on the Earliest Sources - Martin
                    Lings
                  </p>
                  <p>2. The Sealed Nectar - Safi-ur-Rahman Al-Mubarakpuri</p>
                  <p>3. Tadween-e-Qur'an - Mawlana Syed Manazir Ahsan Gilani</p>
                </div>
                <div className="text-center mt-12 border-t pt-4 ">
                  <p className="text-align-center">Muhammad Junaid Khan</p>
                  <p className="text-align-center">
                    Email: Junaid.khan1962@gmail.com
                  </p>
                  <p className="text-align-center">
                    Cell Phone No. +923003518567
                  </p>
                </div>

                {/* Index/Sidebar Navigation - fixed position */}
                {/* <div className="hidden lg:block w-64 p-4 sticky top-0 h-screen overflow-y-auto">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-4">Index</h3>
                    <nav>
                      <ul className="space-y-2">
                        {sections.map((section) => (
                          <li key={section.id}>
                            <a
                              href={`#${section.id}`}
                              className={`block px-3 py-2 rounded-md transition-colors ${
                                activeSection === section.id
                                  ? "bg-blue-100 text-blue-700 font-medium"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                            >
                              {section.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ContentWithIndex/> */}
    </>
  );
};

export default BlogDetailPage;
