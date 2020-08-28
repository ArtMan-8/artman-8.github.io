import React from "react"
import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"
import projects from "../content/projects"

export default function Project() {
  return (
    <Layout>
      <SEO
        title="Работы |"
        description="Выполненные работы - учебно-тренировачные, тестовые"
      />
      <section className="projects-page">
        <Projects projects={projects} title="Мои работы" />
      </section>
    </Layout>
  )
}
