import React from 'react'

import {Link} from 'react-router-dom'

import '../style/style.css'

export default function Nav() {
      return(
        <header>
          <nav>
                <Link to="/" className="logo">MC</Link>
                <div className="right-nav">
                    <Link to="/about" >About</Link>
                    <Link to="/projects" >Projects</Link>
                    <Link to="/contact" >Contact</Link>
                </div>
          </nav> 
          </header>
      )
}