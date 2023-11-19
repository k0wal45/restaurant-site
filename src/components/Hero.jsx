import bowl from '../assets/img/bowl.webp'

const Hero = () => {
  return (
    <section id='up' className='w-screen max-w-screen min-h-screen flex flex-col lg:flex-row bg-photo items-end justify-end lg:justify-center p-4 pt-28 lg:pt-4'>
      <img src={bowl} alt="Bowl with meal in it" className='hidden lg:block max-w-[30vw] object-contain brightness-[85%]'/>
      <div className="flex flex-col justify-between items-end lg:h-[66vh] text-white p-4 lg:max-w-[33vw] text-end gap-32">
        <div className="flex flex-col gap-8">
          <p className='section-title'>WELCOME</p>
          <h1 className="text-7xl font-playfair-semibold">Eat, Talk and Hang Out!</h1>
        </div>

        <div className="flex flex-col">
          <p className=" text-xl text-base-300">Book a table directly</p>
          <p className="font-playfair-bold text-5xl">32 352 12 35</p>
          <p className="pt-12 text-lg">Opening Hours: Mon - Fri: 9:00 - 21:00 / Weekend: 9:00 - 22:00</p>
        </div>

      </div>
    </section>
  )
}

export default Hero
