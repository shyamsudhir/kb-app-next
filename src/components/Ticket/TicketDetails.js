

function TicketDetails() {
  return (
     <div className="were">
  <h3 style={{ fontWeight: "1000", display: "flex", justifyContent: "center" }}>
    Ticket Priorities
  </h3>

  <p><b>Overview</b></p>
  <p>
    In a support system, ticket priorities are used to categorize the urgency and
    importance of customer issues. Assigning priorities helps in managing and
    resolving tickets efficiently, ensuring that critical issues are addressed
    promptly while less urgent ones are handled appropriately.
  </p>

  <p><b>Priority Levels</b></p>
  <p>Most support systems categorize tickets into several priority levels. Here are the commonly used ones:</p>

  <h4>Low Priority</h4>
  <ul>
    <li><b>Description:</b> Issues that have minimal impact on the customer&apos;s operations or experience.</li>
    <li><b>Examples:</b> General inquiries, minor usability issues, feature requests.</li>
    <li><b>Response Time:</b> Typically addressed within a few days to a week.</li>
    <li><b>Resolution Time:</b> Can be resolved as part of regular maintenance or in future updates.</li>
  </ul>

  <h4>Medium Priority</h4>
  <ul>
    <li><b>Description:</b> Issues that have a moderate impact but are not critical.</li>
    <li><b>Examples:</b> Non-urgent bugs, standard technical support requests, moderate usability issues.</li>
    <li><b>Response Time:</b> Usually addressed within 24 to 48 hours.</li>
    <li><b>Resolution Time:</b> Should be resolved within a few days to a week.</li>
  </ul>

  <h4>High Priority</h4>
  <ul>
    <li><b>Description:</b> Issues that significantly impact operations and require quick resolution.</li>
    <li><b>Examples:</b> Major functionality issues, significant performance degradation, urgent requests.</li>
    <li><b>Response Time:</b> Typically addressed within a few hours.</li>
    <li><b>Resolution Time:</b> Should be resolved within 24 to 48 hours.</li>
  </ul>

  <h4>Critical Priority</h4>
  <ul>
    <li><b>Description:</b> Issues that cause a complete outage or severe disruption affecting many users.</li>
    <li><b>Examples:</b> System outages, data breaches, severe security vulnerabilities.</li>
    <li><b>Response Time:</b> Immediate response required, usually within an hour.</li>
    <li><b>Resolution Time:</b> Should be resolved as quickly as possible, often within hours.</li>
  </ul>

  <div className="fd-callout-note">
    <strong>Note:</strong>
    <p>We have an additional priority level <b>Escalated</b> that can be used to identify customer escalations.</p>
  </div>

  <h3 style={{ fontWeight: "1000", display: "flex", justifyContent: "left" }}>
    Ticket Status
  </h3>

  <ul>
    <li><b>Open:</b> Initial status when a ticket is created.</li>
    <li><b>Closed:</b> The issues are resolved and the ticket is closed.</li>
    <li><b>In-Progress:</b> The ticket is assigned and the agent has started working on it.</li>
    <li><b>Need Information:</b> Set when the agent requires more details from the customer.</li>
    <li><b>Blocked:</b> Set when the agent cannot proceed due to dependencies (another team, another ticket, etc.).</li>
  </ul>
</div>

 

  );
}

export default TicketDetails;
