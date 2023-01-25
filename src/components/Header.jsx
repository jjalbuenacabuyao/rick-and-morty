import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/characters"}>Characters</Link></li>
        <li><Link to={"/episodes"}>Epsodes</Link></li>
        <li><Link to={"/locations"}>Locations</Link></li>
      </ul>
    </nav>
  )
}

export default Header