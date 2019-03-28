import React from 'react'

import Layout from '../components/layout'
import Project from '../components/project'

export default () => {
    return (
        <React.Fragment>
            <Layout>
            <Project 
                title="My Title"
                text="Hello, world!"
                link="https://blog.aimof.net"
            />
            </Layout>
        </React.Fragment>
    )
}