"use client"
import { FormEvent, FormEventHandler, useState } from 'react';

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { signup } from '@/app/access/actions';
import { toast } from "react-toastify";



const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const [error, setError] = useState('');
    const [isPending, setIsPending] = useState(false);


    const handleSubmit = async (event : any) => {
        event.preventDefault();
        if(password !== confirmPassword){
            return setError('Entered password does not match');
        }
        setError('') 
        signup(new FormData(document.getElementById('signup_form') as HTMLFormElement));
        
        toast('Please check your email for verification', {type: 'success'});
        
    }

    const RegisterButton =() => {   
        return (
            <div className='my-6 flex justify-center items-center'>
                <button 
                    className=" px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 hover:to-blue-700 transition ease-in text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl duration-200"
                    aria-disabled={isPending}
                    onClick={handleSubmit}
                >
                    {'Sign Up'}
                </button>
            </div>
        )
    };
    

    return ( 
        <form id='signup_form' >
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

                <div className='flex flex-col items-center gap-2'>
                    <div className='relative w-full'>
                        <input 
                            id="password" 
                            name="password"
                            value={password}
                            onChange={e => { setPassword(e.currentTarget.value); }}
                            type={`${isPasswordVisible ?"text": "password" }`} 
                            onCopy={(e) => e.preventDefault()} 
                            required
                            placeholder='Password' 
                            className='text-black px-5 py-2 text-base font-light rounded-full bg-white w-full' 
                        />
                        <button 
                            id="passwordField" 
                            type='button' 
                            className='absolute top-[50%] right-4 translate-y-[-50%] text-gray-500  hover:text-gray-800 ' 
                            onClick={()=> (setIsPasswordVisible(!isPasswordVisible))}
                        >
                            {isPasswordVisible ? <FaRegEye size={20}/> : <FaRegEyeSlash size={20}/>}
                        </button>
                    </div>
                    <div className='relative w-full'>
                        <input 
                            value={confirmPassword}
                            onChange={e => { setConfirmPassword(e.currentTarget.value); }}
                            type={`${isConfirmPasswordVisible ?"text": "password" }`} 
                            onCopy={(e) => e.preventDefault()} 
                            required
                            placeholder='Confirm Password' 
                            className='text-black px-5 py-2 text-base font-light rounded-full bg-white w-full' 
                        />
                        <button 
                            id="confrimPasswordField" 
                            type='button' 
                            className='absolute top-[50%] right-4 translate-y-[-50%] text-gray-500 hover:text-gray-800 ' 
                            onClick={()=> (setIsConfirmPasswordVisible(!isConfirmPasswordVisible))}>
                            {isConfirmPasswordVisible ? <FaRegEye size={20}/> : <FaRegEyeSlash size={20}/>}
                        </button>
                    </div>
               </div>
            </div>
            {error && <p className='text-red-500 text-sm text-center font-light mt-2'>{error}</p>}
            <RegisterButton />
        </form>
     );

    
}
 
export default SignUpForm;