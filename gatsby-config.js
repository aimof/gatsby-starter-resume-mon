const config = require('./config/profile.js')

module.exports= {
    siteMetadata: {
        title: config.siteTytle,
        siteUrl: config.siteUrl,
        description: config.siteDescription,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/images`,
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ]
}