import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

const ComponentName = ({ data }) => {
  const { content } = data.blog

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default ComponentName
