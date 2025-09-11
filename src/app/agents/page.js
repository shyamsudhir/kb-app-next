import Agent from "../../components/Agent/Agent";

export async function generateMetadata() {
  // later you can fetch agent-specific info here if needed
  return {
    title: "Agents | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Add agents to handle tickets, live chats, and calls with SupportSPOC’s Ticketing System, Live Chat, and AI Chatbot.",
    keywords: [
      "agents ticketing system",
      "live chat support",
      "AI chatbot",
      "customer support software",
    ],
    openGraph: {
      title: "Agents | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Easily add agents to handle tickets, live chats, and calls with SupportSPOC’s customer support platform.",
      type: "website",
      url: "https://www.supportspoc.com/agents",
      images: [
        {
          url: "https://www.supportspoc.com/images/ticket-filters-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Agents Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Agents | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Add agents to manage tickets, live chats, and calls with SupportSPOC’s Ticketing System, Live Chat, and AI Chatbot.",
      images: ["https://www.supportspoc.com/images/ticket-filters-preview.png"],
    },
  };
}

export default function Page() {
  return <Agent />;
}
