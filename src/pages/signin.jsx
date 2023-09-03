import React, {useState} from 'react';
import ecommerceLogo from '../assets/ecommerceLogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signin() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setInputs({...inputs, [e.target.id]: e.target.value})
  };

  const navigate = useNavigate();
  const OnSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post ('http://localhost:8000/api/accounts/login', inputs).then((res) => {
        console.log(res.data);
        navigate('/')
        alert('Login successfully');
      })
    } catch (err) {
      console.log(err);
    }
};
  return (
    <div className='flex justify-center mt-[4rem]'>
        <section>
            <div className='w-[12rem] ml-[7rem]'>
            <img src={ecommerceLogo} alt='' />
            </div>
            <span>
                <h1 className='text-2xl font-bold font-medium ml-[6rem]'>Welcome to Mangneto</h1>
                <p className='font-thin text-xl ml-[6rem]'> Log in a Mangneto account</p>
            </span>
            <form onSubmit={OnSubmit}>
            <div className='mt-8 gap-5'>
                <div className='mt-5'>
                <input type='email' placeholder='Email' required id='email' value={inputs.email} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
                <div className='mt-5'>
                <input type='password' placeholder='Password' required id='password' value={inputs.password} onChange={handleOnChange} className='w-[29.8rem] h-[3.6rem] border border-red-700 rounded pl-5' />
                </div>
            </div>
            <div className='mt-9'>
               <a href='/'> <button className='w-[29.8rem] h-[3.6rem] bg-red-600 rounded text-white' >Log in</button></a>
                <div>
                    <p className='font-thin ml-3'>For further support, you may visit the Help Center or contact our <br></br>customer service team.</p>
                </div>
            </div>
            </form>
        </section>
    </div>
  )
}
