// src/app/calls/layout.js
export const metadata = {
  title: "Purchase Phone Number | SupportSPOC Ticketing, Live Chat & AI Chatbot",
  description:
    "Purchase phone numbers inside SupportSPOC to handle calls, tickets, and chats from one support platform.",
  keywords: [
    "purchase phone number",
    "call support",
    "ticketing system",
    "live chat",
    "AI chatbot",
  ],
  openGraph: {
    title:
      "Purchase Phone Number | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Buy phone numbers and manage calls seamlessly with SupportSPOC's customer support suite.",
    url: "https://www.supportspoc.com/purchase-phone-number",
    images: [
      {
        url: "https://www.supportspoc.com/images/purchase-phone-number-preview.png",
        width: 1200,
        height: 630,
        alt: "SupportSPOC Purchase Phone Number Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Purchase Phone Number | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Add phone numbers for customer calls and integrate them with ticketing, live chat, and AI chatbot in SupportSPOC.",
    images: [
      "https://www.supportspoc.com/images/purchase-phone-number-preview.png",
    ],
  },
};

export default function CallsLayout({ children }) {
  return children;
}