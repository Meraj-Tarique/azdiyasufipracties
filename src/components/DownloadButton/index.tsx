import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DownloadButton {
  url: string;
}
const DownloadButton = ({ url }: DownloadButton) => {
  return (
    <div className="absolute right-0 top-0">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={url}
              download="The-Radiant-Seerah.pdf"
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
  );
};

export default DownloadButton;
