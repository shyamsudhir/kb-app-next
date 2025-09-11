
import ContactGroup from "../../components/Contact/ContactGroup";

export async function generateMetadata() {
  return {
    title: "Contact Groups | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Create and manage contact groups in SupportSPOC to organize tickets, live chats, and AI chatbot interactions.",
    keywords: [
      "contact groups",
      "customer segmentation",
      "ticketing system",
      "live chat",
      "AI chatbot",
    ],
    openGraph: {
      title: "Contact Groups | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Group contacts for smarter support management with SupportSPOC’s Ticketing System, Live Chat, and AI Chatbot.",
      type: "website",
      url: "https://www.supportspoc.com/contact-groups",
      images: [
        {
          url: "https://www.supportspoc.com/images/contact-groups-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Contact Groups Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Groups | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Easily manage contact groups and deliver organized customer support with SupportSPOC.",
      images: [
        "https://www.supportspoc.com/images/contact-groups-preview.png",
      ],
    },
  };
}
export default function Page() {
  return <ContactGroup />;
}
