import dish1 from '../assets/img/menu/dish1.webp'
import dish2 from '../assets/img/menu/dish2.webp'
import dish3 from '../assets/img/menu/dish3.webp'

const News = () => {
  return (
    <section id="news" className="flex flex-col gap-4 w-full py-12 bg-paper items-center justify-start p-4">
      <p className="section-title">our news</p>
      <h8 className="section-heading">promotions & events</h8>

      <div className="grid lg:grid-rows-2 lg:grid-cols-3 lg:max-w-[60vw] mt-24">
        
        <img src={dish1} alt="Taste Courtyard Dish" className="object-cover h-full" />
        
        <div className="aspect-square bg-base-100 flex flex-col justify-center items-center p-4 lg:px-16 text-center gap-4">
          <h8 className="text-4xl font-playfair-semibold">Beef Sauteed Onions - Let's Enjoy!</h8>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">123 Broadway St, NY, United States<br/>10:00 - 14:00<br/>Monday, Jan. 25th 2024</p>
        </div>
        <img src={dish2} alt="Taste Courtyard Dish" className="object-cover h-full" />
        
        <div className="aspect-square bg-base-100 flex flex-col justify-center items-center p-4 lg:px-16 text-center gap-4">
          <h8 className="text-4xl font-playfair-semibold">Become A Super Chef So Easy With Us</h8>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">1600 Allen St, NY, United States<br/>12:00 - 17:00<br/>Friday, Jan. 24th 2024</p>
        </div>
        <img src={dish3} alt="Taste Courtyard Dish" className="object-cover h-full" />
        
        <div className="aspect-square bg-base-100 flex flex-col justify-center items-center p-4 lg:px-16 text-center gap-4">
          <h8 className="text-4xl font-playfair-semibold">Art Photography In Foody</h8>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">580 Brooklyn St, NY, United States<br/>9:00 - 12:00<br/>Thursday, Feb. 6th 2024</p>
        </div>
      
      </div>
    </section>
  )
}

export default News
