"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
// https://tools.picsart.com/text/font-generator/small/

import { Worker, Viewer, ProgressBar } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import MainHeading from "@/components/Headings/MainHeading";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import DownloadButton from "@/components/DownloadButton";

// const ESignatureComponent = dynamic(() => import("@modules/filemanager/Esignature/"), {
//   ssr: false,
// });
const PDFViewer = () => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const viewerRef = useRef(null);
  const { slug } = useParams();
  const search = useSearchParams();
  const Title = search.get("name");
  const zoomPluginInstance = zoomPlugin();
  const [pdfFile /*setPdfFile */] = useState(`/documents/${slug}.pdf`);

  useEffect(() => {
    // This code only runs on the client
    setIsClient(true);

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="max-w-8xl mx-auto py-10 px-5 mt-8 text-xl">
      <div className="lg:p-8 pt-1 space-y-2 w-full lg:w-[85%] mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
          <MainHeading />

          {/* Coming Soon Section */}
          <div className="text-center p-1">
            <div className="mb-1">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-1">
                {Title}
              </h2>
              <DownloadButton url={pdfFile} />
            </div>
          </div>
          <div>
            <div className="pdf-viewer-container h-screen">
              {/* <div className="zoom-controls-panel">
                <h3>Zoom Level: {(initialZoom * 100).toFixed(0)}%</h3>
                <div className="zoom-buttons">
                  <button
                    onClick={() => setZoomLevel(initialZoom - 0.25)}
                    disabled={initialZoom <= 0.5}
                  >
                    Zoom Out
                  </button>
                  <button onClick={() => setZoomLevel(1)}>Reset</button>
                  <button
                    onClick={() => setZoomLevel(initialZoom + 0.25)}
                    disabled={initialZoom >= 3}
                  >
                    Zoom In
                  </button>
                </div>
                <div className="preset-zooms">
                  <span>Presets: </span>
                  <button onClick={() => setZoomLevel(0.75)}>75%</button>
                  <button onClick={() => setZoomLevel(1)}>100%</button>
                  <button onClick={() => setZoomLevel(1.5)}>150%</button>
                  <button onClick={() => setZoomLevel(2)}>200%</button>
                </div>
              </div> */}

              {isClient ? (
                <div
                  className="rpv-core__viewer"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    minHeight: "500px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                  ref={viewerRef}
                >
                  <div
                    style={{
                      alignItems: "center",
                      backgroundColor: "#eeeeee",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      padding: "4px",
                      flexWrap: isMobile ? "wrap" : "nowrap",
                      minHeight: isMobile ? "80px" : "auto",
                    }}
                  >
                    <Toolbar>
                      {(props) => {
                        const {
                          CurrentPageInput,
                          Download,
                          EnterFullScreen,
                          GoToNextPage,
                          GoToPreviousPage,
                          NumberOfPages,
                          Print,
                          ShowSearchPopover,
                          Zoom,
                          ZoomIn,
                          ZoomOut,
                        } = props;
                        return (
                          <>
                            {/* Top row for mobile */}
                            <div
                              style={{
                                display: "flex",
                                width: isMobile ? "100%" : "auto",
                                justifyContent: isMobile
                                  ? "space-between"
                                  : "flex-start",
                                marginBottom: isMobile ? "8px" : "0",
                              }}
                            >
                              <div style={{ padding: "0px 2px" }}>
                                <ShowSearchPopover />
                              </div>
                              <div style={{ padding: "0px 2px" }}>
                                <ZoomOut />
                              </div>
                              <div style={{ padding: "0px 2px" }}>
                                <Zoom />
                              </div>
                              <div style={{ padding: "0px 2px" }}>
                                <ZoomIn />
                              </div>
                              {!isMobile && (
                                <div
                                  style={{
                                    padding: "0px 2px",
                                    marginLeft: "auto",
                                  }}
                                >
                                  <EnterFullScreen />
                                </div>
                              )}
                            </div>

                            {/* Bottom row for mobile */}
                            <div
                              style={{
                                display: "flex",
                                width: isMobile ? "100%" : "auto",
                                justifyContent: isMobile
                                  ? "space-between"
                                  : "flex-start",
                              }}
                            >
                              <div style={{ padding: "0px 2px" }}>
                                <GoToPreviousPage />
                              </div>
                              <div
                                style={{
                                  padding: "0px 2px",
                                  width: isMobile ? "3rem" : "4rem",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <CurrentPageInput />
                              </div>
                              <div
                                style={{
                                  padding: "0px 2px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                / <NumberOfPages />
                              </div>
                              <div style={{ padding: "0px 2px" }}>
                                <GoToNextPage />
                              </div>

                              {isMobile ? (
                                <>
                                  <div style={{ padding: "0px 2px" }}>
                                    <Download />
                                  </div>
                                  <div style={{ padding: "0px 2px" }}>
                                    <Print />
                                  </div>
                                  <div style={{ padding: "0px 2px" }}>
                                    <EnterFullScreen />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div
                                    style={{
                                      padding: "0px 2px",
                                      marginLeft: "auto",
                                    }}
                                  >
                                    <Download />
                                  </div>
                                  <div style={{ padding: "0px 2px" }}>
                                    <Print />
                                  </div>
                                </>
                              )}
                            </div>
                          </>
                        );
                      }}
                    </Toolbar>
                  </div>
                  <div
                    style={{
                      flex: 1,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {pdfFile ? (
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer
                          fileUrl={pdfFile}
                          // plugins={[toolbarPluginInstance]}
                          plugins={[toolbarPluginInstance, zoomPluginInstance]}
                          defaultScale={1}
                          renderLoader={(percentages: any) => (
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <div style={{ width: "240px" }}>
                                <ProgressBar
                                  progress={Math.round(percentages)}
                                />
                              </div>
                            </div>
                          )}
                        />
                      </Worker>
                    ) : (
                      "loading..."
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex justify-center items-center h-96">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading PDF viewer...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
