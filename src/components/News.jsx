import photo from '../assets/img/bg.webp'

const News = () => {
  return (
    <section id="news" className="flex flex-col gap-4 w-full py-12 bg-paper items-center justify-start">
      <p className="section-title">our news</p>
      <h8 className="section-heading">promotions & events</h8>

      <div className="grid grid-rows-2 grid-cols-3 max-w-[60vw] mt-24">
        
        <img src={photo} alt="" className="object-cover aspect-square" />
        
        <div className="aspect-square bg-base-100 flex flex-col justify-center items-center px-16 text-center gap-4">
          <h8 className="text-4xl font-playfair-semibold">Beef Sauteed Onions - Let's Enjoy!</h8>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">123 Broadway St, NY, United States<br/>10:00 - 14:00<br/>Monday, Jan. 25th 2024</p>
        </div>
        <img src={photo} alt="" className="object-cover aspect-square" />
        
        <div className="aspect-square bg-base-100 flex flex-col justify-center items-center px-16 text-center gap-4">
          <h8 className="text-4xl font-playfair-semibold">Beef Sauteed Onions - Let's Enjoy!</h8>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">123 Broadway St, NY, United States<br/>10:00 - 14:00<br/>Monday, Jan. 25th 2024</p>
        </div>
        <img src={photo} alt="" className="object-cover aspect-square" />
        
        <div className="aspect-square bg-base-100 flex flex-col justify-center items-center px-16 text-center gap-4">
          <h8 className="text-4xl font-playfair-semibold">Beef Sauteed Onions - Let's Enjoy!</h8>
          <p className="text-gray-400 text-xl">---------</p>
          <p className="text-gray-400 text-xl">123 Broadway St, NY, United States<br/>10:00 - 14:00<br/>Monday, Jan. 25th 2024</p>
        </div>
      
      </div>
    </section>
  )
}

export default News
