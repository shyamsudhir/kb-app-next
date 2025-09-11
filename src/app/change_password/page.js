export async function generateMetadata() {
  return {
    title: "Change Password | SupportSPOC Ticketing, Live Chat & AI Chatbot",
    description:
      "Securely change your account password in SupportSPOC’s Ticketing System, Live Chat, and AI Chatbot platform.",
    keywords: [
      "change password",
      "account security",
      "ticketing system",
      "live chat support",
      "AI chatbot",
    ],
    openGraph: {
      title: "Change Password | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Update your account password safely with SupportSPOC’s secure customer support platform.",
      type: "website",
      url: "https://www.supportspoc.com/change-password",
      images: [
        {
          url: "https://www.supportspoc.com/images/change-password-preview.png",
          width: 1200,
          height: 630,
          alt: "SupportSPOC Change Password Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Change Password | SupportSPOC Ticketing, Live Chat & AI Chatbot",
      description:
        "Easily change your account password and keep your SupportSPOC profile secure across Ticketing, Live Chat, and AI Chatbot.",
      images: [
        "https://www.supportspoc.com/images/change-password-preview.png",
      ],
    },
  };
}
function ChangePassword() {
  return (
          <>      
<div className="container">                
  <h1
    style={{
      display: 'flex',
      justifyContent: 'left',
      fontWeight: '1000',
      marginTop: '20px',
    }}
  >
    Welcome to SUPPORTSPOC!
  </h1>
  <i style={{ fontSize: '14px' }}>Updated On 30-Aug-2024</i>

  <h3
    style={{ display: 'flex', justifyContent: 'left', fontWeight: '1000' }}
  >
    Change Password
  </h3>
  <p>
    Agents have the flexibility to update their password directly from their
    profile. Follow these steps to change your password:
  </p>
  <ol>
    <li>
      <strong>Log In:</strong>
      <br />
      Visit the SupportSPOC website and{" "}
      <a href="https://app.supportspoc.com/login">Login</a> to your account
      using your email and password.
    </li>
    <li>
      <strong>Access Profile Menu:</strong>
      <br />
      Click on the icon at the top-right part of the page. A dropdown menu will
      appear.
    </li>
    <li>
      <strong>Select Change Password:</strong>
      <br />{`
      In the dropdown menu, click on &quot;Change Password&quot;. This will take
      you to the form to change your password.
    `}</li>
    <li>
      <strong>Enter Current Password:</strong>
      <br />{`
      To ensure security, you&apos;ll typically be required to enter your
      current password before proceeding to change it.
    `}</li>
    <li>
      <strong>Enter New Password:</strong>
      <br />{`
      Next, enter your desired new password. Make sure it meets any requirements
      specified by SUPPORTSPOC, such as minimum length or character types.
    `}</li>
    <li>
      <strong>Confirm New Password:</strong>
      <br />{`
      After entering your new password, you&apos;ll usually be asked to confirm
      it by typing it again. This helps ensure that you&apos;ve entered the
      correct password.
    `}</li>
    <li>
      <strong>Finalize Change:</strong>
      <br />{`
      Once you&apos;ve entered and confirmed your new password, look for a
      &quot;Change Password&quot; button. Click this to finalize the password
      change.
    `}</li>
  </ol>
</div>

   </>
  );
}

export default ChangePassword;
