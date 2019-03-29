import React from 'react'
import styled from "styled-components"
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import StyledTitle from "./common/styledTitle"

import conf from '../../config/profile'

const StyledHome = styled.div`
padding-top: 50px;
position: relative;
max-width: 100%;
height: 700px;
`

const StyledImage = styled.div`
position: absolute;
top: 100px;
right: 50px;
z-index: 1;
`

const HomeImage = () => (
    <StaticQuery
    query = {graphql`
        query {
            file(relativePath: {eq: "home.JPG"}) {
                childImageSharp {
                    fixed (height: 500, width: 500){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `}
    
    render = { data => <Img fixed={data.file.childImageSharp.fixed}/>}
    />
)

const Home = () => {
    return (
        <StyledHome>
            <StyledTitle>
                <h1>{conf.conf.siteTitle}</h1>
                <p>{conf.conf.siteSubTitle}</p>
            </StyledTitle>
            <StyledImage><HomeImage /></StyledImage>
        </StyledHome>
    )
}

export default Home