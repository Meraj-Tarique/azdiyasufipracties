import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import ContactForm from "./ContactFormClient";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Azdiya Sufi Practices for questions, feedback, or guidance related to Islamic teachings and spiritual resources.",
  path: "/contact",
  keywords: ["contact Azdiya Sufi Practices", "Islamic guidance contact"],
});

export default function ContactPage() {
  return <ContactForm />;
}
