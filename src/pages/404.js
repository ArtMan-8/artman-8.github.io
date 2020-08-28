import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default function Error() {
  return (
    <Layout>
      <SEO title="404 |" description="Ууупс, страница не найдена" />
      <main className="error-page">
        <div className="error-container">
          <h2>Ууупс, такой страницы нет</h2>
          <br />
          <br />
          <Link to="/" className="btn">
            На главную
          </Link>
        </div>
      </main>
    </Layout>
  )
}
