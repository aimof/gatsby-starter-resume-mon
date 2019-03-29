import React from 'react'

import skills from '../../../contents/skills'

const Skills = () => {
    return (
        <>
            <tr><th width="150px">Skills</th><th>Comments</th></tr>
            {skills.map(skill =>
                <tr>
                    <td>{skill.skill}</td>
                    <td>{skill.comment}</td>
                </tr>
  
            )}
        </>
    )
}

export default Skills