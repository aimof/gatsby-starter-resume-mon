import React from 'react'
import styled from "styled-components"
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import window from 'global'

import StyledTitle from "./styledCommon"

import Card from "./card"

const StyledDiv = styled.div`
padding-top: 100px;
position: relative;
background-color: #112;
width: 100%;
`

const StyledList = styled.div`
position: relative;
top: 200px;
background-color: #112;
`

const Cards = ({cards}) => {
    let list = []
    const contents = cards.contents
    let countCols = 2
    if (window.innerWidth < 700) {
        countCols = 1
    }
    return (
        <StyledDiv>
            <StyledTitle>
                <h1>{cards.title}</h1>
            </StyledTitle>
            <StyledList>
                <GridList
                    cols={countCols}
                    cellHeight="600px"
                >
                    {contents.map(card => 
                        <GridListTile>
                            <Card
                                title={card.title}
                                subtitle={card.subtitle}
                                texts={card.texts}
                                link={card.link}
                            />
                        </GridListTile> 
                    )}
                </GridList>
            </StyledList>
        </StyledDiv>
    )
}


export default Cards