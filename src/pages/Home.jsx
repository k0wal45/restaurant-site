import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import SpecialMenu from '../components/SpecialMenu'
import Quote from '../components/Quote'

const Home = () => {
  return (
    <main className='w-screen overflow-x-hidden'>
      <Hero />
      <SpecialMenu />
      <About />
      <Quote />
      <section className="h-[400vh]"></section>
    </main>
  )
}

export default Home
