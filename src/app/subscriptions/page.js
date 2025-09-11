
import Subscription from "../../components/Admin/Subscription";

export const metadata = {
  title: "Subscription | SupportSPOC Ticketing, Live Chat & AI Chatbot",
  description:
    "Manage your SupportSPOC subscription. Access Ticketing, Live Chat, and AI Chatbot features for smarter customer support.",
  keywords: [
    "subscription",
    "pricing",
    "ticketing system",
    "live chat",
    "AI chatbot",
  ],
  openGraph: {
    title: "Subscription | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Choose a SupportSPOC subscription plan and streamline your customer support with ticketing, chat, and AI features.",
    url: "https://www.supportspoc.com/subscription",
    images: [
      {
        url: "https://www.supportspoc.com/images/subscription-preview.png",
        width: 1200,
        height: 630,
        alt: "SupportSPOC Subscription Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscription | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Manage your subscription and unlock powerful support tools with SupportSPOC’s integrated platform.",
    images: ["https://www.supportspoc.com/images/subscription-preview.png"],
  },
};



export default function Page() {
  return <Subscription />;
}
