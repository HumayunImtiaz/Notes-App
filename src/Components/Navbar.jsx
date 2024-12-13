import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex flex-row gap-4 place-content-evenly  h-[10vh] w-full mt-1">
        <NavLink to='/' className='text-[#00FF00] mt-4 font-bold'>
            Home
        </NavLink>
        <NavLink to='/pastes' className='text-[#00FF00] mt-4 font-bold'>
            Pastes
        </NavLink>
        
    </div>
  )
}

export default Navbar