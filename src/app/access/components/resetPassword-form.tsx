"use client"
import { useState } from 'react';

const ResetPasswordForm = () => {

    const [email, setEmail] = useState('');

    const ResetButton =() => {    
        
        return (
            <div className='pt-6 flex justify-center items-center'>
                <button 
                    className=" px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 hover:to-blue-700 transition ease-in text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl duration-200"
                    type='submit' 
                >
                    Reset
                </button>
            </div>
        )
    };
    

    return ( 
        <form action="">
            <div className='relative gap-2 pt-4 flex flex-col '>
                <div className='flex items-center justify-center'>
                    <input 
                            type="text" 
                            value={email} 
                            onChange={e => { setEmail(e.currentTarget.value); }}
                            placeholder='Email' 
                            required
                            className='text-black px-5 py-2 text-base font-light rounded-full w-full bg-white'
                    />
                </div>
            </div>
            <ResetButton />
            <div className='h-[8rem]'>

            </div>
            
        </form>
     );

    
}
 
export default ResetPasswordForm;