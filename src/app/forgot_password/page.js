
import ForgotPassword from "../../components/GettingStarted/ForgotPassword.js";

export async function generateMetadata() {
  return {
    title: "Forgot Password | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Reset your SupportSPOC account password securely. Access your Ticketing System, Live Chat, and AI Chatbot platform without interruptions.",
    keywords: [
      "forgot password",
      "reset password",
      "account recovery",
      "ticketing system",
      "live chat",
      "AI chatbot",
    ],
    openGraph: {
      title: "Forgot Password | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Recover your SupportSPOC account by resetting your password securely and regain access to all support tools.",
      type: "website",
      url: "https://www.supportspoc.com/forgot-password",
      images: [
        {
          url: "https://www.supportspoc.com/images/forgot-password-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Forgot Password Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Forgot Password | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Reset your password securely and continue managing tickets, live chats, and AI chatbot interactions with SupportSPOC.",
      images: [
        "https://www.supportspoc.com/images/forgot-password-preview.png",
      ],
    },
  };
}


export default function Page() {
  return <ForgotPassword />;
}
