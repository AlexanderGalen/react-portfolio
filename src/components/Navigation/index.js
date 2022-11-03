import React from 'react'
import {Link} from "react-router-dom";
import "./style.css";

export default function Navigation() {

  // todo: highlight currently active page

  return (
    <nav className="navigation col-6 align-items-center">
      <div className="row p-0 pt-2 m-0 text-center">
        <h5 className="col-3 text-white">
          <Link to="/about">About Me</Link>
        </h5>
        <h5 className="col-3 text-white">
          <Link to="/portfolio">Portfolio</Link>
        </h5>
        <h5 className="col-3 text-white">
          <Link to="/contact">Contact</Link>
        </h5>
        <h5 className="col-3 text-white">
          <Link to="/resume">Resume</Link>
        </h5>
      </div>
    </nav>
  )
}
