import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from '../../Components/Hero/Hero'
import Services from '../Services/Services'
import About from '../About/About'

const Home = () => {
  return (
    <div className='w-[100%] h-auto flex flex-col'>
        <Navbar/>
       <Hero/>
       <Services/>
       <About/>
    </div>
  )
}

export default Home
