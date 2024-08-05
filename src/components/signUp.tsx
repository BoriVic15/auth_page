import React, { useState } from 'react';

const Registration: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [address, setAddress] = useState ('');
    const [countrycode, setCountryCode] = useState ('');
    const [date, setDate] = useState ('');
    const [gender, setGender] = useState ('');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Name submitted:', name);
    console.log('Surname submitted:', surname);
    console.log('Email submitted:', email);
    console.log('Password submitted:', password);
    console.log('Address submitted:', address);
    console.log('CountryCode submitted:', countrycode);
    console.log('Date submitted:', date);
    console.log('Gender submitted:', gender);
}

return (
    <div className='great-grand-container  bg-gray-200 w-full h-screen flex justify-center items-center font-sans'>
        <div className='container1 border-gray-300 border-4 border-double bg-gray-200 w-5/12 h-3/4 mb-4 px-4'>
            <h1 className='mb-1 font-sans font-bold text-3xl'>Sign Up</h1>
            <p>It is easy and quick</p><hr className='mb-3 h-1 bg-gray-400 border-0'/>
            <form onSubmit={handleSubmit}>
                <div className='mb-1'>
                    <label htmlFor="name">Name:</label>
                    <input type="name"
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='border border-gray-800 border-1 border-solid ml-3 px-3 py-2 rounded'
                    required
                    />
                    <label htmlFor="surname" className='ml-4'>Surname:</label>
                    <input type="surname"
                    id="surname"
                    value={surname}
                    onChange={(e)=>setSurname(e.target.value)}
                    className='border border-gray-800 border-1 border-solid ml-3 px-3 py-2 rounded'
                    required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="address" className="block mb-2">Address:</label>
                    <input
                    type="address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                    required
                    />
                </div>
                <div className='mb-2'>
                <label htmlFor="password" className="block mb-2">Email:</label>
                   <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                    />
                </div>
                <div className="mb-2">
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
                <div className="mb-2">
                    <label htmlFor="countrycode" className="mb-2">Country Code:</label>
                    <input
                    type="countrycode"
                    id="countrycode"
                    value={countrycode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 border rounded ml-3"
                    required
                    />
                    <label htmlFor="date" className="mb-2 ml-7">DOB:</label>
                    <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="px-3 py-2 border rounded ml-3"
                    required
                    />
                </div>
                <div className="mb-2">
                    <h3>Gender</h3>
                    <label htmlFor="gender" className="mb-2 ml-7">Male</label>
                    <input
                    type="checkbox"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="border rounded ml-2"
                    required
                    />
                    <label htmlFor="gender" className="mb-2 ml-7">Female</label>
                    <input
                    type="checkbox"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="border rounded ml-2"
                    required
                    />
                </div>
                <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 font-bold text-xl">Sign Up</button>
            </form>
        </div>
    </div>
    );
};

export default Registration