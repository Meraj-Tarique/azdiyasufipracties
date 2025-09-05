import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DownloadButton {
  url: string;
  fileName?: string;
}

const DownloadButton = ({ url, fileName = "Document.pdf" }: DownloadButton) => {
  return (
    <>
      {/* Desktop Version (top-right) */}
      <div className="hidden md:block ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={url}
                download={fileName}
                className="inline-flex items-center px-3 py-1.5 bg-gray-50/90 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span className="text-sm font-medium">Download PDF</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download as a PDF</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Mobile/Tablet Version (bottom-left) */}
      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={url}
                download={fileName}
                className="inline-flex items-center justify-center p-2 bg-gray-50/90 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-full shadow-lg transition-all duration-300"
                aria-label="Download PDF"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Download {fileName}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};

export default DownloadButton;