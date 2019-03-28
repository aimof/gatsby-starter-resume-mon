import React from 'react'

const Project = ({ title, text, link }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {text}
            </div>
            <div>
                Link: {link}
            </div>
        </div>
    )
}

export default Project;