
"use client"
import { FcGoogle } from "react-icons/fc";
//import { RiGithubFill } from "react-icons/ri";
//import { oAuthSignIn } from "@/app/access/actions";
import { Provider } from "@supabase/supabase-js";
import { JSX } from "react";


type OAuthProvider = {
    name: Provider;
    displayName: string;
    icon: JSX.Element;
}


const OAuthButtons = ({
    text,
}:{
    text: string;
}) => {

    const oAuthProviders: OAuthProvider[] = [{
        name: 'google',
        displayName: 'Google',
        icon: <FcGoogle  size={20} className='mr-2'/> 
    },
    /*{
        name: 'github',
        displayName: 'Github',
        icon: <RiGithubFill size={20} className='mr-2'/> 
    }*/
]


    return ( 
        <>
            <div className='mt-2 mb-6 '>
                <div className='relative flex flex-row items-center justify-center py-4 gap-2'>
                    <div className=' opacity-50  border-white border-[0.5px] w-full'></div>
                    <p className='flex-none w-fit opacity-85'>
                        {text}
                    </p>
                    <div className=' opacity-50 border-white border-[0.6px] w-full'></div>
                </div>
                
                <div className=' flex items-center justify-center gap-4'>
                    {oAuthProviders.map((provider) => (
                        <button 
                            type="button"
                            key={provider.name} 
                            className='flex items-center bg-[#fafcff] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#d5d5d5] transition duration-100 ease-in'
                            onClick={async () => {
                                //await oAuthSignIn(provider.name);
                            }}
                        >
                            {provider.icon} {provider.displayName}
                        </button>
                    ))}
                </div>
            </div>
        
        </>
     );
}
 
export default OAuthButtons;