import React, {useState} from 'react';
import ecommerceLogo from '../assets/ecommerceLogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Users() {
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleOnChange = (e) => {
        setInputs({...inputs, [e.target.id]: e.target.value});
    };

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post('https://magneto-bqfl.onrender.com/api/accounts/create-user', inputs).then((res) =>{
              console.log(res.data);
              navigate('/')
              alert("User registered successfully!!");
            })
          }catch (err) {
            console.log(err);
        }
    }
  return (
    <div className='flex justify-center mt-[4rem]'>
        <section>
            <div className='w-[12rem] ml-[7rem]'>
            <img src={ecommerceLogo} alt='' />
            </div>
            <span>
                <h1 className='text-2xl font-bold font-medium ml-[6rem]'>Welcome to Mangneto</h1>
                <p className='font-thin text-xl'>Type to create an account or Log in a Mangneto account</p>
            </span>
            <form onSubmit={onSubmit}>
            <div className='mt-8 gap-5'>
                <span className='mt-5'>
                <input type='text' placeholder='First Name' required id='firstName' value={inputs.firstName} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </span>
                <div className='mt-5'>
                <input type='text' placeholder='Last Name' required id='lastName' value={inputs.lastName} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
                <div className='mt-5'>
                <input type='email' placeholder='Email' required id='email' value={inputs.email} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
                <div className='mt-5'>
                <input type='password' placeholder='Password' required id='password' value={inputs.password} onChange={handleOnChange}  className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
            </div>
            <a href='/'><button className='w-[29.8rem] h-[3.6rem] bg-red-600 rounded text-white mt-4 '>Continue</button></a>
            </form>
            <div className='mt-9'>
                <p>Already a user?</p>
               <a href='/Signin'> <button className='w-[29.8rem] h-[3.6rem] bg-red-600 rounded text-white' >Log in</button></a>
                <div>
                    <p className='font-thin ml-3'>For further support, you may visit the Help Center or contact our <br></br>customer service team.</p>
                </div>
            </div>
        </section>
        
    </div>
  )
}
