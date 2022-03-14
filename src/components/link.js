import React, { Component } from "react";

export default class Link extends Component {
  render() {
    return (
      <a className="bb" target="_blank" rel="noreferrer" href={this.props.link}>
        {this.props.name}
      </a>
    );
  }
}
