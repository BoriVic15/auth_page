import React, { useState } from 'react';
import prag from "../assets/tiara.png";
import logo from "../assets/logo.jpg";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="grid grid-cols-2 h-screen bg-gray-200">
      <div className="flex flex-col justify-center bg-gray-200 p-5 rounded shadow-md">
        <div className='flex justify-center'>
          <img src={logo} alt="logo" className='rounded-full size-24 absolute top-1'/>
        </div>
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
          <div><a href='#forgotten-password' className='text-black-700 hover:text-gray-50'>Forgotten password?</a></div>
        </form>
      </div>
      <div>
        <img src={prag} alt='driver' className='cover h-screen w-full overflow-hidden'/>
      </div>
    </div>
  );
};

export default Login;