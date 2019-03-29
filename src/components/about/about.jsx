import React from 'react'
import styled from 'styled-components'
import StyledTitle from '../common/styledTitle'

import Contact from './contact'
import Skills from './skills'

import aboutme from '../../../contents/aboutme'


const StyledAbout = styled.div`
position: relative;
padding-top: 250px;
padding-bottom: 100px;
width: 100%;
background-color: #0D4026;
`

const StyledCopy = styled.div`
position: relative;
margin: 50px;
height: 100%;
top: 75px;
font-size: 2em;
`

const StyledTable = styled.div`
border: 2px #888 solid;
background-color: #314;
font-size: 1.5em;
width: 350px;
margin-right: 25px;
margin-bottom: 50px;
box-sizing: border-box;
`

const StyledTableDiv = styled.div`
position: absolute;
right: 0px;
bottom: 0px;
margin-bottom: 50px;
box-sizing: border-box;
text-align: left;
`

const About = () => {
    return (
        <StyledAbout>
            <StyledTitle>
                <h2>{aboutme.title}</h2>
            </StyledTitle>
            <StyledCopy>
                <b>{aboutme.body.map(text =>
                    <p>{text}</p>
                )}</b>
            </StyledCopy>
            <StyledTableDiv>
                <StyledTable>
                    <Contact />
                </StyledTable>
                <StyledTable>
                    <Skills />
                </StyledTable>
            </StyledTableDiv>
        </StyledAbout>
    )
}

export default About