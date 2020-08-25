import React from "react"
// import "../css/main.css"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
