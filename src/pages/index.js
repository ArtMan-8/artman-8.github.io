import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Jobs from "../components/jobs"
import Projects from "../components/projects"
import SEO from "../components/seo"
import projects from "../content/projects"

export default function Index() {
  return (
    <Layout>
      <SEO title="" description="Сайт-портфолио фронтенд разработчика" />
      <Hero />
      <Jobs />
      <Projects projects={projects} title="Некоторые работы" showLink />
    </Layout>
  )
}
