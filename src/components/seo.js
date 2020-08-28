import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ title, description }) {
  const {
    site: {
      siteMetadata: { author, siteTitle, siteDescription },
    },
  } = useStaticQuery(querySiteMetadata)

  return (
    <Helmet htmlAttributes={{ lang: "ru" }} title={`${title} ${siteTitle}`}>
      <meta name="author" content={author} />
      <meta name="description" content={description || siteDescription} />
    </Helmet>
  )
}

export const querySiteMetadata = graphql`
  {
    site {
      siteMetadata {
        author
        siteTitle: title
        siteDescription: description
      }
    }
  }
`
