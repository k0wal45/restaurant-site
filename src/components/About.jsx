import cheff from '../assets/img/cheffcooking.webp'

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row justify-center items-start gap-8 mx-auto mt-24 p-4">
      <div className="flex flex-col jsutif-start gap-8 lg:max-w-[33vw]">
        <p className='section-title'>OUR STORY</p>
        <h4 className="section-heading">cooking is the art of adjustment</h4>
        <p className="font-playfair lg:text-lg">Founded in 1950, "Tasty Courtyard" is the culmination of a shared passion for culinary excellence. Led by Michelin Custain, our journey began with a commitment to creating a haven where flavors flourish, and every dining experience is a memorable celebration.</p>
        <p className="font-playfair lg:text-lg">From our humble beginnings, we've evolved into a culinary destination known for artfully crafted dishes, seasonal menus, and an ambiance that seamlessly blends elegance with warmth. At "Tasty Courtyard," we invite you to join us on a gastronomic journey where passion meets plate, and each moment is a delightful discovery.</p>
        <p className="font-playfair lg:text-lg">Thank you for being a part of our story. We look forward to creating many more delicious memories with you.</p>
        <a href='#reservation' className="btn btn-primary rounded-none text-lg font-playfair uppercase">reservation</a>
      </div>
      <img src={cheff} alt="Chef is cooking" className="lg:w-[30vw] lg:h-[80vh] object-cover" />
    </section>
  )
}

export default About
