import React, { Component } from 'react'
import Header from './header'
import Skills from './skills'
import ProjectList from './projectList'

import projects from '../data/projects.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="my-4">
            <img className='rounded-full w-40 m-auto mb-4' src="https://res.cloudinary.com/mge19/image/upload/v1642505230/IMG_20191004_082946_039_mixidh.jpg" alt="avatar" />
            <p className='mb-4'>I'm a Junior full stack developer currently living in berlin.<br />My current tech includes React for the Frontend, Rails for the Backend, and Heroku for hosting.<br />When I'm not coding I can usually be found climbing or out exploring on my bike.</p>
            <h2 className='text-base md:text-lg mb-2 md:mb-5'>Projects</h2>
            <ProjectList projects={projects} />
          </div>
          <div className="pb-20">
            <h2 className='text-base md:text-lg mb-2 md:mb-5'>Skills</h2>
            <Skills />
          </div>
        </div>
      </div>
    )
  }
}

export default App
