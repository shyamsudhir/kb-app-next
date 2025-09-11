import TopMenu from '../components/TopMenu'
import SideMenu from '../components/SideMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'   
import './globals.css'   
import Script from "next/script";


export const metadata = {
  title: 'SupportSPOC',
  description: 'Ticketing & Live Chat with AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopMenu />
        <div className="main-body">
          <div className="main">
            <SideMenu />
            {children}
          </div>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
