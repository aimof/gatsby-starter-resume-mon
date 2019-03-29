import React from 'react'
import styled from 'styled-components'

import CardTexts from './cardTexts'

const StyledCard = styled.div`
margin: 10px;
padding: 10px;
padding-top: 5px;
background-color: #0A384A;
color: #F4F3E1;
z-index: 8;
`

const StyledA = styled.a`
color: #70A6A1;
`

const Card = ({title, subtitle, texts, link}) => {
    return (
        <StyledCard>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <CardTexts
                texts={texts}
            />
            <StyledA href={link}>{link}</StyledA>
        </StyledCard>
    )
}

export default Card
