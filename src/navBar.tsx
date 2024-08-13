import React from 'react';
import logo from '../public/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 fixed w-full md:w-full flex justify-end overflow-hidden">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:bg-gray-400">Login</Link>
        </li>
        <li>
          <Link to="/register" className="text-white hover:bg-gray-400">Sign Up</Link>
        </li>
        <li>
          <Link to="/password" className="text-white hover:bg-gray-400">Forgotten Password</Link>
        </li>
      </ul>
      <div className='flex justify-center'>
      <Link to="/" className="text-white hover:bg-gray-400"><img src={logo} alt="logo" className='rounded-full size-14 absolute top-0 left-3 md:absolute md:top-0'/></Link>
      </div>
    </nav>
  );
};

export default Navbar;