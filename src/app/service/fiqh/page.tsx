/* eslint-disable react/no-unescaped-entities */
// "use client";
import styles from "@/styles/missionStyle.module.css";
import { sections } from "./Content/content";

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
            <div className="bg-white-600 text-white p-6 items-center flex-col flex justify-center mb-8">
              <h1
                className="text-center 
              sm:text-3xl   
               md:text-3xl 
               lg:text-4xl 
               xl:text-5xl 
               2xl:text-6xl font-bold italic text-slate-800"
              >
                In the Name of ALLAH, the Beneficent, the Merciful
              </h1>
            </div>
            <div className={`text-center mb-12 ${styles.textStyle}`}>
              <h1
                className=" font-bold md:mb-2
                 sm:text-1xl 
               md:text-2xl 
               lg:text-3xl 
               xl:text-4xl 
               2xl:text-5xl
                "
              >
                FIQH (JURISPRUDENCE)
              </h1>
              <h2
                className="font-bold mb-2
                   sm:text-1xl 
               md:text-2xl 
               lg:text-3xl 
               xl:text-4xl 
               2xl:text-5xl"
              >
                AN INTEGRAL PART OF COMPREHENSIVE ISLAMIC LAW
              </h2>
            </div>
            <div className="max-w-4xl mx-auto md:p-6 bg-white text-slate-800 font-sans">
              {/* Cover Page */}

              {/* Main Content */}
              <div className="mb-8">
                {/* Introduction */}
                <div className="preface-section">
                  <h3 className="text-2xl font-bold mb-4 text-primary underline">
                    1. PREFACE
                  </h3>

                  <div className="preface-content">
                    <div className="mb-6">
                      <p className="text-justify leading-relaxed">
                        This paper is prepared to provide information considered
                        imperative for common reader, upon the Topic of Fiqh
                        (Jurisprudence) an integral part of Comprehensive
                        Islamic Law.
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
                <div className=" mt-12 border-t pt-4">
                  <h4 className="font-bold mb-2">References</h4>
                  <div className="references">
                    <div className="reference-item">
                      <span className="ref-number">1.</span>
                      <span className="ref-text">
                        Source Methodology In Islamic Jurisprudence (Usul
                        al-Fiqh al-Islami) - Taha Jabir al'Alwani (English
                        Edition by Yusuf Talal Delorenzo & A. S. Al-Shaikh Ali,
                        The International Institute of Islamic Thought, Herndon,
                        Virginia USA)
                      </span>
                    </div>
                    <div className="reference-item">
                      <span className="ref-number">2.</span>
                      <span className="ref-text">
                        Summarized Islamic Fiqh In Light of the Qur'an and
                        Sunnah (Part One) - Muhammad bin Ibrahim bin 'Abdullah
                        al-Tuwayjiri (Translation: Kamil Ahmad & Jawad Beg)
                      </span>
                    </div>
                    <div className="reference-item">
                      <span className="ref-number">3.</span>
                      <span className="ref-text">
                        Fiqh, Made Easy (A Basic Textbook on Fiqh) - Dr. Saalih
                        ibn Ghaanim al-Sadlaan (Translated by: Jamaal al-Din M.
                        Zarabozo)
                      </span>
                    </div>
                    <div className="reference-item">
                      <span className="ref-number">4.</span>
                      <span className="ref-text">
                        The Evolution of FIQH (Islamic Law and the Madh'habs) -
                        Dr. Abu Ameenah Bilal Philips (International Islamic
                        Publishing House)
                      </span>
                    </div>
                    <div className="reference-item">
                      <span className="ref-number">5.</span>
                      <span className="ref-text">
                        Mo'ha'draat Fiqh (Urdu Book) - Dr. Mehmood Ahmed Ghazi
                        (Al-Faisal Publishers, Lahore, Pakistan)
                      </span>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <p>Compiled by: Muhammad Junaid Khan</p>
                    <p>Email: junaid.khan1962@gmail.com</p>
                    <p>Phone: (+92) 300 3518567</p>
                    <p>Karachi, Pakistan</p>
                  </div>
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
