import React, { Component } from "react";
import Link from "./link";

export default class Header extends Component {
  render() {
    return (
      <div className="max-w-screen-lg mx-auto mb-4 px-4 pt-4">
        <ul className="flex float-right mb-4 sm:mb-0">
          <li className="mx-2 bb">
            <Link link="https://github.com/mattevo19" name="Github" />
          </li>
          <li className="mx-2 bb">
            <Link
              link="https://www.linkedin.com/in/mattt-evans/"
              name="Linkedin"
            />
          </li>
          <li className="mx-2 bb">
            <Link
              link="https://drive.google.com/file/d/15FBdBLkvx4O_A8QfcNC-AOdXCZmUpdO9/view?usp=sharing"
              name="CV"
            />
          </li>
        </ul>
        <div className="text-left">
          <h1 className="md:text-2xl">Matt Evans</h1>
          <h3>Fullstack Developer / Berlin</h3>
        </div>
      </div>
    );
  }
}
