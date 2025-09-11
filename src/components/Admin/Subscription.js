

function Subscription() {
  return (
    <div className="container">
        <h3 style={{fontWeight:'600',margin:'auto',display:'table'}}>Subscription:</h3>{`
        The Subscriptions Page serves as a centralized hub for customers to manage their subscription details and related activities. Here's an overview of the key elements on this page:
        `}<ol>
        <li><b>Subscription Details</b>{`
            Here, the customer can view their current subscription plan, including the plan name, 
            Status of the account, Contact Details, the billing cycle, Number of Agent licenses and Number of current Agents.
            This section may also include details about the next billing date.
        `}</li>
        <li><b>Add Call Credits</b>
            This link allows you to easily add call credits to their account. 
            <p>A minimum of <b>1$</b> available credits are required to make an outgoing call.
            If the available credits falls below <b>0$</b> incoming and outgoing calls will be suspended</p>

        </li>
        <li><b>Add Agent Licenses</b>
               <p>{` To add Agents to yor account, you need to purchase agent licenses. In Trial period, adding agents does not require liceses. 
                   To Add agetns, the cost will be calculated on pro-rated basis depending the remaining period of subscription.
                   
               `}</p>               
        </li>
        <li><b>Add Shipping and Billing Address</b>
            This section enables you to input or update their shipping and billing addresses.             
        </li>
      </ol>            
    </div>  
  );
}

export default Subscription;
