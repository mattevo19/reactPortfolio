import React, { Component } from 'react'

export default class Badge extends Component {
  render() {
    return (
      <div className={`mb-4 grid ${this.props.badges.length < 6 ? 'grid-cols-3' : 'grid-cols-3 md:grid-cols-6'} gap-2 mx-8 justify-center`}>
        {this.props.badges.map((badge, index) => (<span key={index} className="bg-blue-100 mx-1 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">{badge}</span>))}
      </div>
    )
  }
}
