import React, { Component } from "react";

import rails_icon from "../assets/images/rails.png";
import react_icon from "../assets/images/react.png";
import redux_icon from "../assets/images/redux.png";
import js_icon from "../assets/images/js.png";
import git_icon from "../assets/images/git.png";
import html_icon from "../assets/images/html.png";
import css_icon from "../assets/images/css.png";
import sass_icon from "../assets/images/sass.png";

export default class Skills extends Component {
  render() {
    return (
      <div className="skill_list flex justify-center my-4">
        <span className="icon mx-2">
          <img className="w-12 invert" src={rails_icon} alt="rails icon" />
        </span>
        <span className="icon mx-2">
          <img className="w-12" src={js_icon} alt="js icon" />
        </span>
        <span className="icon mx-2">
          <img className="w-12" src={react_icon} alt="react icon" />
        </span>
        <span className="icon mx-2">
          <img className="w-12 invert" src={redux_icon} alt="redux icon" />
        </span>
        <span className="icon mx-2">
          <img className="w-12 invert" src={git_icon} alt="git icon" />
        </span>
        <span className="icon mx-2">
          <img className="w-12" src={html_icon} alt="html icon" />
        </span>
        <span className="icon mx-2">
          <img className="w-12" src={css_icon} alt="css icon" />
        </span>
        <span className="icon mx-2">
          <img className="w-12" src={sass_icon} alt="sass icon" />
        </span>
      </div>
    );
  }
}
