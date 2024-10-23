import React from 'react'
import Intro from '../../components/Intro'
import WorkFlow from '../../components/WorkFlow'
import Services from '../../components/Services'
import Projects from '../../components/Projects'

const ServicePage = () => {
  return (
    <div className='pb-32'>
        <Intro name={'Services'} />
        <WorkFlow />
        <Services />
        <Projects />
    </div>
  )
}

export default ServicePage