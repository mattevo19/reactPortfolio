import React, { Component } from 'react'
import Project from './project'

export default class ProjectList extends Component {
  render() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {this.props.projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    )
  }
}
