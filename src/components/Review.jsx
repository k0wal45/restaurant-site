import cheff from '../assets/img/cheffphoto.webp'

const Review = () => {
  return (
    <section id="review" className="flex flex-col-reverse lg:flex-row lg:w-2/3 mx-auto p-4 mt-12 gap-8 pb-0">
      <img src={cheff} alt="Kitchen Cheff" className="h-[60vh]" />
      <div className="flex justify-start items-end flex-col gap-4 py-12 lg:max-w-[30vw] text-end">
        <p className="section-title">review</p>
        <h7 className="section-heading">the food's masters say about us</h7>

        <div className="flex justify-start items-end flex-col gap-4 pt-12 ">
          <p className="font-playfair-semibold text-xl">"The best restaurant I used to experience!"</p>
          <p className="text-xl text-gray-600">"Exceptional. 'Tasty Courtyard' seamlessly blends innovation and precision in every dish. An exquisite culinary journey that deserves applause. Bravo to the entire team for creating a haven for food enthusiasts. I look forward to returning."</p>

          <div className="flex">
            <span className='font-bold'>Joe Bastianich</span>
            <p className=''> - Winner Master Chef 2016 2017</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Review
