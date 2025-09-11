
import Company from "../../components/Contact/Company";
export async function generateMetadata() {
  return {
    title: "Companies | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Manage company accounts and organize customer support with SupportSPOC’s Ticketing System, Live Chat, and AI Chatbot.",
    keywords: [
      "companies",
      "company accounts",
      "ticketing system",
      "live chat support",
      "AI chatbot",
      "customer support software",
    ],
    openGraph: {
      title: "Companies | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Easily manage multiple companies and streamline customer queries with SupportSPOC’s all-in-one customer support platform.",
      type: "website",
      url: "https://www.supportspoc.com/companies",
      images: [
        {
          url: "https://www.supportspoc.com/images/companies-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Companies Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Companies | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Organize company accounts and improve support efficiency with SupportSPOC’s Ticketing System, Live Chat, and AI Chatbot.",
      images: [
        "https://www.supportspoc.com/images/companies-preview.png",
      ],
    },
  };
}

export default function Page() {
  return <Company />;
}
