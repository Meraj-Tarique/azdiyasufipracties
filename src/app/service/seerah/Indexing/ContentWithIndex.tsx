"use client";

import { useRef } from "react";
// import { useState, useEffect, useRef } from "react";
import { sections } from "./content";

export default function ContentWithIndex() {
  // const [activeSection, setActiveSection] = useState(null);
  const contentRef = useRef(null);
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
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div ref={contentRef} className="flex-1 p-8">
        {/* Your 51 points would be rendered here as sections */}
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="py-12 border-b border-gray-200 last:border-b-0"
          >
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <div className="prose">
              {/* Your content for each section would go here */}
              <p>Content for {section.title} section...</p>
              {/* Repeat for all 51 points */}
            </div>
          </section>
        ))}
      </div>

      {/* Index/Sidebar Navigation - fixed position */}
      <div className="hidden lg:block w-64 p-4 sticky top-0 h-screen overflow-y-auto">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-bold text-lg mb-4">Index</h3>
          <nav>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`block px-3 py-2 rounded-md transition-colors `}
                    //  ${
                    // activeSection === section.id
                    //   ? "bg-blue-100 text-blue-700 font-medium"
                    //   : "text-gray-700 hover:bg-gray-100"
                    // }
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
