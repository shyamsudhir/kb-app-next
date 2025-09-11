

function ForgotPassword() {
  return (
      <>
      <div className="container">
        <h3 style={{display:'flex', justifyContent:'left',fontWeight:'1000' }}>Forgot Password</h3>
        <p>Follow these steps to reset your password:</p>
        <ol>
            <li><strong>Click on Forgot Password:</strong><br/>
                On the <a href="https://app.supportspoc.com/login">Login</a>{` page, click the "Forgot Password" link.
            `}</li>
            <li><strong>Enter Registered Email Address:</strong><br/>
                Provide the email address associated with your account.
            </li>
            <li><strong>Send Activation Code:</strong><br/>
                Click the <button className='ss-button'>Send Activation Code</button> button.
            </li>
            <li><strong>Check Your Email:</strong><br/>
                A verification code to reset your password will be sent to your registered email address.
            </li>
            <li><strong>Reset Password:</strong><br/>{`
                Log in to your email, copy the verification code, and enter it on the "Forgot Password" page to change your password.
            `}</li>
        </ol>

        <div className="note">
            <p><strong>Note:</strong>{` After sending the activation link to new customers who sign up (Account Owners), they have a 7-day window to activate their email address. During this period, they can access their account. This is not applicable to Agents or Admins. Agents or Admins will be able to log in only after the email ID is verified.`}</p>
        </div>
    </div>
      </>  
  );
}

export default ForgotPassword;
