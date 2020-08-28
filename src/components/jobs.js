import React from "react"
import Title from "./title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "gatsby"
import jobs from "../content/jobs"

export default function Jobs() {
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={job.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>

      <Link to="/about" className="btn center-btn">
        О себе
      </Link>
    </section>
  )
}
