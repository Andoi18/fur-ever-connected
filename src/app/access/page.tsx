'use client'
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import {useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

const Access = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const router = useRouter();

    const [isLogin, setIsLogin] = useState(true);

    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const states = {
        signIn: {
            label: "Sign-in",
            switchLabel: "Don't have an Account yet?"
        },
        signUp: {
            label: "Sign-up",
            switchLabel: "Already have an Account?"
        }
    }

    const updateState = () => {
        setIsLogin(!isLogin);
    }

    const handleSignIn = async () => {
        console.log('Sign-in');
        try{
            const res = signInWithEmailAndPassword(email, password);
            console.log(res);
            setEmail('');
            setPassword('');
            console.log('Sign-in Successful');
            router.push('/dashboard');
        }
        catch(err){
            console.log(err);
        }
    }

    const handleSignUp = async () => {
        try{
            const res = await createUserWithEmailAndPassword(email, password);
            console.log(res);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            console.log('Sign-up Successful');
        }
        catch(err){
            console.log(err);
        }

        
    }


    return ( 
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className=" container flex justify-center items-center">
                <div className=" w-96 py-16 bg-gray-200 rounded-lg flex justify-center items-center flex-col gap-4">
                    
                    <div className='flex flex-col items-center gap-2'>
                        <b className='text-black  text-3xl'>{isLogin? states.signIn.label : states.signUp.label}</b>
                        <input className="bg-black p-2 rounded-md" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <div className='w-full'>
                            <input className="bg-black p-2 rounded-md" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            {isLogin? 
                                <div className='flex justify-end w-full'>
                                    <button className='text-black text-sm'>Forgot Password?</button>
                                </div> : 
                                null 
                            }
                        </div>
                        {isLogin? 
                            null
                            : 
                            <input className="bg-black p-2 rounded-md" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        }
                        <button className='bg-black w-full py-2 text-sm rounded-md' onClick={isLogin? handleSignIn : handleSignUp} >
                            {isLogin? states.signIn.label : states.signUp.label}
                        </button>
                    </div>

                    <div className='flex flex-row items-center gap-2'>
                        <span className='border border-solid border-black px-10'></span>
                        <b className='text-black'>OR</b>
                        <span className=' border border-solid border-black px-10'></span>
                    </div>

                    <button className='bg-black p-2 text-sm rounded-md flex justify-center items-center gap-2'>
                        <FaGoogle className='text-white' />
                        <b className='text-white'>{isLogin? states.signIn.label : states.signUp.label } with Google</b>
                    </button>
                    


                    <button className='text-black text-sm' type="button" onClick={updateState}>{isLogin? states.signIn.switchLabel: states.signUp.switchLabel}</button>
                </div>
            </div>
        </div>
     );
}
 
export default Access;