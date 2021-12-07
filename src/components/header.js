import React, { Component } from 'react'
import Link from './link'

export default class Header extends Component {
  render() {
    return (
      <div className="max-w-screen-lg mx-auto px-4 p-4 mb-3">
        <div className="navbar">
          <ul className="flex justify-center sm:justify-end mb-4 sm:mb-0">
            <li className="px-2">
              <Link link="https://github.com/mattevo19" name="Github" />
            </li>
            <li className="px-2">
              <Link link="https://www.linkedin.com/in/mattt-evans/" name="Linkedin" />
            </li>
            <li className="px-2">
              <Link
                link="https://drive.google.com/file/d/13Jk-srfxJxZoOTgxN8Fd1VCf3pjBnUOx/view?usp=sharing"
                name="CV"
              />
            </li>
          </ul>
        </div>
        <div className='text-left'>
          <h1>
            Matt Evans
          </h1>
          <h2>Developer Portfolio</h2>
        </div>
      </div>
    )
  }
}
