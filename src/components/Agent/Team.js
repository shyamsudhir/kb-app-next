

function Team() {
  return (

  <>
          <h3 style={{fontWeight:'600',margin:'auto',display:'table'}}>Create Team:</h3>
          <div>1. Go to the left sidebar menu and click on <b>Agents-</b> in your supportspoc account.</div>          
          <div>2. you can find <b>Team</b> sub menu and click on it.</div>
          <div>{`3.
            After clicking on Team, you will be directing to Teams page. You can find `}<button className='ss-button'>+ New Team</button> button in top right corner of page.</div>
            <div>{`4. After clicking on the button, a form opens on the right side of the page`}</div>
            <div>5. Fill in the mandatory fields in the form and click on <button className='ss-button'>Create Team</button></div>
            <div className='fd-callout-note'>
                <strong>Note:</strong><div style={{marginLeft:'30px'}}><div>{`
                    For Updating Team, click on team name.The same form appears as above with pre filled deatails. You can add more companies to the group or remove existing companies.
                  `}</div>
                </div>           
            </div> 
            <br/>         
          <div><h3 style={{fontWeight: '600',display:'table',fontSize:'22px'}}>Delete Team:</h3></div>
          <div>To delete the <b>Team</b> you can select the specific team and click on  delete button on right top corner of page</div>                        

</>

  );
}

export default Team;
