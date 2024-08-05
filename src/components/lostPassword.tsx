import React, { useState } from 'react';
import bglogo from '../../../vite-project/src/assets/T. Hub logo.jpg'

const LostPassword: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState ('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone number submitted:', phoneNumber);
    };
  
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
      console.log('OTP entered:', otp);
  };

  return (
    <div className='great-grand-container bg-gray-200 h-screen w-100% m-10'>
      <div className='grand-container grid grid-cols-2 h-screen'>
        <div className='container1 h-screen flex justify-center items-start flex-col pl-7'>
          <h2 className='font-bold text-2xl text-gray-900 font-sans mb-4'>Find your account</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor="phone" className='block mb-2 text-slate-500'>Enter your email address or mobile number for OTP (+234):</label>
              <input 
              type="tel"
              id='phoneNumber' 
              value={phoneNumber}
              onChange={(e) =>setPhoneNumber(e.target.value)}
              className='rounded py-2 w-11/12'
              required/>
            </div>
          </form>
          <button type="submit" className='bg-blue-800 w-1/6 py-2 rounded-md text-white hover:bg-blue-600 mb-4'>Send</button>
          <form onSubmit={handleVerifyOtp}>
            <div className="mb-4">
              <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-700">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Verify OTP
            </button>
          </form>
        </div>
        <div className='container2 bg-green-400 h-screen'>
          <img src={bglogo} alt="bglogo" className='cover h-screen w-full overflow-hidden' />
        </div>
      </div>
    </div>
  );
};

export default LostPassword;