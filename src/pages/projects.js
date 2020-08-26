import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Projects from "../components/projects"
import SEO from "../components/seo"

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

const Project = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Projects" description="my projects" />
      <section className="projects-page">
        <Projects projects={projects} title="All Projects" />
      </section>
    </Layout>
  )
}

export default Project
