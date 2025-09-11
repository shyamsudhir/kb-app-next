import Image from 'next/image';


function GettingStarted() {
  return (
          
    <div className="container">
        

        <h1 style={{display:'flex', justifyContent:'left',fontWeight:'1000',marginTop:'20px'}}>Welcome to SUPPORTSPOC!</h1>
        <i style={{fontSize:'14px'}}>Updated On 30-Aug-2024</i>
        <p style={{marginTop:'30px'}}>{`We're thrilled to have you join our community dedicated to providing top-notch assistance and solutions for all your needs. At SUPPORTSPOC, we serve as your Single Point Of Contact for all support needs, ensuring a seamless and efficient support experience. We are glad to have you onboard.`}</p>

        <h3 >Create an Account</h3>
        <p>{`To create an account, follow these simple steps:`}</p>
        <ol>
            <li><strong>Navigate to the SupportSPOC Website:</strong><br/>
                Open your web browser and go to <a href='https://supportspoc.com' target='_blank'>supportspoc.com</a>.
            </li>
            <li><strong>Fill Out the Sign-Up Form:</strong><br/>
                <ul>
                    <li><strong>Full Name:</strong> Enter your full name.</li>
                    <li><strong>Email Address:</strong>{` Provide a working email address, preferably your business email.`}</li>
                    <li><strong>Mobile Number:</strong> Enter a valid mobile number.</li>
                    <li><strong>Password:</strong> Create a strong password.</li>
                    <li><strong>Company Name:</strong> Provide the name of your company or organization for your convenience.</li>
                </ul>
                <Image src="./signup.png" alt="Sign Up Form" className="" width={500} height={300} />
            </li>
            <li><strong>Submit the Form:</strong><br/>{`
                Click the "Sign Up" button to submit your information.
            `}</li>
        </ol>

        <h3 style={{display:'flex', justifyContent:'left',fontWeight:'1000',fontSize:'22px' }}>Password Recommendations</h3>
        <p>We recommend creating a strong password by combining:</p>
        <ul>
            <li>Uppercase letters (A to Z)</li>
            <li>Lowercase letters (a to z)</li>
            <li>Numbers (0 to 9)</li>
            <li>{`Special characters ($, %, &, *, !)`}</li>
        </ul>
        <p>{`Avoid using easily guessable information such as common words, names, or sequential numbers.`}</p>

        <h3 style={{display:'flex', justifyContent:'left',fontWeight:'1000',fontSize:'22px' }}>Account Activation</h3>
        <p>{`After a successful signup, an activation link will be sent to your registered email address. Please follow these steps to activate your account:`}</p>
        <ol>
            <li><strong>Check Your Email:</strong><br/>{`
                Look for the activation email in your inbox. If you don't see it, check your spam or junk folder.
            `}</li>
            <li><strong>Activate Your Account:</strong><br/>
                Click on the activation link provided in the email to activate your account.
            </li>
        </ol>

        <h3 style={{display:'flex', justifyContent:'left',fontWeight:'1000' }}>Trial Period</h3>
        <p>All customers will have a trial period of two weeks (14 days) to explore and utilize our services.</p>

        <div className="note">
            <p><strong>Note:</strong>{` If you encounter any issues during the signup process or do not receive the activation email, please contact our support team for assistance.`}</p>
        </div>

        <p>{`We're excited to have you with us and look forward to supporting your needs effectively!`}</p>

        <a href="https://app.supportspoc.com/signup" className="btn">Get Started</a>
    </div>

  );
}

export default GettingStarted;
