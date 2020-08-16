import React from "react"
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon" />,
    url: "https://github.com/ArtMan-8/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/artman-888/",
  },
  {
    id: 3,
    icon: <FaTelegram className="social-icon" />,
    url: "https://t.me/ArtMan_8/",
  },
  {
    id: 4,
    icon: <FaInstagram className="social-icon" />,
    url: "https://www.instagram.com/artman_8/",
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
