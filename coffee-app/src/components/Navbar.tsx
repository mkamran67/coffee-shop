import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import UserIcon from '../SVGS/person-outline.svg';
import CoffeeCupIcon from '../SVGS/Cup.svg';
import SearchIcon from '../SVGS/search-outline.svg';
import CartIcon from '../SVGS/cart-outline.svg';
import CupIcon from '../SVGS/cafe-outline.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-gray-200 max-w-screen'>
      {/* ---------------- Logo ---------------- */}
      <Link to='/' className='ml-3 p-2'>
        <img
          src={CupIcon}
          alt='Coffee Cup'
          className='w-12 p-1 cursor-pointer'
        />
      </Link>
      {/* ---------------- Menu ---------------- */}
      <div className='text-xl flex justify-between'>
        <Link
          className='capitalize px-2 border-b-2 border-transparent hover:border-black border-b-rounded'
          to='all/coffee'
        >
          Coffee
        </Link>
        <Link
          className='capitalize px-2 border-b-2 border-transparent hover:border-black border-b-rounded'
          to='all/tea'
        >
          Tea
        </Link>
        <Link
          className='capitalize px-2 border-b-2 border-transparent hover:border-black border-b-rounded'
          to='club/subscriptions'
        >
          Subscriptions
        </Link>
        <Link
          className='capitalize px-2 border-b-2 border-transparent hover:border-black border-b-rounded'
          to='locale/visit'
        >
          Visit Us
        </Link>
        <Link
          className='capitalize px-2 border-b-2 border-transparent hover:border-black border-b-rounded'
          to='edu/learn'
        >
          Learn
        </Link>
      </div>
      {/* --------- User Credentials ----------- */}
      <div className='flex justify-evenly items-center '>
        <Link to='user/login' className='mx-4'>
          <img src={UserIcon} alt='User - Login' className='w-10 py-1' />
          {/* <p className=' text-black text-center'>Login</p> */}
        </Link>
        <Link to='all/search' className='mx-4 w-10 py-1'>
          <img src={SearchIcon} alt='Search Button' />
          {/* <p className=' text-black text-center'>Search</p> */}
        </Link>
        <Link to='shop/cart' className='mx-4 w-10 py-1'>
          <img src={CartIcon} alt='Shopping Cart' />
          {/* <p className=' text-black text-center '>Cart</p> */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
