import React from 'react'
import ReactDOM from 'react-dom'

const Navbar = () => {
  return(
    <nav id='navbar' className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/feed'>Twitter</a>
      </div>
    </nav>
  )
}

export default Navbar;