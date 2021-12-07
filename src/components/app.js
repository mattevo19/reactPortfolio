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
          <div className="about mb-5">
            <p>
              Hi, I’m Matt. I’m an Ruby on rails and React Expert with a deep interest in
              modern web development.
            </p>
          </div>
          <div className="projects mb-5">
            <h2>Projects</h2>
            <ProjectList projects={projects} />
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <Project project={project} key={index} />
              ))}
            </div> */}
          </div>
          <div className="skills mb-5">
            <h2>Skills</h2>
            <Skills />
          </div>
        </div>
      </div>
    )
  }
}

export default App
