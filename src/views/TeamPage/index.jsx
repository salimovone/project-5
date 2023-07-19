import React from 'react'
import Intro from '../../components/Intro'
import Team from '../../components/Team'
import Projects from '../../components/Projects'

const TeamPage = () => {
  return (
    <div>
        <Intro name={'Our Architect'} />
        <Team big />
        <Projects />
    </div>
  )
}

export default TeamPage