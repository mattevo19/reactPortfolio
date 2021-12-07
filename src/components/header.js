import React, { Component } from 'react'
import Link from './link'

export default class Header extends Component {
  render() {
    return (
      <div class="py-4 mb-3 bg-purple-600	text-purple-100 rounded-b-lg ">
        <div class="navbar">
          <ul class="flex justify-center sm:justify-end mb-4 sm:mb-0">
            <li class="px-2">
              <Link link="https://github.com/mattevo19" name="Github" />
            </li>
            <li class="px-2">
              <Link link="https://www.linkedin.com/in/mattt-evans/" name="Linkedin" />
            </li>
            <li class="px-2">
              <Link
                link="https://drive.google.com/file/d/13Jk-srfxJxZoOTgxN8Fd1VCf3pjBnUOx/view?usp=sharing"
                name="CV"
              />
            </li>
          </ul>
        </div>
        <h1>
          Matt Evans <br /> Developer Portfolio
        </h1>
      </div>
    )
  }
}
