import React from 'react'
import styled from 'styled-components'

import others from '../../../contents/others'
import StyledTitle from '../common/styledTitle';

const StyledOthersDiv = styled.div`
position: relative;
margin-top: 100px;
width: 100%;
background-color: #412;
padding-top: 150px;
padding-bottom: 100px;
`

const StyledOthers = styled.div`
fontsize: 1.5em;
padding: 50px;
`

const Others = () => {
    return (
        <StyledOthersDiv>
            <StyledTitle>
                <h2>Others</h2>
            </StyledTitle>
            <StyledOthers>
                {others.map(other =>
                    <div>
                        <h3>{other.title}</h3>
                        <p>{other.body}</p>
                    </div>
                )}
            </StyledOthers>
        </StyledOthersDiv>
    )
}

export default Others