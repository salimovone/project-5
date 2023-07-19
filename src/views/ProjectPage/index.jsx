import React from 'react'
import Intro from '../../components/Intro'
import Projects from '../../components/Projects'

const ProjectPage = () => {
  return (
    <div className='pb-32'>
        <Intro name={'Project'} />
        <Projects big />
    </div>
  )
}

export default ProjectPage