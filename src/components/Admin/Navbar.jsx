import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link style={{ color: "red", fontSize: "26px" }} to='/'>HOME</Link></li>
        <li><Link to='/admin'>dashboard</Link></li>
        <li><Link to='/admin/products'>products</Link></li>
        <li><Link to='/admin/add'>Add New Product</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
