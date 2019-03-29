import React from 'react'
import styled from 'styled-components'

import contact from '../../../contents/contact'

const StyledA = styled.a`
color: #E3B086;
`

const Contact = () => {
    return(
        <>
            <tr><th width="150px">Services</th><th>My Accounts</th></tr>
            {contact.accounts.map(accounts =>
            <tr>
                <td>{accounts.service}</td>
                <td><StyledA href={accounts.link}>{accounts.displayName}</StyledA></td>
            </tr>
            )}
        </>
    )
}
export default Contact