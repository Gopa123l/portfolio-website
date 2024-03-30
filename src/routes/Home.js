import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Work from '../components/Work'
import About from '../components/AboutContent'

const Home = () => {
  return <div>
    <Navbar/>
    <HeroImg/>
    <Work/>        
    <Footer/>
  </div>
}

export default Home