

function IVR() {
  return (
  <div>
      <div className="container">
        <h3 style={{display:'flex', justifyContent:'center' }}>Configuring IVR</h3>
        <p>Interactive Voice Response (IVR) is a powerful feature that allows you to automate call routing and provide self-service options to your callers. This guide will walk you through the process of configuring an IVR in the SupportSPOC system.</p>

        <h3>Form Fields</h3>
        <ul>
            <li><strong>IVR Name:</strong> Enter a name for your IVR configuration. This will help you identify it later.</li>
            <li><strong>Welcome Message:</strong> Enter the welcome message that will be played to callers when they connect to your IVR. Make sure it is clear and concise.</li>
            <li><strong>Digits:</strong> Define the digits that callers will press to navigate through your IVR options. Each digit can be assigned a specific action.</li>
        </ul>

        <h3>Allowed Actions</h3>
        <p>You can configure the following actions for each digit:</p>
        <ul>
            <li><strong>Route to a Call Route:</strong> This action routes the call to a predefined call route. Specify the call route in the configuration.</li>
            <li><strong>Route to Another IVR:</strong> This action routes the call to another IVR menu. This is useful for creating multi-level IVR systems.</li>
            <li><strong>End Call:</strong>{` This action ends the call. Use this for options like "Press 9 to end the call".`}</li>
        </ul>

        <h3>Step-by-Step Configuration</h3>
        <ol>
            <li><strong>Log In:</strong><br/>
                Log in to your SupportSPOC account and navigate to the IVR configuration section.
            </li>
            <li><strong>Create a New IVR:</strong><br/>{`
                Click on "Create New IVR" and fill in the form fields as described above.
            `}</li>
            <li><strong>Define Actions for Digits:</strong><br/>{`
                For each digit, specify the action to be taken. You can route the call to a call route, another IVR, or end the call.
            `}</li>
            <li><strong>Save Configuration:</strong><br/>{`
                Once you have defined all the actions, click on "Create IVR" to save your IVR configuration.
            `}</li>
        </ol>

        <div className="note">
            <p><strong>Note:</strong> Ensure that your welcome message clearly instructs callers on what digits to press for different actions. This helps in reducing confusion and improving caller experience.</p>
        </div>
    </div>
  </div>
  );
}

export default IVR;
