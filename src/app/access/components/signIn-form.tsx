"use client"
import { useState } from 'react';

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

//import { emailSignIn } from '../actions';
import OAuthButtons from './oath-buttons';


const SignInForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    const LoginButton =() => {    
    
        return (
            <div className='pt-6 flex justify-center items-center'>
                <button 
                    className=" px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 hover:to-blue-700 transition ease-in text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl duration-200"
                    //formAction={emailSignIn}
                >
                    Sign In
                </button>
            </div>
        )
    };
    

    return ( 
        <form action="" >
            <div className='relative gap-2 pt-4 flex flex-col '>
                <div className='flex items-center justify-center'>
                    <input 
                        id="email" 
                        name="email"
                        type="email" 
                        value={email} 
                        onChange={e => { setEmail(e.currentTarget.value); }}
                        placeholder='Email' 
                        required
                        className='text-black px-5 py-2 text-base font-light rounded-full bg-white w-full'
                    />
                </div>
                <div className='flex items-center justify-center relative'>
                    <input 
                        id="password" 
                        name="password"
                        type={`${isPasswordVisible ?"text": "password" }`} 
                        value={password}
                        onChange={e => { setPassword(e.currentTarget.value); }}
                        onCopy={(e) => e.preventDefault()} 
                        
                        placeholder='Password' 
                        className='text-black px-5 py-2 text-base font-light rounded-full bg-white w-full' 
                    />
                    <button id="passwordField" type='button' className='absolute top-[50%] right-4 translate-y-[-50%] text-gray-500 hover:text-gray-800 ' onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? <FaRegEye size={20}/> : <FaRegEyeSlash size={20}/>}
                    </button>
                </div>
            </div>
            {error && <p className='text-red-500 text-sm text-center font-light mt-2'>{error}</p>}
            <LoginButton />
            <OAuthButtons text='or sign in with' />
            
        </form>
     );
}
 
export default SignInForm;