import {useState, useRef, setState, useEffect} from 'react';

function ChangePassword() {
  return (
          <>      
        <div className="container">                
                <h1 style={{display:'flex', justifyContent:'left',fontWeight:'1000',marginTop:'20px'}}>Welcome to SUPPORTSPOC!</h1>
                <i style={{fontSize:'14px'}}>Updated On 30-Aug-2024</i>

                <h3 style={{display:'flex', justifyContent:'left',fontWeight:'1000' }}>Change Password</h3>
                <p>Agents have the flexibility to update their password directly from their profile. Follow these steps to change your password:</p>
                <ol>
                    <li><strong>Log In:</strong><br/>
                        Visit the SupportSPOC website and <a href="https://app.supportspoc.com/login">Login</a> to your account using your email and password.
                    </li>
                    <li><strong>Access Profile Menu:</strong><br/>
                        Click on the icon at the top-right part of the page. A dropdown menu will appear.
                    </li>
                    <li><strong>Select Change Password:</strong><br/>{`
                        In the dropdown menu, click on "Change Password". This will take you to the form to change your password.
                    `}</li>
                    <li><strong>Enter Current Password:</strong><br/>{`
                        To ensure security, you'll typically be required to enter your current password before proceeding to change it.
                    `}</li>
                    <li><strong>Enter New Password:</strong><br/>{`
                        Next, enter your desired new password. Make sure it meets any requirements specified by SUPPORTSPOC, such as minimum length or character types.
                    `}</li>
                    <li><strong>Confirm New Password:</strong><br/>{`
                        After entering your new password, you'll usually be asked to confirm it by typing it again. This helps ensure that you've entered the correct password.
                    `}</li>
                    <li><strong>Finalize Change:</strong><br/>{`
                        Once you've entered and confirmed your new password, look for a "Change Password" button. Click this to finalize the password change.
                    `}</li>
                </ol>
    </div>
   </>
  );
}

export default ChangePassword;
