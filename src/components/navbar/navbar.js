import React from 'react'
import './navbar.css'

/**
 * @param {*} props The default React props object, in addition:
 *                      - {string} props.height The height of the navbar; should be a valid css value.
 *                      - {string} props.bColor The color of the navbar; should be a valid css value.
 */
function Navbar (props) {
  return (
        <nav className="navbar">
            {props.children}
        </nav>
  )
}

export default Navbar
