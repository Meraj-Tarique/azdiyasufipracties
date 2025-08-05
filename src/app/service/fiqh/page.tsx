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
         
          </div>
        </div>
      </div>

      {/* <ContentWithIndex/> */}
    </>
  );
};

export default BlogDetailPage;
