import Footer from '../components/Footer'
import About from '../components/About'
import Review from '../components/Review'

const AboutUs = () => {
  return (
    <main className='w-screen overflow-x-hidden'>
      <section className="w-screen h-[50vh] grid place-items-center bg-photo">
        <h1 className="text-8xl font-playfair-semibold text-white text-center" >About Us</h1>
      </section>
      <About />
      <Review />
      <Footer />
    </main>
  )
}

export default AboutUs
