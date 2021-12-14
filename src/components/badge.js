import React, { Component } from 'react'

export default class Badge extends Component {
  render() {
    return (
      <div className={`mb-4 grid width_fit ${this.props.badges.length < 7 ? 'grid-cols-3 md:grid-cols-4' : 'grid-cols-3 md:grid-cols-6'} gap-2 mx-auto`}>
        {this.props.badges.map((badge, index) => (<span key={index} className="bg-blue-100 mx-1 text-blue-800 text-xs font-medium px-2.5 py-0.5 w-20 rounded-md">{badge}</span>))}
      </div>
    )
  }
}
