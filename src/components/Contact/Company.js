

function Company() {
  return (

  <>                                   

    <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'center'}}>Create Company:</h3>
    <div>
       1. Log in to your <b>Support Spoc</b> Account.
    </div>
    <div>  2.Click on Companies on the left sidebar menu. This should direct you to a page where all companies are managed.
    </div>
    <div>3. Click <b><button className='ss-button'>New Company</button> </b> button on the top right of the interface which opens a company creation form. </div>
    <div>4. Fill the form with the details of the company.</div>
    <div>{`5. Once you've filled in all the necessary information in the form, click on the `}<b>{`'Create Company'`}</b> button to create the company. 
       Company created should be visible on the company table 
    </div>
    <br/>
    <div>{`                 
       Within the company form, you have the flexibility to include up to `}<b>three work phone numbers</b>{` for each company, allowing for comprehensive communication details. While you have the option to assign a 
    `}</div>
    <div>
       <br/>
       <div className='fd-callout-note'>
          <strong>Note</strong><span style={{fontFamily: 'Helvetica,sans-serif'}}>:</span><span
          style={{fontFamily: 'Helvetica,sans-serif'}}>&nbsp;
          <div style={{marginLeft:'30px'}}>
             <div>1. Either Name or Email is Mandatory for creating a company.</div>
          </div>
          </span>
       </div>
       <br />                
    </div>
    <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Update Company:</h3>
      <div>1. Navigate to <a href='https://app.supportspoc.com/companies' >Companies</a> page</div>
      <div>2. Search for the company in the search box on top center of screen and click on the company name. </div>
      <div>3. Similar form used to create company will be displayed on screen. Update the form with the details of the company.</div>
      <div>{`4. Once you've filled in all the necessary information in the form, click on the `}<b>{`'Update Company'`}</b> button. </div>
      <br/>                  
    <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Delete Companies:</h3>
        <div>1. Navigate to <a href='https://app.supportspoc.com/companies' >Companies</a> page</div>
        <div>2. Ticket the checkbox on the beginning of the company line for all the companies to be delted </div>
        <div>3. A <button className='ss-button'>Delete</button> appears on top right of the screen</div>
        <div>4. Click on the button. All the companies will be deleted </div>
       <br/>
       <div>
          <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}><a id='predefined_filters'>Pre Defined Filters:</a></h3>
       </div>
       <div>{`We provide some pre-defined filters to provide a convenient way to filter your companies based on some parameters frequently used, enhancing efficiency and productivity. You can find filters tailored to show companies created within specific timeframes.`}</div>
       <div><b>Companies Created in One day:</b>{`  This filter highlights companies added within the last 24 hours, making it easy to spot new additions to your list.`}</div>
       <div><b>Companies Created in One a week:</b>{` Here, companies added in the past seven days are showcased, giving you a broader view of recent additions.`}</div>
       <div><b>Companies Created in a Month:</b>{` This filter captures companies added within the last 30 days, offering a longer timeframe for reviewing new connections.`}</div>
       <br/>
       <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}><a id='advanced_search'>Advanced Search:</a></h3>{`
       At the top center of the company page, there's a search box present to quickly filter companies. With each key stroke the companies are filtered and displayed on the screen. You can search with Name, Mobile Number, Email id, Work Phones in a single seach box.
       `}<br/>     
</>

  );
}

export default Company;
