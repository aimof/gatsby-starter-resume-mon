const config = require('./config/profile.js')

module.Export = {
    siteMetadata: {
        title: config.siteTytle,
        siteUrl: config.siteUrl,
        description: config.siteDescription,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
    ]
}