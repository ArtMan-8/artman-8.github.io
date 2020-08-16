import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import Blogs from "../components/blogs"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  )
}

export default Index

// ...GatsbyImageSharpFluid
