
import Contact from "../../components/Contact/Contact.js";
 
export async function generateMetadata() {
  return {
    title: "Contacts | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Manage all customer contacts in SupportSPOC. Track tickets, live chats, and AI chatbot interactions for better support.",
    keywords: [
      "contacts",
      "customer contacts",
      "ticketing system",
      "live chat",
      "AI chatbot",
      "support CRM",
    ],
    openGraph: {
      title: "Contacts | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Centralize customer contacts and manage tickets, live chats, and chatbot queries with SupportSPOC.",
      type: "website",
      url: "https://www.supportspoc.com/contacts",
      images: [
        {
          url: "https://www.supportspoc.com/images/contacts-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Contacts Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contacts | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Easily manage customer contacts and streamline support with SupportSPOC’s Ticketing, Live Chat, and AI Chatbot.",
      images: [
        "https://www.supportspoc.com/images/contacts-preview.png",
      ],
    },
  };
}

export default function Page() {
  return <Contact />;
}
