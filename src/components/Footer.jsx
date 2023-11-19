import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.webp'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  

  return (
    

    <footer className="flex flex-col">
      <div className="w-screen min-h-[20rem] bg-gray-900 flex flex-col gap-4 justify-center items-center text-white">
        <img src={logo} alt="Logo Tasty Courtyard" className='w-16'/>
        <ul className="flex flex-wrap justify-center items-center gap-8 p-4 text-lg">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>|</li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>|</li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>|</li>
          <li>
            <a href="#reservation">Reservation</a>
          </li>

          
        </ul>
      </div>
      <section className="flex flex-col justify-center items-center p-4 bg-gray-900 shadow-inner z-70 text-gray-500">
        <div className="items-center grid-flow-col">
          <p>Copyright © {year}</p>
        </div> 
        <div>
          <p>Created by <a target="_blank" href="https://lunarisweb.pl/" className="underline" rel="noreferrer">Lunaris Web</a> - All right reserved</p>
        </div> 
      </section>
    </footer>

  )
}

export default Footer