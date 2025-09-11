

function Agent() {
  return (

  <>
                  
                <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'center'}}>Create Agent:</h3>
<div>
   1. Log in to your <b>Support Spoc</b> Account.
</div>
<div>  2.Click on Agents on the left sidebar menu. This should direct you to a page where all agents are managed.
</div>
<div>3. Click <b><button className='ss-button'>New Agent</button> </b> button on the top right of the interface which opens a agent creation form. </div>
<div>4. Fill the form with the details of the agent.</div>
<div>{`5. Once you've filled in all the necessary information in the form, click on the `}<b>{`'Create Agent'`}</b> button to create the agent. 
   Agent created should be visible on the agent table 
</div>
<br/>
<div>{`                 
   Within the agent form, you have the flexibility to include up to `}<b>three work phone numbers</b>{` for each agent, allowing for comprehensive communication details. While you have the option to assign a 
`}</div>
<div>
   <br/>
   <div className='fd-callout-note'>
      <strong>Note</strong><span style={{fontFamily: 'Helvetica,sans-serif'}}>:</span><span
      style={{fontFamily: 'Helvetica,sans-serif'}}>&nbsp;
      <div style={{marginLeft:'30px'}}>
         <div>{`1. To add an Agent, your account must have available licenses `}</div>
         <div>2.  Full Name and email are Mandatory fields for creating a agent.</div>
         <div>3.  Email is a unique field for all agents.No two agents can have the same email id</div>         
      </div>
      </span>
   </div>
   <br />                
</div>
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Update Agent:</h3>
  <div>1. Navigate to <a href='https://app.supportspoc.com/agents' >Agents</a> page</div>
  <div>2. Search for the agent in the search box on top center of screen and click on the agent name. </div>
  <div>3. Similar form used to create agent will be displayed on screen. Update the form with the details of the agent.</div>
  <div>{`4. Once you've filled in all the necessary information in the form, click on the `}<b>{`'Update Agent'`}</b> button. </div>
  <br/>                  
<h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}>Delete Agents:</h3>
    <div>1. Navigate to <a href='https://app.supportspoc.com/agents' >Agents</a> page</div>
    <div>2. Ticket the checkbox on the beginning of the agent line for all the agents to be delted </div>
    <div>3. A <button className='ss-button'>Delete</button> appears on top right of the screen</div>
    <div>4. Click on the button. All the agents will be deleted </div>
   <br/>
   <div>
      <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}><a id='predefined_filters'>Pre Defined Filters:</a></h3>
   </div>
   <div>{`We provide some pre-defined filters to provide a convenient way to filter your agents based on some parameters frequently used, enhancing efficiency and productivity. You can find filters tailored to show agents created within specific timeframes.`}</div>
   <div><b>Agents Created in One day:</b>{`  This filter highlights agents added within the last 24 hours, making it easy to spot new additions to your list.`}</div>
   <div><b>Agents Created in One a week:</b>{` Here, agents added in the past seven days are showcased, giving you a broader view of recent additions.`}</div>
   <div><b>Agents Created in a Month:</b>{` This filter captures agents added within the last 30 days, offering a longer timeframe for reviewing new connections.`}</div>
   <br/>
   <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left',fontSize:'22px'}}><a id='advanced_search'>Advanced Search:</a></h3>{`
   At the top center of the agent page, there's a search box present to quickly filter agents. With each key stroke the agents are filtered and displayed on the screen. You can search with Name, Mobile Number, Email id, Work Phones in a single seach box.
   `}<br/>
  
</>

  );
}

export default Agent;
