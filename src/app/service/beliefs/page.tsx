/* eslint-disable react/no-unescaped-entities */
// "use client";
import styles from "@/styles/missionStyle.module.css";
import { sections } from "./Content/content";
import DownloadButton from "@/components/DownloadButton";
import MainHeading from "@/components/Headings/MainHeading";
import Link from "next/link";

// export const metadata = {
//   title: "SEERAH",
//   description: "This is about SEERAH.",
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
//   userScalable: "no",
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

            {/* <div className={`text-center mb-12   ${styles.textStyle}`}>
             
              <h1 className="text-4xl font-bold mb-4">BELIEFS AND CREEDS OF</h1>
              <h2 className="text-3xl font-bold mb-2">
                AHL AS-SUNNAH WA'L-JAMAA'AH
              </h2>
            </div> */}
            <div className={`text-center mb-12 ${styles.textStyle} relative`}>
              <h1
                className=" font-bold  md:mb-2
              sm:text-xl 
              md:text-1xl 
              lg:text-3xl 
              xl:text-3xl
                "
              >
                𝙱𝙴𝙻𝙸𝙴𝙵𝚂 𝙰𝙽𝙳 𝙲𝚁𝙴𝙴𝙳𝚂 𝙾𝙵
              </h1>
              <h2
                className="font-bold mb-2
              sm:text-xl 
              md:text-1xl 
              lg:text-3xl 
              xl:text-3xl"
              >
                𝙰𝙷𝙻 𝙰𝚂-𝚂𝚄𝙽𝙽𝙰𝙷 𝚆𝙰'𝙻-𝙹𝙰𝙼𝙰𝙰'𝙰𝙷
              </h2>
              <DownloadButton url="https://raw.githubusercontent.com/Meraj-Tarique/azdiyasufipracties/ebe1a2a173aef33d75e2cbd4d4e13161ffe43eec/Beliefs%20and%20Creeds.pdf" />
              <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-4">
                <div>
                  <Link href="/service/saints-biographies/Beliefs and Creeds of Ahl As-Sunnah Wa'-L-Jama'Ah" className="text-sm  border-[1px] border-black rounded-md p-1">
                    Read In Urdu
                  </Link>
                </div>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto md:p-6 bg-white text-slate-800 font-sans">
              {/* Cover Page */}

              {/* Main Content */}
              <div className="mb-8">
                {/* Main Content */}
                {sections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    // className="py-12 border-b border-gray-200 last:border-b-0"
                  >
                    <h2 className="text-2xl font-bold mb-2 mt-6 underline">
                      {section.title}
                    </h2>
                    <div className="prose ">
                      {/* Your content for each section would go here */}
                      {/* <div dangerouslySetInnerHTML={{ __html: section.content }} /> */}
                      {/* Repeat for all 51 points */}
                      {section.content}
                    </div>
                  </div>
                ))}

                {/* References and Contact */}
                <div className=" mt-12 border-t pt-4 ">
                  <h4 className="font-bold mb-2">References</h4>
                  <div className="references">
                    <div className="reference-item">
                      <span className="ref-number">1.</span>
                      <span className="ref-text">
                        AQEEDAH AHL AL SUNNAH WA AL JAMA’H (URDU BOOK) By:
                        Allama Syed Sulaiman Nadwi (may ALLAH KARIM have mercy
                        on him) Publisher: Majlis Nashriat-e-Islam, Nazimabad,
                        Karachi.
                      </span>
                    </div>
                  </div>
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
