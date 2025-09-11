

function CompanyGroup() {
  return (

  <>
         <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'center'}}>Create Company group:</h3>
<div>
   1. Log in to your <b>Support Spoc</b> Account.
</div>
<div>  2.Click on Company groups on the left sidebar menu. This should direct you to a page where all company groups are managed.
</div>
<div>3. Click <b><button className='ss-button'>New Company group</button> </b> button on the top right of the interface which opens a company group creation form. </div>
<div>4. Fill the form with the details of the company group.</div>
<div>{`5. Once you've filled in all the necessary information in the form, click on the `}<b>{`'Create Company group'`}</b> button to create the company group. 
   Company group created should be visible on the company group table 
</div>
<br/>
<div>{`                 
   Within the company group form, you have the flexibility to include up to `}<b>three work phone numbers</b>{` for each company group, allowing for comprehensive communication details. While you have the option to assign a 
`}</div>
<div>
   <br/>            
</div>
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Update Company group:</h3>
  <div>1. Navigate to <a href='https://app.supportspoc.com/company_groups' >Company Groups</a> page</div>
  <div>2. Search for the company group in the search box on top center of screen and click on the company group name. </div>
  <div>3. Similar form used to create company group will be displayed on screen. Update the form with the details of the company group.</div>
  <div>{`4. Once you've filled in all the necessary information in the form, click on the `}<b>{`"Update Company group"`}</b> button. </div>
  <br/>                  
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Delete Company groups:</h3>
    <div>1. Navigate to <a href='https://app.supportspoc.com/company_groups' >Company Groups</a> page</div>
    <div>2. Ticket the checkbox on the beginning of the company group line for all the company groups to be delted </div>
    <div>3. A <button className='ss-button'>Delete</button> appears on top right of the screen</div>
    <div>4. Click on the button. All the company groups will be deleted </div>
   <br/>


</>

  );
}

export default CompanyGroup;
