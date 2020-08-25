import React from "react"
import SocialLinks from "../constants/social-links"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <span>WebDev</span> all rights reserved
      </div>
    </footer>
  )
}

export default Footer
