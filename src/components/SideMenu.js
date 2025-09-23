"use client";
import {useRef, useEffect} from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';

function SideMenu() {
  const pathname = usePathname();
	const indexRef = useRef(null)
	const contactRef = useRef(null)
	const adminRef = useRef(null)
	const ticketRef = useRef(null)
	const agentRef = useRef(null)


	useEffect(() => {
    // hide all submenus
    const elements = document.getElementsByClassName("submenu");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    // Show based on route
    if (["/tickets", "/ticket_details", "/filters"].includes(pathname)) {
      ticketRef.current.style.display = "block";
    }
    if (["/",  "/forgot_password", "/change_password"].includes(pathname)) {
      indexRef.current.style.display = "block";
    }
    // if (
    //   ["/calls", "/outgoing_call_rates", "/incoming_call_rates"].includes(pathname) ||
    //   pathname.startsWith("/calls#")
    // ) {
    //   callsRef.current.style.display = "block";
    // }
    if (["/contacts", "/companies", "/contact_groups", "/company_groups"].includes(pathname)) {
      contactRef.current.style.display = "block";
    }
    if (["/agents", "/teams"].includes(pathname)) {
      agentRef.current.style.display = "block";
    }
    if (["/call_route", "/business_hours", "/ivr", "/subscriptions"].includes(pathname)) {
      adminRef.current.style.display = "block";
    }
  }, [pathname]);
		

    
 return (
  <nav className="sidebar">
    <div className="menu_content">
      <ul className="menu_items" style={{ marginTop: '20px' }}>
        <div className="menu_title menu_dahsboard"></div>
        <li className="item" onClick={() => { window.location.href = '/'; }}>
          <div className="nav_link submenu_item">
            <span className="navlink_icon">
              <i className="bx bx-home-alt"></i>
            </span>
            <span className="navlink">{`Getting Started`}</span>
            <i className="bx bx-chevron-right arrow-left"></i>
          </div>

          <ul className="menu_items submenu" ref={indexRef}>
           <Link href="/" className="nav_link sublink">{`Access Account`}</Link>
            <a href="/forgot_password" className="nav_link sublink">{`Forgot Password`}</a>
            <a href="/change_password" className="nav_link sublink">{`Change Password`}</a>
          </ul>
        </li>

        <li className="item" onClick={() => { window.location.href = '/tickets'; }}>
          <div className="nav_link submenu_item">
            <span className="navlink_icon">
              <i className="bx bx-grid-alt"></i>
            </span>
            <span className="navlink">{`Tickets`}</span>
            <i className="bx bx-chevron-right arrow-left"></i>
          </div>

          <ul className="menu_items submenu" ref={ticketRef}>
            <a href="/tickets" className="nav_link sublink">{`Create Ticket`}</a>
            <a href="/ticket_details" className="nav_link sublink">{`Priority & Status`}</a>
            <a href="/filters" className="nav_link sublink">{`Filters`}</a>
          </ul>
        </li>

        <li className="item" onClick={() => { window.location.href = '/agents'; }}>
          <div className="nav_link submenu_item">
            <span className="navlink_icon">
              <i className="bx bx-loader-circle"></i>
            </span>
            <span className="navlink">{`Agents`}</span>
            <i className="bx bx-chevron-right arrow-left"></i>
          </div>

          <ul className="menu_items submenu" ref={agentRef}>
            <a href="/agents" className="nav_link sublink">{`Agents`}</a>
            <a href="/teams" className="nav_link sublink">{`Teams`}</a>
          </ul>
        </li>

        <li className="item" onClick={() => { window.location.href = '/contacts'; }}>
          <div className="nav_link submenu_item">
            <span className="navlink_icon">
              <i className="bx bx-flag"></i>
            </span>
            <span className="navlink">{`Contacts`}</span>
            <i className="bx bx-chevron-right arrow-left"></i>
          </div>

          <ul className="menu_items submenu" ref={contactRef}>
            <a href="/contacts" className="nav_link sublink">{`Contacts`}</a>
            <a href="/companies" className="nav_link sublink">{`Companies`}</a>
            <a href="/contact_groups" className="nav_link sublink">{`Contact Group`}</a>
            <a href="/company_groups" className="nav_link sublink">{`Company Group`}</a>
          </ul>
        </li>

        <li className="item" onClick={() => { window.location.href = '/call_route'; }}>
          <div className="nav_link submenu_item show_submenu">
            <span className="navlink_icon">
              <i className="bx bx-medal"></i>
            </span>
            <span className="navlink">{`Admin`}</span>
            <i className="bx bx-chevron-right arrow-left"></i>
          </div>

          <ul className="menu_items submenu" ref={adminRef}>
            <a href="/business_hours" className="nav_link sublink">{`Business Hours`}</a>
            <a href="/subscriptions" className="nav_link sublink">{`Subscriptions`}</a>
          </ul>
        </li>
      </ul>

      <div className="bottom_content"></div>
    </div>
  </nav>
);
}

export default SideMenu;
