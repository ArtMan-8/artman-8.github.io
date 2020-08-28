import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/social-links"

export default function Hero() {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(queryHero)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Владимир</h1>
            <h4>Frontend Developer</h4>
            <a href="mailto:mail@example.com" className="btn">
              Связаться
            </a>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

const queryHero = graphql`
  {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
