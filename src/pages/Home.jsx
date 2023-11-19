import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import SpecialMenu from '../components/SpecialMenu'
import Quote from '../components/Quote'
import Review from '../components/Review'
import News from '../components/News'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className='w-screen overflow-x-hidden'>
      <Hero />
      <SpecialMenu />
      <About />
      <Quote />
      <Review />
      <News />
      <Contact />
      <Map />
      <Footer/>
    </main>
  )
}

export default Home
