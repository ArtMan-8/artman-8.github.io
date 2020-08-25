import React from "react"
import Title from "./title"
import Blog from "./blog"
import { Link } from "gatsby"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>

      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}

export default Blogs
