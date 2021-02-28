import React from "react";
import { Helmet } from "react-helmet";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/social-links";
import "../css/main.css";

export default function Index() {
  const {
    file: {
      childImageSharp: { fluid },
    },
    site: {
      siteMetadata: { author, siteTitle, siteDescription },
    },
  } = useStaticQuery(query);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "ru" }} title={siteTitle}>
        <meta name="author" content={author} />
        <meta name="description" content={siteDescription} />
      </Helmet>

      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h1>Владимир</h1>
              <h4>Frontend Developer</h4>
              <a href="mailto:artman888@gmail.com" className="btn">
                Связаться
              </a>
              <SocialLinks />
            </div>
          </article>

          <Image fluid={fluid} className="hero-img" />
        </div>
      </header>
    </>
  );
}

const query = graphql`
  {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        siteTitle: title
        siteDescription: description
      }
    }
  }
`;
