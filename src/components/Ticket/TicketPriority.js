import Image from 'next/image';


function TicketDetails() {
  return (
            <div className="activating-body">
                <div>
                          <div>
                            <ul><li><b>1.Open:</b>{` Tickets marked as "Open" require action from either the support team or the assigned agent. These tickets are actively being worked on or awaiting attention.`}</li> 
                              <li><b>2.Closed:</b>{` Once the issue reported in the ticket has been addressed to the satisfaction of the customer, the ticket is marked as "Closed." This status indicates that the issue has been successfully resolved and the ticket is considered complete.`}</li>
                              <li><b>3. In Progress:</b> This status signifies that the support team or agent has responded to the customer inquiry and is actively working on resolving the issue. It indicates ongoing progress towards resolution.</li>
                              <li><b>4. Blocked:</b>{` When an agent encounters a situation where they cannot resolve a ticket independently and need assistance from third parties, teams, or other contacts, they can designate the ticket status as "Blocked."By marking the ticket as "Blocked," the agent effectively communicates the need for collaboration or additional assistance to address the issue effectively.`}</li>
                              <li><b>5. Need Information:</b> When the Agent cannot proceed on resolving the ticket with the existing information provided and required more information from Reporter</li>                      
                                <li><b>Type:</b>{` The "type" of a ticket refers to the category or classification of the ticket based on the nature of the customer inquiry, issue, or request.`}</li>
                            </ul>                      
                      <div><b>Here are some common types of tickets:</b></div>
                      <ul>
                        <li><b>1. Incident:</b>{`  Tickets created to report incidents, such as service outages, security breaches, or data breaches, which require immediate attention and resolution.`}</li>
                        <li><b>2. Service Requests:</b>{` Service Requests: These tickets involve customers requesting specific services, such as account upgrades, product customization, or additional features.`}</li>
                        <li><b>3. Change Requests:</b>{` Change requests are formal proposals submitted to request modifications, updates, or alterations to existing systems, processes, products, or services within an organization.`}</li>
                        <li><b>4. Payments:</b>{` Customers may raise tickets to address concerns related to invoices, payments, refunds, or billing discrepancies.`}</li>
                        <li><b>5. Escalation:</b>{` Tickets related to customer complaints, escalations, or dissatisfaction with products, services, or support experiences.`}</li>
                      </ul>
                      <div> click the <b><q>Create ticket </q></b>button to see your ticket created.</div><div>

                      </div>

                      <div><b>what are All Tickets?</b></div>
                      <div>All tickets are predefined filters in our systems. They are preset criteria or categories used to organize and sort tickets based on specific attributes or characteristics.</div>
                      <div>Some pre defined filters we use in our systems are:</div>
                      <b>1. All Unresolved Tickets:</b>{` These tickets remain open and active within the ticketing system until they are successfully resolved to the satisfaction of the customer. Unresolved tickets may require further investigation, additional information from the customer, escalation to higher levels of support.
                     `}<div><b>2. Un Assigned Tickets:</b>  These tickets remain in a pending state until they are assigned to an appropriate agent or team member for resolution. </div> 
                     <div><b>3. Escalated Tickets:</b>{` Escalated tickets are customer inquiries, issues, or requests that have been raised to a higher level of support or management due to their complexity, urgency, or importance. These tickets require additional attention, expertise, or resources beyond what is available at the initial support level.`}</div>
                     <div><b>4. Critical Tickets:</b>{` These tickets typically involve severe disruptions, urgent matters, or high-priority issues that require immediate attention and resolution. Critical tickets may include system outages, service interruptions, security breaches, data loss incidents, or other emergencies that have a substantial impact on the customer's ability to function effectively.`}</div>
                     <div><b>5. High Tickets:</b>{` These tickets often involve important matters or priority issues that require timely attention and resolution to prevent negative consequences or disruptions to the customer's business processes or satisfaction. `}</div>
                     <div><b>6. Medium Tickets:</b>{` These tickets are neither as urgent nor as severe as critical or high-priority tickets, but still require attention and resolution within a reasonable timeframe to address the customer's needs effectively. Medium tickets may include routine service requests, minor technical issues, or general inquiries.`}</div>
                     <div><b>7. Low Tickets:</b> These tickets are considered to be of low priority and generally do not require immediate attention or urgent resolution.</div>
                     <div><b>8. Open Tickets:</b>  These tickets have been created and assigned to a support agent or team but have not yet been marked as resolved or closed.</div>
                     <div><b>9. In Progress Tickets:</b>{` These tickets have been acknowledged and are currently undergoing investigation, troubleshooting, or resolution steps to resolve the customer's issue or fulfill their request.`}</div>

                     <div>{`
                      In the ticket management page, alongside the `}<b><q>All Tickets or pre defined filters</q></b>{` , users may find additional `}<b><q>filter </q></b>{`options to further refine their ticket views. These extra filters offer increased flexibility, enabling users to tailor their ticket management experience to specific criteria or preferences.`}</div>
                      <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
                   
                     

                     <b>Note: </b>
                     <span style= {{fontWeight: "Helvetica,sans-serif"}}>:</span>
                     <span style= {{fontWeight: "Helvetica,sans-serif"}}>{`&nbsp; Here in our ticketing management, you have the flexibility to filter tickets based on multiple values for fields such as 'Agent' and 'Reporter. By leveraging the ability to filter by multiple values for these fields, you can customize your view of the ticket queue according to your preferences and priorities, facilitating efficient ticket management and resolution.`}</span>
                    
                    <div><b>Monitoring ticket responses :</b></div>
                  
                  <div>{`To check or give responses in tickets, follow these steps to open the ticket in our ticketing system: `}</div>
                  <div><b>1. Log In: </b> Access your ticketing system by logging in with our credentials.</div>
                  <div><b>2. Navigate to Tickets:</b> Open the tickets in the lef pane of the interface.</div>
                  <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
                  <div><b>3. Search for the Ticket:</b>{` use the search functionality or browse through the list of tickets to find the specific ticket you want to check or respond to. You can typically search by ticket ID, requester name, or keywords related to the issue.`}</div>
                  <div><b>4. Open the Ticket:</b>{` Click on the ticket to open it and view its details. This will display all the information associated with the ticket, including the issue description, requester details, current status, and any previous interactions or responses.`}</div>
                  <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
                  <div><b>5. Read Previous Responses:</b> Review any previous responses or comments made by agents or other stakeholders to understand the context of the issue and the current state of resolution.</div>
                  <div><b>6. Provide a Response:</b>{` If you're ready to respond to the ticket, use the provided text box or interface to compose your message.You can `}<b>Edit</b>{`, `}<b>Delete</b> the responses.</div>
                  <div><b>{`7. Update Ticket Status,Summary,Description:`}</b>{` you have the option to update the ticket status (e.g., from "open" to "in progress" or "closed") after providing your response,you can edit the summary and description of the ticket by pressing `}<b>Edit</b> button .</div>
                  <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
                  <div><b>{`8. Confirm "Comment"Submission::`}</b>{` Once you've composed your response and made any necessary updates, press comment button.`}</div>
                  <div><b>9. Private Comment:</b> Agents can send Private comments to the customers.<b><q>Private Message</q></b>{` button is provided in the tickets response page. private messages in ticket responses play a crucial role in facilitating confidential communication, enhancing collaboration, and maintaining professionalism within the ticketing system. They provide a secure and efficient way for agents to exchange information and work together to resolve customer issues effectively.`}</div>
              <div><b>9. Follow Up if Necessary</b>{`  If further action or follow-up is required, make a note of it in the ticket and communicate any next steps to the requester `}</div>
          
                    <div>{`By following these steps, you can effectively check tickets and provide timely responses , ensuring efficient resolution of customer issues and requests.`}</div>
             
                <div>{`In the user interface of our tickets management, all pertinent information regarding a ticket like `}<b>Ticket ID</b>{`, `}<b>Status</b>{`, `}<b>Priority</b>{`, `}<b>Agent</b>{`, `}<b>Team</b>{`, `}<b> Re Opened</b>{`, `}<b>First Response</b>{`, `}<b>First Response At</b>{`, `}<b>Resolved At</b>can be conveniently displayed on the right side of the pane. This layout design enhances user experience by providing quick access to essential details without cluttering the main workspace. </div>
                <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
              
              <b> What is the First Response Time?</b>
              <div>{` First Response Time in tickets refers to the duration it takes for a support agent or team to respond to a new ticket or a customer inquiry for the first time after it's been submitted.
              `}</div>
              <div className="fd-callout-note">
                <strong>Note</strong><span style= {{fontWeight: "Helvetica,sans-serif"}}>:</span><span
                  style= {{fontWeight: "Helvetica,sans-serif"}}>{`&nbsp;If you are the first person to sign up, you will be
                  the account admin of your account. As an account admin, you can add users/agents to your account. Your
                  agents will receive an email to activate and join your account. Once activated, they can use your
                  account using their credentials.`}</span>
              </div>
              
                <Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} />
            </div>
          </div>
          <div><p><b>To create a contact:</b></p></div>
         <div> 1. Log in to Supportspoc account.</div><div>
          <Image src="./images/ss account.png" alt="Image" className="" width={500} height={300} /></div>
         <div> 2. Navigate to the <b>New Contact</b> button on the top right side.</div>
         <div> <Image src="./images/capture.jpg" alt="Image" className="" width={500} height={300} /></div>
         <div> 3.Enter the contact details in the form visible below.</div>
         <div><Image src="./images/CONTACT FORM PAGE.PNG" alt="Image" className="" width={500} height={300} /></div>
        <div>  4.Contact name and email address fields in the form are mandatory fields to fill.</div>
         <div> 5.Click on create contact. And the contact is created.</div><div>These steps can be done manually to create contacts one by one in the address book.</div>
         <div> <Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
         <div> <p><b>To validate account</b></p>
         <div>
          1.  An <b>activation mail</b> is sent to the email address provided.
          </div>
          <b>To update profile:</b>
          <div>2. Log in to support spoc account.</div>
          <div>3. You can update profile by clicking on your account icon. Fill the fields and click on <b>Update profile</b></div>
          <p><b>To change password:</b></p>
          <div>1. fill the current password and provide your desired password twice in the given fieds and </div>
          <div>2. click on <b>change password</b></div>
          <div>
            <Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} />
          </div>

          
      

          <div> <b>Contact deeds :</b></div>
          <div>1.<b>Delete:</b></div>
          <div>Deletes the selected contacts and also can delete multiple or all contacts.</div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>
           2.<b> Update:</b>
           <div>You can edit the contact details and update the contact details.</div>
           <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          </div>
          <div><b>contact groups:</b></div>
          <div>1. Go to the left menu and click on <b>contacts</b> in your supportspoc account.</div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>2. you can find contact groups and click on it.</div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>3.
            After clicking on contact groups you can find <b>+ new contact group</b>button.</div>
            <div>4. After pressing the <b>+New cotactgroup</b>button you can see a form.</div>
            <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
            <div>5. Fill in the mandatory fields in the form and click on <b>creategroup</b></div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div><b>How to Delete and Update contact groups?</b></div>
          <div>1.To delete the <b>contactgroup</b> you can select the specific group and can delete the group</div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>2.To update the <b> contactgroup </b> add in the fields and click on <b>Update contact Group</b></div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <p><b>To create a company:</b></p>
          <div>1. Log in to supportspoc account.</div>
          <div>2. navigate to companies management.</div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>3. click on the <b>+new company </b></div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>4. Fill the fields in the provided form. <b>Name</b> and <b>Email</b> are mandatory fields in the form.</div>
          <div>
           5. After filling the fields click on <b>create company</b>.
          </div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div><b> To create company groups:</b></div>
          <div>1. Log in to your supportspoc account.</div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>2. navigate to companygroups management.</div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>3. click on the <b>+ New company groups</b>. </div>
          <div><Image src="./images/loginpage.png" alt="Image" className="" width={500} height={300} /></div>
          <div>4. A form can be seen</div>
        </div>
      </div>
 

  );
}

export default TicketDetails;
