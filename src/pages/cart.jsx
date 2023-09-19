import React, { useContext } from 'react';
import { cartContext } from '../context/context';
import {BiHomeCircle} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { state } = useContext(cartContext);
  console.log(state)

  return (
    <div>
        <div className='flex justify-center bg-red-600 text-white'>
      <h1 className='text-xl font-bold ml-[43rem]'> Cart</h1>
      <div className='ml-[48rem] mt-2'>
        <Link to='/'><BiHomeCircle /></Link>
      </div>
      </div>
      <div>
      <ul>
        {state.map((products) => (
          <li key={products}>
            
            <div className='mt-6 ml-7'>
                <div className='flex gap-4'>
                <div className='w-[7.5rem]'>
            <img src={products.posterUrl} alt={products.name} />
            </div>
            <div className='text-lg font-semibold'>
            <p>{products.name}</p>
            </div>
            <div className='ml-[53rem] items-center'>
            <p>{products.price}</p>
            <div>
            <button className='bg-black w-6 text-white'>+</button>
            <button className='bg-black w-6 text-white'>-</button>
            {/* <p>{products.quantity}</p>
            <p>{products.quantity * products.price}</p> */}
            </div>
            </div>
            </div>
            <hr className='mt-10'></hr>
            </div>
          </li>
        ))}
</ul>
</div>
    </div>
  );
}
