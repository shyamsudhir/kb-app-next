import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import SideMenu from  './components/SideMenu'
import TopMenu from  './components/TopMenu'
import Ticket from  './components/Ticket/Ticket'
import TicketFilter from  './components/Ticket/TicketFilter'
import TicketDetails from  './components/Ticket/TicketDetails'
import Contact from  './components/Contact/Contact'
import Company from  './components/Contact/Company'
import ContactGroup from  './components/Contact/ContactGroup'
import CompanyGroup from  './components/Contact/CompanyGroup'
import CallRoute from  './components/Admin/CallRoute'
import IVR from  './components/Admin/IVR'
import BusinessHours from  './components/Admin/BusinessHours'
import GettingStarted from  './components/GettingStarted/GettingStarted'
import ForgotPassword from  './components/GettingStarted/ForgotPassword'
import ChangePassword from  './components/GettingStarted/ChangePassword'
import Call from './components/Call/Call'
import Agent from './components/Agent/Agent'
import Team from './components/Agent/Team'
import OutboundCallRates from './components/Admin/OutboundCallRates'
import InboundCallRates from './components/Admin/InboundCallRates'
import Subscription from './components/Admin/Subscription'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>    
        <BrowserRouter>
        		<TopMenu />
        		<SideMenu />
			    <div className='main-body'>  
			    	<div className='main'>
			                <Routes>			                 
			                	<Route path='/' element={<GettingStarted />} />
			                	<Route path='/forgot_password' element={<ForgotPassword />} />
			                	<Route path='/change_password' element={<ChangePassword />} />
			                	<Route path='/contacts' element={<Contact />} />
			                	<Route path='/companies' element={<Company />} />
			                	<Route path='/contact_groups' element={<ContactGroup />} />
			                	<Route path='/company_groups' element={<CompanyGroup />} />
			                	<Route path='/tickets' element={<Ticket />} />
			                	<Route path='/ticket_details' element={<TicketDetails />} />			                	
			                	<Route path='/getting_started' element={<GettingStarted />} />			                  	
			                	<Route path='/agents' element={<Agent />} />			                  	
			                	<Route path='/teams' element={<Team />} />			                  	
			                	<Route path='/call_route' element={<CallRoute />} />
			                	<Route path='/subscriptions' element={<Subscription />} />
			                	<Route path='/ivr' element={<IVR />} />			                  	
			                	<Route path='/business_hours' element={<BusinessHours />} />			                  	
			                	<Route path='/outgoing_call_rates' element={<OutboundCallRates />} />			                  	
			                 	<Route path='incoming_call_rates' element={<InboundCallRates /> } />
			                 	<Route path='calls' element={<Call /> } />
			                 	<Route path='filters' element={<TicketFilter /> } />			                 				                 	
			                 	<Route path="*" element={<GettingStarted />}  />            
			            	</Routes>              
	  				</div>
			    </div>                       
        </BrowserRouter>
        </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
