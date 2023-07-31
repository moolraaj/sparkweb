import React from 'react'
import { NavLink} from 'react-router-dom'
function Navbar() {
  return (
     <>
      <ul className='ul-navbar'>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/services'>services</NavLink>
 
     </ul>
     </>
  )
}

export default Navbar
