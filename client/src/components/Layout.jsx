import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Sidebar'

const Layout = () => {
  return (
    <>
    <Header />
    <Navbar />
       <Outlet />
    <Footer />
    </>
  )
}

export default Layout