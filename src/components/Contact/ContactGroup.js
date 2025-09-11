

function ContactGroup() {
  return (

  <>
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'center'}}>Create Contact group:</h3>
<div>
   1. Log in to your <b>Support Spoc</b> Account.
</div>
<div>  2.Click on Contact groups on the left sidebar menu. This should direct you to a page where all contact groups are managed.
</div>
<div>3. Click <b><button className='ss-button'>New Contact group</button> </b> button on the top right of the interface which opens a contact group creation form. </div>
<div>4. Fill the form with the details of the contact group.</div>
<div>{`5. Once you've filled in all the necessary information in the form, click on the `}<b>{`'Create Contact group'`}</b> button to create the contact group. 
   Contact group created should be visible on the contact group table 
</div>
<br/>
<div>{`                 
   Within the contact group form, you have the flexibility to include up to `}<b>three work phone numbers</b>{` for each contact group, allowing for comprehensive communication details. While you have the option to assign a 
`}</div>
<div>
   <br/>            
</div>
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Update Contact group:</h3>
  <div>1. Navigate to <a href='https://app.supportspoc.com/contact_groups' >Contact Groups</a> page</div>
  <div>2. Search for the contact group in the search box on top center of screen and click on the contact group name. </div>
  <div>3. Similar form used to create contact group will be displayed on screen. Update the form with the details of the contact group.</div>
  <div>{`4. Once you've filled in all the necessary information in the form, click on the `}<b>{`"Update Contact group"`}</b> button. </div>
  <br/>                  
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Delete Contact groups:</h3>
    <div>1. Navigate to <a href='https://app.supportspoc.com/contact_groups' >Contact Groups</a> page</div>
    <div>2. Ticket the checkbox on the beginning of the contact group line for all the contact groups to be delted </div>
    <div>3. A <button className='ss-button'>Delete</button> appears on top right of the screen</div>
    <div>4. Click on the button. All the contact groups will be deleted </div>
   <br/>


</>

  );
}

export default ContactGroup;
