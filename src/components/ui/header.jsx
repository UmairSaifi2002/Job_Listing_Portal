// import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <>
      <nav className='py-4 flex justify-between items-center' >
        {/* <Link>
          <img src="/logo.png" className='h-20' />
        </Link> */}
        <NavLink>
          <img src="/logo.png" className='h-20' />
        </NavLink>
        <Button variant='outline' >Login</Button>
      </nav>
    </>
  )
}
import { Link, NavLink } from 'react-router-dom'
import { Button } from './button'

export default Header
