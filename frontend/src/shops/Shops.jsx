import React from 'react'
import Navbar from '../components/Navbar'
import Shop from '../components/Shop'
import Footer from '../components/Footer'
import list from '../assets/list.json';

const Shops = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
        <Shop/>
    </div>
    <Footer/>
    </>
  )
}

export default Shops