"use client"
import SignInForm from './signIn-form';
import SignUpForm from './signUp-form';
import ResetPasswordForm from './resetPassword-form';

import { FaArrowLeft } from 'react-icons/fa';

import { useState } from 'react';



const Content = () => {

    const [state, setState] = useState("login");

    const states = [
        {name:"login", title: "Sign in", form: <SignInForm />, text: "Don't have an account yet?", text2: "Sign up"},
        {name:"register", title: "Sign up", form: <SignUpForm/>, text: "Already have an account?", text2: "Sign in"},
        {name:"reset_password", title: "Reset Password", form: <ResetPasswordForm/>, text:"Return to", text2: ""},
    ]

    const stateHandler = () => {
        if(state === "reset_password") setState("login");
        if(state === "login") setState("register");
        if(state === "register") setState("login");
    } 



    return ( 
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className=" container flex justify-center items-center">
                <div className='flex justify-center items-center z-20'>
                    {states.map((pageState, idx) => {
                        if(pageState.name === state) return (
                        <div key={idx} className=" px-10 py-14 rounded-3xl bg-gradient-to-br from-blue-800 to-blue-950 relative gap-2 ">
                            <a href="/" className='absolute top-4 right-4 flex justify-center items-center gap-2 opacity-60 hover:opacity-80 text-xs font-light hover:underline '>Return to homepage <FaArrowLeft size={16}/></a>
                            <div className='text-center'>
                                <h1 className='font-bold text-3xl'>
                                    {pageState.title}
                                </h1>
                            </div>
                                {pageState.form}
                            <div>
                                <div className='flex justify-center items-center'>
                                    <button className='text-white pt-4' 
                                        onClick={stateHandler}
                                    >
                                        {pageState.text} 
                                        <span className='text-blue-300 hover:text-blue-500 transition ease-in ml-1'>
                                            {state === "reset_password" ? "Sign in" : `${pageState.text2}`}
                                        </span>
                                    </button>
                                </div>
                                <p className='text-center text-white pt-2 text-sm opacity-50 hover:opacity-80'>
                                    {state === "reset_password" ? "" : <button onClick={() => setState("reset_password")}>Forgot password?</button>}
                                </p>
                            </div>
                            
                        </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
     );
}
 
export default Content;