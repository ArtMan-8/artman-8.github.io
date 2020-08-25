import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Blogs from "../components/blogs"

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
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

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export default Blog
