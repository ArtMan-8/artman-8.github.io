import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const ComponentName = () => {
  return <h2>blog post template</h2>
}

export default ComponentName

// export const query = graphql`
//   query GetSingleBlog($slug: String) {
//     blog: strapiBlogs(slug: { eq: $slug }) {
//       content

//     }
//   }
// `
