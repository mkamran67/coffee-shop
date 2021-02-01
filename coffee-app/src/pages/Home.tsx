import React from 'react';
import { Link } from 'react-router-dom';
import LandingImg from '../images/landing-coffee.jpg';
const Home = () => {
  return (
    <div className='flex justify-between flex-shrink-none my-36 mx-24'>
      <img
        src={LandingImg}
        alt='coffee'
        className='absolute m-0 inset-0'
        style={{ zIndex: -1 }}
      />
      <div className='pl-10'>
        <h2 className='text-5xl text-left leading-normal'>
          WE BRING FLAVOR TO THE TABLE
        </h2>
        <br />
        <h3 className='pl-10 text-5xl text-right leading-normal '>
          FROM THE LAND OF THE RISING SUN
        </h3>
      </div>
      <div className='bg-gray-100 rounded-md shadow-lg p-4'>
        <form className='flex flex-col max-w-sm place-items-center align'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='fill-current text-gray-300 w-16 h-16 stroke-1'
            viewBox='0 0 512 512'
          >
            <title>Person Circle</title>
            <path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z' />
            <path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z' />
          </svg>

          <input
            className='text-lg focus:border-light-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none  text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 mt-3 hover:border-gray-400 focus:border-none'
            type='text'
            aria-label='Username'
            placeholder='Username'
          />
          <input
            className='text-lg focus:border-light-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none  text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10 my-3 hover:border-gray-400 focus:border-none'
            type='text'
            aria-label='Password'
            placeholder='Password'
          />
          <button
            className='rounded-md text-lg bg-yellow-200 border hover:border-blue-300 hover:border-2 mt-4 mb-2 px-16 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300'
            onClick={(e) => e.preventDefault()}
          >
            Login
          </button>
          <p className='text-md text-gray-700 my-2'>
            Don't have an account?<span> </span>
            <Link className='text-blue-400 hover:underline' to='user/signup'>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Home;
