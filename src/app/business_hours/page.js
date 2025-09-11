
import BusinessHours from "../../components/Admin/BusinessHours";

export async function generateMetadata() {
  return {
    title: "Business Hours | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Set business hours with SupportSPOC. Control when agents handle tickets, live chats, and calls for smarter customer support.",
    keywords: [
      "business hours",
      "ticketing system",
      "live chat support",
      "AI chatbot",
      "customer support software",
    ],
    openGraph: {
      title: "Business Hours | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Define business hours so your agents manage tickets, chats, and calls effectively with SupportSPOC’s all-in-one support platform.",
      type: "website",
      url: "https://www.supportspoc.com/business-hours",
      images: [
        {
          url: "https://www.supportspoc.com/images/business-hours-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Business Hours Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Business Hours | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Set business hours and improve customer support by managing tickets, live chats, and calls with SupportSPOC.",
      images: ["https://www.supportspoc.com/images/business-hours-preview.png"],
    },
  };
}

export default function Page() {
  return <BusinessHours />;
}
