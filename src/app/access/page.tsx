'use client'
import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isLogin, setIsLogin] = useState(true);

    const updateState = () => {
        setIsLogin(!isLogin);
    }


    return ( 
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className=" container flex justify-center items-center">
                <div className=" w-96 py-16 bg-gray-200 rounded-lg flex justify-center items-center flex-col gap-4">
                    
                    {isLogin ? (
                    <form action="" className='flex flex-col items-center gap-2'>
                        <b className='text-black  text-3xl'>Sign-in</b>
                        <input className="bg-black p-2 rounded-md" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input className="bg-black p-2 rounded-md" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button className='bg-black py-2 px-6 rounded-md' type="submit">Sign-in</button>
                        
                        
                    </form>
                    ) : (
                        <form action="" className='flex flex-col items-center gap-2'>
                        <b className='text-black  text-3xl'>Sign-up</b>
                        <input className="bg-black p-2 rounded-md" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input className="bg-black p-2 rounded-md" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <input className="bg-black p-2 rounded-md" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button className='bg-black py-2 px-6 rounded-md' type="submit">Sign-up</button>
                        
                    </form>
                    )}
                    <button className='text-black' type="button" onClick={updateState}>{isLogin? "Don't have an Account yet?" :"Already have an Account?"}</button>
                </div>
            </div>
        </div>
     );
}
 
export default Login;