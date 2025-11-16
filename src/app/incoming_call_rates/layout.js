export const metadata = {
  title: "Incoming Call | SupportSPOC Ticketing, Live Chat & AI Chatbot",
  description:
    "Manage incoming customer calls directly from SupportSPOC alongside tickets, live chat, and AI chatbot.",
  keywords: [
    "incoming call",
    "call support",
    "live chat",
    "AI chatbot",
    "ticketing system",
  ],
  openGraph: {
    title: "Incoming Call | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Handle incoming calls and integrate them with tickets and chats in SupportSPOC’s customer support platform.",
    type: "website",
    url: "https://www.supportspoc.com/incoming-call",
    images: [
      {
        url: "https://www.supportspoc.com/images/incoming-call-preview.png",
        width: 1200,
        height: 630,
        alt: "SupportSPOC Incoming Call Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Incoming Call | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Receive and manage customer calls in SupportSPOC along with tickets, chats, and AI chatbot support.",
    images: [
      "https://www.supportspoc.com/images/incoming-call-preview.png",
    ],
  },
};

export default function IncomingCallRatesLayout({ children }) {
  return children;
}