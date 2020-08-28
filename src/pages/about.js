import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/title"
import Image from "gatsby-image"
import SEO from "../components/seo"
import about from "../content/about"

export default function About() {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(queryHeroPhoto)

  const { info, stack, title } = about

  return (
    <Layout>
      <SEO title="Инфо |" description="Немного о себе" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            {info.map(item => (
              <p key={item.id}>{item.desc}</p>
            ))}

            <div className="about-stack">
              {stack.map(item => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

const queryHeroPhoto = graphql`
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
