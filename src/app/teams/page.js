
import Team from "../../components/Agent/Team";

export const metadata = {
  title: "Team | SupportSPOC Ticketing, Live Chat & AI Chatbot",
  description:
    "Manage your support team in SupportSPOC. Assign roles, track performance, and collaborate across tickets, chats, and AI chatbot.",
  keywords: [
    "team management",
    "support team",
    "ticketing system",
    "live chat",
    "AI chatbot",
  ],
  openGraph: {
    title: "Team | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Add and manage team members in SupportSPOC to handle tickets, live chats, and calls effectively.",
    url: "https://www.supportspoc.com/team",
    images: [
      {
        url: "https://www.supportspoc.com/images/team-preview.png",
        width: 1200,
        height: 630,
        alt: "SupportSPOC Team Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Manage your support team with roles and permissions inside SupportSPOC’s all-in-one support platform.",
    images: ["https://www.supportspoc.com/images/team-preview.png"],
  },
};


export default function Page() {
  return <Team />;
}
