import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Cards from '../components/cards/cards'

import cards from '../../contents/cards'
import Home from '../components/home'
import query from '../components/home'

import About from '../components/about/about'

import Others from '../components/others/others'

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
                <About />
                <Cards cards={cards.cards} />
                <Others />
            </Container>
        </Layout>
    )
}