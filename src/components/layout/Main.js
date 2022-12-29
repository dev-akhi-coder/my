import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
function Main() {
  return (
    <>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </>
  )
}

export default Main