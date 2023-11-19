import logo from '../../assets/img/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import './hamburger.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <nav className='z-50 flex justify-between lg:justify-around items-center p-4 lg:px-8 py-4 w-screen max-w-screen absolute top-0 font-playfair'>
      <div className="flex gap-8 items-center justify-center">
        <Link to="/">
          <img src={logo} alt="Logo Bezpieczni W Teorii" className='w-16 z-40'/>
        </Link>
      </div>

      {/* lg menu */}
      <ul className="hidden lg:flex gap-12 justify-center items-center text-white text-xl">
        <Link to="/" className='border-white hover:border-b-2'>
          <li>
            Home
          </li>
        </Link>
        <Link to="/menu" className='border-white hover:border-b-2'>
          <li>
          Menu
          </li>
        </Link>
        <a href="#about" className='border-white hover:border-b-2'>
          <li>
          About Us
          </li>
        </a>
        <a href="#news" className='border-white hover:border-b-2'>
          <li>
          News
          </li>
        </a>
      </ul>

      <a href="#reservation" className='hidden lg:flex gap-4 items-center justify-center border-white hover:border-b-2'>
        <p className='text-xl text-white'>Reservation</p>
        <FontAwesomeIcon icon={faAnglesRight} className='text-white'/>
      </a>


        {/* mobile menu */}

        <label className='flex lg:hidden z-50'>
          <input type="checkbox" id="check" onClick={(e) => {e.target.checked ? setVisible(true) : setVisible(false)}}/> 
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className={`absolute top-0 right-0 h-screen bg-primary z-30 origin-right transition-all duration-350 flex flex-col pt-24 w-full bg-opacity-80 gap-12
        ${
          visible
          ? 'scale-x-1'
          : 'scale-x-0'
        }
      `}>
        <h2 className="font-bold text-5xl text-center text-white font-playfair">Tasty<br/>Courtyard</h2>

      <ul className='gap-12 p-4 text-center flex flex-col text-2xl text-white'>
        <Link to="/">
          <li className={`font-bold `}>
            Home
          </li>
        </Link>
        <Link to="/menu">
          <li className={`font-bold `}>
          Menu
          </li>
        </Link>
        <a href="#about">
          <li className={`font-bold `}>
          About Us
          </li>
        </a>
        <a href="#news">
          <li className={`font-bold `}>
          News
          </li>
        </a>
        <a href="#reservation">
          <li className={`font-bold `}>
          Reservations
          </li>
        </a>
        <li>
          <ul className="flex justify-center items-center gap-8">
            <li>
                <FontAwesomeIcon icon={faFacebook} className='text-3xl'/>
            </li>
            <li>
                <FontAwesomeIcon icon={faInstagram} className='text-3xl'/>
            </li>

          </ul>
        </li>
      </ul>
    </div>

    </nav>
  )
}

export default Navbar
