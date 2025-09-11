import TicketFilter from "../../components/Ticket/TicketFilter.js";

export async function generateMetadata() {
  return {
    title: "Ticket Filters | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Filter and manage tickets in SupportSPOC. Quickly find customer queries across ticketing, live chat, and AI chatbot.",
    keywords: [
      "ticket filters",
      "ticketing system",
      "live chat",
      "AI chatbot",
      "customer support software",
    ],
    openGraph: {
      title: "Ticket Filters | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Organize tickets with filters and manage support efficiently using SupportSPOC’s customer support suite.",
      url: "https://www.supportspoc.com/ticket-filters",
      images: [
        {
          url: "https://www.supportspoc.com/images/ticket-filters-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Ticket Filters Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ticket Filters | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Quickly filter tickets and improve response times with SupportSPOC’s Ticketing, Live Chat, and AI Chatbot system.",
      images: ["https://www.supportspoc.com/images/ticket-filters-preview.png"],
    },
  };
}

export default function Page() {
  return <TicketFilter />;
}
