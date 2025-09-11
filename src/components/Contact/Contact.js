

function Contact() {
  return (

<>{`In a ticketing system, a "contact" typically refers to an individual or entity who interacts with the system. Contacts can include customers, clients, employees, vendors, or any other stakeholders involved in the ticketing process.                               
  `}<br/>  <br/>
<h3 style={{fontWeight:'1000'}}>Create Contact:</h3>
<div>
   1. Log in to your <b>Support Spoc</b> Account.
</div>
<div>  2.Click on Contacts on the left sidebar menu. This should direct you to a page where all contacts are managed.
</div>
<div>3. Click <b><button className='ss-button'>New Contact</button> </b> button on the top right of the interface which opens a contact creation form. </div>
<div>4. Fill the form with the details of the contact.</div>
<div>{`5. Once you've filled in all the necessary information in the form, click on the `}<b>{`'Create Contact'`}</b> button to create the contact. 
   Contact created should be visible on the contact table 
</div>
<br/>
<div>{`                 
   Within the contact form, you have the flexibility to include up to `}<b>three work phone numbers</b>{` for each contact, allowing for comprehensive communication details. While you have the option to assign a 
`}</div>
<div>
   <br/>
   <div className='fd-callout-note'>
      <strong>Note</strong><span style={{fontFamily: 'Helvetica,sans-serif'}}>:</span><span
      style={{fontFamily: 'Helvetica,sans-serif'}}>&nbsp;
      <div style={{marginLeft:'30px'}}>
         <div>1. Full Name and email are Mandatory fields for creating a contact.</div>
         <div>2.  Email is a unique field for all contacts.No two contacts can have the same email id</div>
         <div>3. Unique ID is the identifier assigned by you to a contact for your easy reference. </div>
      </div>
      </span>
   </div>
   <br />                
</div>
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Update Contact:</h3>
  <div>1. Navigate to <a href='https://app.supportspoc.com/contacts' >Contacts</a> page</div>
  <div>2. Search for the contact in the search box on top center of screen and click on the contact name. </div>
  <div>3. Similar form used to create contact will be displayed on screen. Update the form with the details of the contact.</div>
  <div>{`4. Once you've filled in all the necessary information in the form, click on the `}<b>{`'Update Contact'`}</b> button. </div>
  <br/>                  
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Delete Contacts:</h3>
    <div>1. Navigate to <a href='https://app.supportspoc.com/contacts' >Contacts</a> page</div>
    <div>2. Ticket the checkbox on the beginning of the contact line for all the contacts to be delted </div>
    <div>3. A <button className='ss-button'>Delete</button> appears on top right of the screen</div>
    <div>4. Click on the button. All the contacts will be deleted </div>
   <br/>
   <div>
      <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}><a id='predefined_filters'>Pre Defined Filters:</a></h3>
   </div>
   <div>{`We provide some pre-defined filters to provide a convenient way to filter your contacts based on some parameters frequently used, enhancing efficiency and productivity. You can find filters tailored to show contacts created within specific timeframes.`}</div>
   <div><b>Contacts Created in One day:</b>{`  This filter highlights contacts added within the last 24 hours, making it easy to spot new additions to your list.`}</div>
   <div><b>Contacts Created in One a week:</b>{` Here, contacts added in the past seven days are showcased, giving you a broader view of recent additions.`}</div>
   <div><b>Contacts Created in a Month:</b>{` This filter captures contacts added within the last 30 days, offering a longer timeframe for reviewing new connections.`}</div>
   <br/>
   <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}><a id='advanced_search'>Advanced Search:</a></h3>{`
   At the top center of the contact page, there's a search box present to quickly filter contacts. With each key stroke the contacts are filtered and displayed on the screen. You can search with Name, Mobile Number, Email id, Unique Id,Work Phones in a single seach box.
   `}<br/>
   
</>

  );
}

export default Contact;
