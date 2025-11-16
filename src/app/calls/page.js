// src/app/calls/page.js
"use client"
import Link from 'next/link';

export default function Calls() {

      return (
        <div style={{lineHeight:'2', backgroundColor: 'white'}}>                 
            <p>  Cloud Telephony provides an omnichannel experience for creating tickets within SupportSPOC. This integration allows agents to make and receive calls directly from their browsers and create support tickets based on those interactions. The seamless integration of the cloud telephony and ticketing system ensures efficient management of customer inquiries and support requests.</p>
            <p>{` To start with Cloud Telephony, first step is to purchase a phone number `}</p>
            <h3 style={{display:'flex', justifyContent:'center',fontWeight:'1000' }}> <Link href='#' id='purchase_number'>Purchasing a Number</Link></h3>
            <ol>
              <li>Navigate to <Link href='https://app.supportspoc.com/admin/phone_numbers'>Phone Numbers</Link> Page</li>
              <li>Click on <button className='ss-button'>Purchase Number</button> button on top right side of the page. A form opens on right side of the Page</li>
              <li>Select the country from the list of countries in the dropdown. Click on the box to display the list</li>
              <li>Now the types of Numbers available for the country are displayed on the bottom. There are three types of numbers.
                  <p><b>Local:</b> Local numbers are telephone numbers which are assigned to a specific geographic region</p>
                  <p><b>TollFree:</b> Toll-free numbers are special telephone numbers that allow callers to reach businesses and individuals without being charged for the call </p>
                  <p><b>Mobile Numbers:</b>{`In most countries, mobile numbers are assigned to a particular range within the country’s telephone numbering plan so they can be easily distinguished from local number`}</p>
              </li>
              <li>Select the type of Number</li>
              <li>List of available Numbers will be displayed below. Select the number of your choice and click on <button className='ss-button'>Purchase</button> button.</li>
            </ol>

            <div className="fd-callout-note">
                  <strong>Note:</strong>
                  <p>{`Phone numbers are chargeable on monthly basis. To find the cost of Phone number by country and type, please check in this `}<Link href='https://docs.supportspoc.com/incoming_call_rates'>Link</Link></p>
                  <p>{`To purchase a phone number, the account must have available call credits. Please check this link to find how to add call credits ?`}</p>

            </div>
            <br /><br />
            <div><h3 style={{display:'flex', justifyContent:'left',fontWeight:'1000' }}><a href='#' id='incoming_call'>Incoming Call </a></h3>
                 <ol><li>Login to SupportSPOC account and navigate to <Link href='https://app.supportspoc.com/admin/phone_numbers'>Number Configure</Link> Page </li>
                    <li>Click on the phone number for which incoming call should be configured. This is open a window on the right side of the page</li>
                    <li>Select the phone number from the dropdown on top of the window</li>
                    <li>Configure business hours for the phone number. Start typing the name of the business hours and the list of business hours will be displayed in the dropdown. Select the business hours from the list</li>
                    <li>{`Enter the message to be played to caller, when the call is received after the business hours. The text will be converted to voice and played to the caller `}</li>
                    <li>Configure if the call should be routed to agents via a Call Route or an IVR should be played.
                        Select IVR if IVR should be played or select Call Route if the call should be routed to Agents and Enter the name of the IVR or Call Route</li>                        
               </ol>
               <div className='fd-callout-note'>
                    <strong>Note:</strong>
                    <p>Incoming calls are chargeable per minute. Seconds are rounded up to be next minute.
                       Please find cost per call in this <Link href='https://docs.supportspoc.com/incoming_call_rates'>Link</Link></p>
                    <p>Your account must have atleast <b>1$</b> to make calls.</p>                    
                    <p>If the call credits fall below <b>0$</b>{`, all incoming and outgoing calls will be suspended till credits are added to your account`}</p>
              </div>
            </div>            
            <br /><br />
            <div style={{backgroundColor:'white'}}>
              <h3 style={{fontWeight:'1000', display:'flex', justifyContent:'left' }}><a href='#' id='outgoing_call' style={{textDecoration:'none'}}>Outgoing Call</a></h3>            
                <ol><li>Login to <Link href='https://app.supportspoc.com'>SupportSPOC</Link> Account </li>
                    <li>Click on <button style={{backgroundColor:'#19528a',color:'white', borderRadius:'5px',paddingTop:'1px', paddingBottom:'1px', paddingLeft:'20px', paddingRight:'20px'}}>Call</button> button on bottom left corner of page. A window similar to be below screenshot appears on screen</li>
                    <li>Use the dialpad to press numbers or use keyboard to enter a valid phone number.</li>
                    <li> Click on the green color button at the bottom of dialpad to make the call</li>
               </ol>  
              <div className="fd-callout-note">
                    <strong>Note:</strong>
                    <p>Outgoing calls are chargeable per minute. Seconds are rounded up to be next minute.
                       Please find cost per call in this <Link href='https://docs.supportspoc.com/outgoing_call_rates'>Link</Link></p>
                    <p>Your account must have atleast <b>1$</b> to make or receive calls.</p>
              </div>
            </div>
           
            <br /><br /><br />
        </div>

  );


}
