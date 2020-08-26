import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Title from "../components/title"
import Image from "gatsby-image"

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          title
          id
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const About = ({ data }) => {
  const {
    allStrapiAbout: { nodes },
  } = data

  const { info, stack, title, image } = nodes[0]

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
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

export default About
