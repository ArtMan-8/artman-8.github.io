import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "Главная",
    url: "/",
  },
  {
    id: 2,
    text: "Работы",
    url: "/projects/",
  },
  {
    id: 3,
    text: "О себе",
    url: "/about/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default function Links({ styleClass }) {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
