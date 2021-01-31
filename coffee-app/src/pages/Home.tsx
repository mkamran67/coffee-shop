import React from 'react';
import LandingImg from '../images/landing-coffee.jpg';
const Home = () => {
  return (
    <div className='flex justify-between flex-1 w-full my-36 mx-24'>
      <img
        src={LandingImg}
        alt='coffee'
        className='absolute m-0 inset-0'
        style={{ zIndex: -1 }}
      />
      <div>
        <h2 className='text-5xl text-left leading-loose'>
          We bring flavor to the table
        </h2>
        <h3 className='text-5xl text-right leading-loose'>
          From the land of the Rising Sun
        </h3>
      </div>
      <div>
        <form className='flex-col max-w-md'>
          <input
            className='focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10'
            type='text'
            aria-label='Username'
            placeholder='Username'
          />
          <input
            className='focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10'
            type='text'
            aria-label='Password'
            placeholder='Password'
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
