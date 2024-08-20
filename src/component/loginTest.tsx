import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import prag from '../../public/tiara.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="block h-auto overflow-hidden md:bg-blue-200 md:w-full md:grid md:grid-cols-2">
      <div className="flex flex-col justify-center bg-gray-200  rounded mt-10 w-screen shadow-md md:w-full md:h-screen">
        <h2 className="text-gray-800 text-2xl font-bold mb-0 flex">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
          <div>
            <ul>
              <Link to="/password" className="text-gray-800 hover:text-gray-500">Forgotten password?</Link>
            </ul>
          </div>
        </form>
      </div>
      <div>
        <img src={prag} alt='driver' className='cover  w-full overflow-hidden md:h-screen md:mt-10'/>
      </div>
    </div>
  );
};

export default Login;