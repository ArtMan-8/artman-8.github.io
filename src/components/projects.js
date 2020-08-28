import React from "react"
import Title from "./title"
import Project from "./project"
import { Link } from "gatsby"

export default function Projects({ projects, title, showLink }) {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <Project key={project.id} index={index} {...project} />
        ))}
      </div>

      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Больше работ
        </Link>
      )}
    </section>
  )
}
