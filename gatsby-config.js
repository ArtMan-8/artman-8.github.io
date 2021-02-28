module.exports = {
  siteMetadata: {
    author: "Владимир Артюхов",
    title: "Frontend developer - Владимир Артюхов",
    description: "Сайт-портфолио frontend разработчика",
    siteUrl: "https://artman-8.github.io/",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
