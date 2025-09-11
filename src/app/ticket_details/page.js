
import TicketDetails from "../../components/Ticket/TicketDetails";


export const metadata = {
  title: "Ticket Priority & Status | SupportSPOC Ticketing, Live Chat & AI Chatbot",
  description:
    "Set and manage ticket priorities and statuses in SupportSPOC. Improve resolution times across ticketing, live chat, and AI chatbot.",
  keywords: [
    "ticket priority",
    "ticket status",
    "ticketing system",
    "live chat",
    "AI chatbot",
  ],
  openGraph: {
    title: "Ticket Priority & Status | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Manage support workflows with ticket priority and status settings in SupportSPOC’s platform.",
    url: "https://www.supportspoc.com/ticket-priority-status",
    images: [
      {
        url: "https://www.supportspoc.com/images/ticket-priority-status-preview.png",
        width: 1200,
        height: 630,
        alt: "SupportSPOC Ticket Priority & Status Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticket Priority & Status | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Customize ticket priorities and statuses for faster resolution with SupportSPOC’s customer support tools.",
    images: [
      "https://www.supportspoc.com/images/ticket-priority-status-preview.png",
    ],
  },
};


export default function Page() {
  return <TicketDetails />;
}
