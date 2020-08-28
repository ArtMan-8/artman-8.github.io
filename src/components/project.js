import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

export default function Project({
  description,
  title,
  github,
  stack,
  url,
  index,
  image,
}) {
  const {
    allFile: { nodes: projects },
  } = useStaticQuery(queryProjectImage)
  const imageCurrent = projects.find(project => project.name === image)

  return (
    <article className="project">
      <Image
        fluid={imageCurrent.childImageSharp.fluid}
        className="project-img"
      />

      <div className="project-info">
        <span className="project-number">0{++index}</span>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-stack">
          {stack.map(item => (
            <span key={item.id}>{item.title}</span>
          ))}
        </div>

        <div className="project-links">
          {github && (
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>
          )}

          {url && (
            <a href={url}>
              <FaShareSquare className="project-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export const queryProjectImage = graphql`
  {
    allFile {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        name
      }
    }
  }
`
