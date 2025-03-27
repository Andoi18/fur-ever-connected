"use client"

import Header from "@/app/components/header";



const Page = () => {

    
 
    return (
        <div className="w-full h-[100vh] ">
            <div className="py-4 px-2">
                <Header user="John Doe" onLogout={()=> {}} />
            </div>
        </div>
      );
}
 
export default Page;