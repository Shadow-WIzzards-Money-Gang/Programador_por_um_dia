import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between p-5 w-full bg-neutral-700">
      <nav className="flex justify-between items-center w-full">
        <span className="uppercase text-gray-200 font-bold text-4xl">Logo</span>
        <ul className='flex gap-5'>
          <li>
            <Link 
              to="/"
              className="text-gray-200 uppercase text-2xl hover:text-gray-400 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/sobre"
              className="text-gray-200 uppercase text-2xl hover:text-gray-400 transition-all duration-300"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="/login"
              className="border-2 border-white px-10 py-1 text-gray-200 uppercase text-2xl hover:text-black hover:bg-white transition-all duration-300"
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
