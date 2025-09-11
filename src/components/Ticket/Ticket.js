import Image from 'next/image';


function Ticket() {
  return (
<div className="main">
   <div className="main_left activating-left-section">
      <div className="activating-body">
         <h3 style= {{fontWeight: "600", display:'flex', justifyContent:'center'}}>
         Ticket Creation
         </h3>         
         <div>This document provides detailed instructions on how to create a ticket using the SupportSPOC system. Follow these steps to ensure all necessary information is captured for efficient issue resolution.</div>
         <br/>
            1.Login into your <a href='https://app.supportspoc.com/login' style={{textDecoration:'none'}}>Support SPOC</a> account 
            <div>2. Click on Tickets on the left sidebar menu.This should direct you to a page where all Tickets are managed.</div>
            <div>3. Click on the <b>New Ticket</b>{` button at the top right corner of the interface. It's usually prominently displayed for easy access.`}</div>
            <div>4. A form will appear on screen where you have to input all relevant details about the ticket.
            </div>
            <div>5. Fill in the all relevant fields in the form and click on Create Ticket button present on the bottom of the form </div>
            <p></p>
            <div className='fd-callout-note'>
               <strong>Note:</strong>
               <b>Summary</b> and <b>Reporter</b> are mandatory fields
            </div>
            <br/>
            <div>Brief description of the fields</div>
            <br/>
            <ul>
               <div>
                  <li><b>Summary:</b> Single line detail about the issue</li>
               </div>
               <div>
                  <li><b>Reporter</b>{`:Contact for whom the ticket is created. With each character typed, the contacts with values starting the characters typed will be listed.
                     Contacts can be searched using Full Name or Email Id.
                     `}<p>{` If the ticket is created for a new contact which does not exist in account, Click on Add New Link link on the bottom of Reporter box.
                     Add Name, Email and Number of contact where Name and Email are Mandatory fields.`}</p>
                  </li>
               </div>
               <div>
                  <li><b>Description</b>:Complete description of the issue for which the ticket is created
                  </li>
               </div>
               <li><b>Team:</b> Search for the team name. With each letter typed the list of Teams starting the characters typed will be displayed.</li>
               <div>
                  <li> <b>Assignee:</b> The assignee is the designated agent to whom work is allocated based on their availability.</li>
                  Agens can be searched using Full Name or Email Id.
               </div>
               <div>
                  <li><b>Priority:</b>{` Priority indicates the significance of a task , you have the option to adjust its priority level to `}<b>High</b>{`, `}<b>Medium</b>{`,`}<b>Low</b>{`,`}<b>Critical</b>{`,`}<b>Escalated</b> using the Priority menu. This feature allows you to effectively
                     categorize and prioritize tickets based on their urgency and impact on your workflow.
                  </li>
               </div>
               <div>
                  <li><b>Status:</b>{` Ticket status denotes the various stages a customer service ticket progresses through, including `}<b>Open</b>{`, `}<b>Close</b>{`, `}<b>Blocked</b>{`, `}<b>In Progress</b> and <b>Need Information</b>. Monitoring ticket status is essential for effective customer service management and prioritizing requests accordingly.</li>
               </div>
            </ul>
      </div>
      <h3 style={{display:'flex', justifyContent:'left',fontWeight:'1000',fontSize:'22px' }}>Add Comments</h3>
      <p>{`To edit a Ticket, navigate to `}<a href='htttps://app.supportspoc.com/ticets'>Tickets</a>{` page, click on the summary of the ticket. A page will open similar to thr below screenshot.  `}</p>
         <Image src="/Ticket-Display.png" alt="" className="" width={500} height={300} />
      <p>Top of the page is the summary provided to the Ticket. Below is the description of the ticket</p>{`
      To add a commen, type the reply in the textbox and click on `}<button className='ss-button'>Add Comment</button> Button
      <p>{`Right side of the page displas the details of the Ticket. Fields Status, Priority, Assignee and Team can be modified`}</p>
      More details about Status and Priority are provided in <a href='./ticket_details'>Ticket Details</a> Page

   </div>
</div>

  );
}

export default Ticket;
