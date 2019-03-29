import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Cards from '../components/cards'

import cards from '../../contents/cards'
import Home from '../components/home'
import query from '../components/home'

const Container = styled.div`
position: relative;
max-width: 1024px;
margin: 0 auto;
`

export default () => {
    return (
        <Layout>
            <Container>
                <Home data={query}/>
                <Cards cards={cards.cards} />
            </Container>
        </Layout>
    )
}