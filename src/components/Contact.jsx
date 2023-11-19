import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    people: '',
    date: '',
    time: '',
  })

  const {
    name,
    surname,
    phone,
    email,
    people,
    date,
    time
  } = formData


  const maxDate = () => {
    const dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let today = dtToday.getDate();
    let day = today+1
    let year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
    day = '0' + day.toString();
    const maxDate = year + '-' + month + '-' + day;
    return maxDate
  }
  const onMutate = (e) => {
    let boolean = null

    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    console.log('Here you have all of data that has been inserted into the form as state `formData`, form now we can do everything we want with it')
    setFormData({
      name: '',
      surname: '',
      phone: '',
      email: '',
      people: '',
      date: '',
      time: '',
    })
    toast.success(`Hello ${name}, rest assured that we will notify you either by phone or email once your reservation is confirmed. Thank you very much!`)
  }


  return (
    <section  id="reservation" className="flex flex-col gap-4 w-full p-4 pt-12 pb-0 bg-paper items-center justify-start ">
      <p className="section-title">contact us</p>
      <h8 className="section-heading">we always here to help you</h8>

      <div className="bg-base-100 p-12 flex flex-col-reverse lg:flex-row gap-8 lg:translate-y-24 mt-12 lg:mt-0">
        <div className="flex flex-col p-4 justify-between items-start gap-4">
          <div className="flex flex-col justify-center items-start gap-4">
            <h9 className="text-3xl font-playfair-semibold flex gap-4">
              <span>Melbourne,</span>
              <span className="text-gray-500">Australia</span>
            </h9>
            <p className="text-xl text-gray-600">269 King Str, 05th Floor, Utral House Building<br/>Melbourne, VIC 3000, Autralia</p>
            <p className="text-xl text-gray-600 flex gap-2"><span className="text-black text-bold">Email:</span><span>info@tastycourtyard.com</span></p>
            <p className="text-xl text-gray-600 flex gap-2"><span className="text-black text-bold">Phone:</span><span>32 352 12 35</span></p>
          </div>
          
            <div className="w-32 border-2 border-black"></div>
          
        </div>

        <form action="" className="flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input onChange={onMutate} type="text" name="name" id="name" className="p-4 w-1/2" placeholder='Name' required value={name}/> 
            <input onChange={onMutate} type="text" name="surname" id="surname" className="p-4 w-1/2" placeholder='Surname' required value={surname}/> 
          </div>
          <input onChange={onMutate} type="text" name="phone" id="phone" className="p-4 w-full" placeholder='Phone Number' required value={phone}/> 
          <input onChange={onMutate} type="text" name="email" id="email" className="p-4 w-full" placeholder='E-mail (optional)' value={email}/>
          <input onChange={onMutate} type="number" name="people" id="people" className="p-4 w-full" placeholder='How many people (max 12)' max={12} min={1} required value={people}/> 
          <input onChange={onMutate} type="date" name="date" id="date" className="p-4 w-full" required value={date} min={maxDate()}/> 
          <input onChange={onMutate} type="time" name="time" id="time" className="p-4 w-full" required value={time}/> 
          <button className="p-4 w-full bg-primary text-xl uppercase" >Reserve Your Table</button>
          <p className="text-lg text-gray-400 max-w-[25rem]">Please be advised that our reservations may reach full capacity. In such a case, we will promptly notify you and assist in rescheduling your reservation.</p>


        </form>
        
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  )
}

export default Contact
