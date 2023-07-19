import React from 'react'
import Header from '../../components/Header'
import About from '../../components/About'
import Counter from '../../components/Counter'
import WorkFlow from '../../components/WorkFlow'
import Services from '../../components/Services'
import Projects from '../../components/Projects'
import Testimony from '../../components/Testimony'
import Team from '../../components/Team'
import Blog from '../../components/Blog'
import Clients from '../../components/Clients'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Header />
        <About />
        <Counter />
        <WorkFlow />
        <Services />
        <Projects />
        <Testimony />
        <Team />
        <Blog />
        <Clients />
    </div>
  )
}

export default Home