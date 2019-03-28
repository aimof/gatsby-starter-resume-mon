import React from 'react'
import Helmet from 'react-helmet'

import conf from '../../config/profile'


const Layout = ({children}) => {
    return (
        <React.Fragment>
            <head>
                <Helmet>
                    <title>{conf.siteTitle}</title>
                    <meta name="description" content={conf.siteDescription}></meta>
                </Helmet>
            </head>
            {children}
        </React.Fragment>
    )
}

export default Layout