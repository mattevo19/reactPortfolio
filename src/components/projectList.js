import React, { Component } from 'react'
import Project from './project'

export default class ProjectList extends Component {
  render() {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-12 mb-8 md:mb-16">
        {this.props.projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    )
  }
}
