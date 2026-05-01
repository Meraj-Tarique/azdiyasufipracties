import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import PDFViewer from "./PDFViewerClient";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    name?: string;
  }>;
};

function decodeTitle(value?: string) {
  if (!value) {
    return "Saint Biography";
  }

  return decodeURIComponent(value).replace(/-/g, " ");
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { name } = await searchParams;
  const title = decodeTitle(name || slug);

  return createMetadata({
    title,
    description: `Read and download the biography of ${title}, an Islamic spiritual guide and saint, from Azdiya Sufi Practices.`,
    path: `/service/saints-biographies/${encodeURIComponent(slug)}`,
    keywords: [title, "Islamic saint biography", "Sufi biography"],
  });
}

export default function SaintsBiographyPage() {
  return <PDFViewer />;
}
