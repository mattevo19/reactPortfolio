import React, { Component } from 'react'
import Link from './link'

export default class Header extends Component {
  render() {
    return (
      <div className="max-w-screen-lg mx-auto px-4 mb-3">
        <ul className="flex float-right justify-center sm:justify-end mb-4 sm:mb-0">
          <li className="mx-2 bb">
            <Link link="https://github.com/mattevo19" name="Github" />
          </li>
          <li className="mx-2 bb">
            <Link link="https://www.linkedin.com/in/mattt-evans/" name="Linkedin" />
          </li>
          <li className="mx-2 bb">
            <Link
              link="https://drive.google.com/file/d/13Jk-srfxJxZoOTgxN8Fd1VCf3pjBnUOx/view?usp=sharing"
              name="CV"
            />
          </li>
        </ul>
        <div className='text-left'>
          <h1 className='text-sm md:text-2xl'>
            Matt Evans
          </h1>
          <h3 className='text-sm md:text-2xl'>Fullstack Developer / Berlin</h3>
        </div>
      </div>
    )
  }
}
