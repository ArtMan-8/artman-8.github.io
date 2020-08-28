import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}
