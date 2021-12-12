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
            <h2 className='text-base md:text-lg mb-2 md:mb-5'>Projects</h2>
            <ProjectList projects={projects} />
          </div>
          <div className="my-4">
            <h2 className='text-base md:text-lg mb-2 md:mb-5'>Skills</h2>
            <Skills />
          </div>
        </div>
      </div>
    )
  }
}

export default App
