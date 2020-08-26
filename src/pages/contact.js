import React from "react"
import Layout from "../components/layout"

const Сontact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/xnqgyere" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>

            <button type="submit" className="btn submit-btn">
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Сontact
