import React from 'react'
import styled from 'styled-components'

const ResetUL = styled.ul`
margin:0;
padding:0;
border:0;
outline:0;
font-size:100%;
vertical-align:baseline;
background:transparent;
list-style:none;
`

const ResetLI = styled.li`
margin:0;
padding:0;
border:0;
outline:0;
font-size:100%;
vertical-align:baseline;
background:transparent;
list-style:none;
`

const CardTexts = ({texts}) => {
    return (
        <ResetUL>
        {texts.map(text => 
            <ResetLI>
                {text}
            </ResetLI>
        )}
        </ResetUL>
    )
}

export default CardTexts