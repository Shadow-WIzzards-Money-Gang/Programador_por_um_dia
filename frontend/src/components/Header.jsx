import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between p-5 w-full bg-gray-300">
      <nav className="flex justify-between items-center w-full">
        <span className="uppercase text-black font-bold text-4xl">Logo</span>
        <ul className='flex gap-5'>
          <li>
            <Link 
              to="/"
              className="text-black uppercase text-2xl hover:text-gray-500 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre"
              className="text-black uppercase text-2xl hover:text-gray-500 transition-all duration-300"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/login"
              className="border-2 border-black px-10 py-1 text-black uppercase text-2xl hover:text-white hover:bg-black transition-all duration-300"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
