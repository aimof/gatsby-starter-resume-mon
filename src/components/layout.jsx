import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import conf from '../../config/profile'

const StyledBody = styled.body`
background-color: #212;
color: #EEE;
a: #21C;
`

export default ({children}) => {
    return (
        <React.Fragment>
            <head>
                <Helmet>
                    <meta charset="utf-8"></meta>
                    <title>{conf.conf.siteTitle}</title>
                    <meta name="description" content={conf.conf.siteDescription}></meta>
                    <meta lang={conf.conf.siteLanguage}></meta>
                </Helmet>
            </head>
            <StyledBody>
                {children}
            </StyledBody>
        </React.Fragment>
    )
}