import Image from "next/image";

export default function CallRoutesDoc() {
  return (
    <div>
      <h3 style={{ display: "flex", justifyContent: "center" }}>Call Routes</h3>
      <p>
        Call Routes specify how the incoming call should be handled based on predefined conditions.
      </p>

      <ol>
        <li>
          To configure a call route, navigate to{" "}
          <a href="https://app.supportspoc.com/call_routes/create">
            Call Route Create
          </a>{" "}
          link. A page opens as shown in the screenshot below:
          <div style={{ marginTop: "15px" }}>
            <Image
              src="/CallRoute.png"
              alt="Call Route Create Screenshot"
              width={800}
              height={400}
            />
          </div>
        </li>

        <li>
          Enter the name for the Route and a <b>Welcome Message</b>.  
          The welcome message will be converted from text to voice and played to the caller when the call enters this route.
        </li>

        <li>
          Select the conditions to be applied to the call to determine routing.  
          Below are the types of conditions available:
          <ul>
            <li><b>Contact:</b> When the call is received from a specific contact.</li>
            <li><b>Company:</b> When the call is received from any contact belonging to a Company.</li>
            <li><b>Contact Group:</b> When the call is received from any contact belonging to a Contact Group.</li>
            <li><b>Company Group:</b> When the call is received from any contact belonging to a Company in the Company Group.</li>
          </ul>

          <p>Below are the routes the call can be transferred to, if the conditions match:</p>
          <ul>
            <li><b>Agent:</b> Routed to a specific Agent. If unavailable, the call is queued and retried.</li>
            <li><b>Team:</b> Routed to the available Agents in the selected Team. If none are available, the call is queued and retried.</li>
            <li><b>All Agents:</b> Routed to all available Agents. If none are online, the call is queued and retried.</li>
          </ul>
        </li>
      </ol>

      <p>
        In the value box, type the name of the contact, company, contact group, or company group selected above.  
        A dropdown list will display matching values — select the appropriate one.
      </p>

      <div className="fd-callout-note">
        <strong>Note:</strong>
        <p>
          Multiple conditions can be created in the call route.  
          They will be processed in order, from top to bottom.  
          If no conditions match, the call will be transferred to all online Agents.
        </p>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}
