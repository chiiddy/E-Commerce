import React, {useState} from 'react';
import ecommerceLogo from '../assets/ecommerceLogo.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Admin() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (e) => {
        setInputs({...inputs, [e.target.id]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post('https://magneto-bqfl.onrender.com/api/admin/create-admin', inputs).then ((res) => {
                console.log(res.data);
            })
        } catch (err) {
            console.log(err);
        }
    };

    const handleButtonClick = () => {
        alert('logged in successful')
    };
  return (
    <div className='flex justify-center mt-[4rem]'>
        <section>
            <div className='w-[12rem] ml-[7rem]'>
            <img src={ecommerceLogo} alt='' />
            </div>
            <span>
                <h1 className='text-2xl font-bold font-medium ml-[6rem]'>Welcome to Mangneto</h1>
                <p className='font-thin text-xl ml-[12rem]'>Admin</p>
            </span>
            <form onSubmit={onSubmit}>
            <div className='mt-8 gap-5'>
                <div className='mt-5'>
                <input type='email' placeholder='Email' required id='email' value={inputs.email} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
                <div className='mt-5'>
                <input type='password' placeholder='Password' required id='password' value={inputs.password} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
            </div>
            </form>
            <div className='mt-9'>
               <button onClick={handleButtonClick} className='w-[29.8rem] h-[3.6rem] bg-red-600 rounded text-white' ><Link to='/'>Log in</Link></button>
                <div>
                    <p className='font-thin ml-3'>For further support, you may visit the Help Center or contact our <br></br>customer service team.</p>
                </div>
            </div>
        </section>
    </div>
  )
}
