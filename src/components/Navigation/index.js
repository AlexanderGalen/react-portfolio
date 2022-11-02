import React from 'react'
import {Link} from "react-router-dom";

export default function Navigation() {

  // todo: highlight currently active page

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/about">About Me</Link>         
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>         
        </li>
        <li>
          <Link to="/contact">Contact</Link>         
        </li>
        <li>
          <Link to="/resume">Resume</Link>         
        </li>
      </ul>
    </nav>
  )
}