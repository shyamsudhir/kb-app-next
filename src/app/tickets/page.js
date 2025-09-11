
import Ticket from "../../components/Ticket/Ticket.js";

export async function generateMetadata() {
  return {
    title: "Create Ticket | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Create new support tickets in SupportSPOC. Track customer queries across ticketing, live chat, and AI chatbot channels.",
    keywords: [
      "create ticket",
      "ticketing system",
      "live chat",
      "AI chatbot",
      "customer support",
    ],
    openGraph: {
      title: "Create Ticket | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Easily create and manage support tickets with SupportSPOC’s all-in-one customer support platform.",
      url: "https://www.supportspoc.com/create-ticket",
      images: [
        {
          url: "https://www.supportspoc.com/images/create-ticket-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Create Ticket Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Create Ticket | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Log new support tickets and track them with SupportSPOC’s integrated Ticketing, Live Chat, and AI Chatbot system.",
      images: [
        "https://www.supportspoc.com/images/create-ticket-preview.png",
      ],
    },
  };
}

export default function Page() {
  return <Ticket />;
}
