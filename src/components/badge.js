import React, { Component } from 'react'

export default class Badge extends Component {
  render() {
    return (
      <div>
        {this.props.badges.map((badge, index) => (<span key={index} className="bg-blue-100 mx-1 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-md">{badge}</span>))}
      </div>
    )
  }
}
