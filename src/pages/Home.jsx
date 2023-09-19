import React, {useEffect, useState, useContext} from 'react';
import {BsCart3} from 'react-icons/bs';
import ecommerceLogo from '../assets/ecommerceLogo.png';
import {AiFillMail} from 'react-icons/ai';
import axios from 'axios';
import { cartContext } from '../context/context';
import { Link } from 'react-router-dom';

export default function Home() {
    
    
    
    const itemList = [
        'iphone',
        'apple',
        'tablet',
        'airpod',
        'laptop',
        'wrist',
        'charger',
        'adapter',
        'ipod',
        'Airtag',
        'tv'
        
    ];
    const [ filtered, setFiltered ] = useState(itemList)
    const [productss, setProducts] = useState ([]);
    

    const filterBySearch = (e) => {
        const result = e.target.value;
        var updatedList = [...itemList];
        updatedList = updatedList.filter((produce) => {
            return produce.toLowerCase().indexOf(result.toLowerCase()) !== -1;
        });
        setFiltered(updatedList);
    };
    

    // const [isLoading, setIsLoading] = useState(true);
    const allProducts =  () => {
        try {
             axios.get('https://magneto-bqfl.onrender.com/api/products/all-products').then((res) =>{
                setProducts(res.data.products)
                console.log('data', res.data);
            });
        } catch (err) {}
    };

    useEffect (allProducts, []);


    const globalState = useContext(cartContext);
    const dispatch =  globalState.dispatch
    console.log(globalState)

  return (
    <div>
        <section className='flex py-5 bg-red-600 w-full text-white sticky top-0'>
            <div className='ml-[10rem]'>
                <img src={ecommerceLogo} alt='' className='w-[4rem]'/><h1>Magneto</h1>
            </div>
            <div className='flex ml-[39rem]'>
            <ul className='flex items-center gap-[4rem]'>
               <li><Link to='/'><h1>HOME</h1></Link></li>
                <li>PHONES</li>
                <li>OTHER ACCESSORIES</li>
                <li><Link to='/cart'><BsCart3 /></Link></li>
                <li><button><Link to='/User'> users </Link></button></li>
                <li><button><Link to='/Admin'>Admin </Link></button></li>
            </ul>
            </div>
        </section>
        <div>
        <div className='fixed'>
            <input type='text' placeholder='Search products' onChange={filterBySearch} className='w-[23rem] h-[3.2rem] mt-4 ml-[82rem] border border-red-700 rounded pl-3' />
        </div>
        <div>
            <ol>
            {filtered.map((produce) => {
                return ( <div key={produce} >
                <div>
                    <li>
                    
                    </li>
                </div>
                </div>)
            }
            )}
            </ol>
        </div>
        </div>
        <section>
            <div className='grid grid-cols-4 gap-1'>
        {productss.map((produce) =>{
            // produce.quantity= 1;
          return (  <div key={produce} >
                <div className='w-[12rem] pt-[7.3rem] ml-[9.5rem] '>
                    <img src={produce.posterUrl} alt=''/>
                    <p className='text-center'>{produce.name}</p>
                    <p className='text-center'>{produce.description}</p>
                    <p className='text-center'>{produce.price}</p>
                    {produce.quantity}
                    <button className='bg-black h-8 w-[7rem] text-white rounded ml-9' onClick={()=>dispatch({type: 'ADD', payload: produce})}>Add to cart</button>
                    </div>
                </div>
                )
        }
        )}
        </div>
        </section>
        <section className='flex items-center bg-black text-white gap-[13rem] mt-[6rem]'>
            <div className='flex items-center ml-[10rem]'>
            <h1 className='font-bold text-2xl'>MAGNETO</h1>
            <div>
                <img src={ecommerceLogo} alt='' className='w-[3.8rem] bg-black'/>
            </div>
            </div>
            <div className='mt-[4.3rem] ml-[5rem]'>
                <h1 className='font-bold'>New to Magneto?</h1>
                <div>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                </div>
                <div className='w-full'>
                <AiFillMail className='absolute mt-[1.2rem] pl-2 w-8 bg-red-700' />
                    <input type='search' placeholder='Mail' className='w-[23rem] h-[3.2rem] rounded border border-red-700 pl-10'/>
                    
                </div>
            </div>
            <div className='flex ml-[0rem]'>
                <img src={ecommerceLogo} alt='' className='w-[5.8rem]'/>
                <div className='mt-3'>
                    <p className='font-bold'>DOWNLOAD JUMIA FREE APP</p>
                    <p>Get access to exclusive offers</p>
                </div>
            </div>
            </section>
            <section className='flex bg-black text-white gap-48 '>
                <div className='ml-[10rem]'>
                    <h1 className='font-bold'>NEED HELP?</h1>
                    <div>
                        <p>Chat With Us</p>
                        <p>Help center</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                
                    <div className='ml-[8rem]'>
                    <h1 className='font-bold'>About Magneto</h1>
                    <div>
                        <p>About Us</p>
                        <p>Magneto careers</p>
                        <p>Magneto express</p>
                        <p>Terms and Condition</p>
                        <p>Privacy Notice</p>
                        <p>Location and stores</p>
                    </div>
                
                </div>
                <div>
                    <h1 className='font-bold'>Make Money On Magneto</h1>
                        <div>
                           <p>Sell on Mangneto</p>
                           <p>Vendor Hub</p>
                           <p>Become a sales Consultant</p>
                           <p>Become a Logistic service partner</p>
                           <p>Join the Jumia DA Academy</p> 

                        </div>
                    </div>
                <div className='ml-[3rem]'>
                    <h1 className='font-bold'>MAGNETO INTERNATIONAL</h1>
                    <div>
                    <p>Egypt</p>
                    <p>Nigeria</p>
                    <p>United Kingdom</p>
                    <p>United State</p>
                    <p>South Africa</p>
                    </div>
                </div>
            </section>
    </div>
  )
}
