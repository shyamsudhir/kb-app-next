
import CompanyGroup from "../../components/Contact/CompanyGroup";

export async function generateMetadata() {
  return {
    title: "Company Groups | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Create and manage company groups in SupportSPOC to organize customer support across tickets, live chat, and AI chatbot.",
    keywords: [
      "company groups",
      "group management",
      "ticketing system",
      "live chat support",
      "AI chatbot",
    ],
    openGraph: {
      title: "Company Groups | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Organize companies into groups and streamline customer queries with SupportSPOC’s all-in-one support platform.",
      type: "website",
      url: "https://www.supportspoc.com/company-groups",
      images: [
        {
          url: "https://www.supportspoc.com/images/company-groups-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Company Groups Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Company Groups | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Easily manage company groups and improve support efficiency with SupportSPOC’s Ticketing, Live Chat, and AI Chatbot.",
      images: [
        "https://www.supportspoc.com/images/company-groups-preview.png",
      ],
    },
  };
}
export default function Page() {
  return <CompanyGroup />;
}
