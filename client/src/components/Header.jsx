import React from 'react'
import { Link } from'react-router-dom'
import { AiOutlineClose } from'react-icons/ai'

const Header = () => {
  return (
    <>
    <nav>
      <div className="container nav-container">
        <Link to="/" className='nav-logo'> 
        <h2>Lumin Blog</h2>
        </Link>

        <ul className='nav-menu'>
          <li><Link to="/profile">mugunth</Link></li>
           <li><Link to="/create">Create Post</Link></li>
           <li><Link to="/author">Authors</Link></li>
           <li><Link to="/logout">Logout</Link></li>
        </ul>

        <button className='nav-btn'>
          <AiOutlineClose />
        </button>
      </div>
    </nav>
    </>
  )
}

export default Header