

function TicketFilter() {
  return (
      <div className="main">
             <h2 style={{margin:'auto', display:'table'}}>Filtering Tickets in SupportSpoc</h2>
    <p>{`In SupportSpoc, you can filter tickets using various fields to streamline your workflow and manage tickets more effectively. Below is a guide on how to filter tickets using specific fields such as Agent Assigned, Reporter, Company, Team Assigned, Company, Contact Group, Company Group, Priority, Status, and First Response.`}</p>

    <h5>1. Agent Assigned</h5>
    <h5>2. Reporter</h5>    
    <h5>3. Company</h5>   
    <h5>4. Team Assigned</h5>    
    <h5>5. Contact Group</h5>    
    <h5>6. Company Group</h5>    
    <h5>7. Priority</h5>    
    <h5>8. Status</h5>    
    <h5>9. First Response</h5>
    
    <p>{`By utilizing these filters in SupportSpoc, you can efficiently manage and track tickets based on various criteria, ensuring a more organized and productive support process.`}</p>
		<div className="note">
            <p><strong>Note:</strong> Multiple values can be provided in each field.</p>
        </div>
      </div>

  );
}

export default TicketFilter;
