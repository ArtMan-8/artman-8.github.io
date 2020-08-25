import React from "react"
// import "../css/main.css"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [isOpen, setIsOpne] = React.useState(false)
  const toggleSidebar = () => setIsOpne(!isOpen)

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
