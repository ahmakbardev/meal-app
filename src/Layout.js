import React from 'react'
import Navbar from './Components/Navbar'
import { BsCupFill, BsCupStraw, BsCupHotFill } from "react-icons/bs";
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer';

const Layout = () => {
  return (
    <>
      <Navbar/> 
      <div className="container align-items-center py-5 my-5">
          <div className="d-flex gap-3 container justify-content-center mt-5">
              <BsCupFill className='text-info' />
              <BsCupStraw className='text-info'/>
              <BsCupHotFill className='text-info'/>
          </div>
          <div className='fs-6 fw-bold text-center'>mealapp by ahmakbar.dev</div>
          <div className='display-3 text-center fw-bold'>Frontend page that displayed a foods each category and local culinary</div>
      </div>
      <div className="container">
        <Outlet/>
      </div>
      <Footer />
    </>
  )
}

export default Layout