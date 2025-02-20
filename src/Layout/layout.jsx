import React from 'react'
import { Link } from 'react-router-dom'
function Layout({children}) {
  return (

    <div>
        <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}

      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            MyWebsite
          </div>
          <ul className="flex space-x-6 text-gray-600">
            <li>
             
                <Link to="/" className='hover:text-blue-500'>Home</Link>
                </li>
            <li><Link to="/aboutus" className='hover:text-blue-500'>About</Link></li>
            <li><Link to="/services" className='hover:text-blue-500'>Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            <li><Link to="/product" className="hover:text-blue-500">Product</Link></li>
          </ul>
        </div>
      </nav>

      {children}

      </div>


      
    </div>
  )
}

export default Layout




