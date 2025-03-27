import Header from "@/app/components/header";
import { redirect } from 'next/navigation'
import { createClient } from '@/app/utils/supabase/server'
import { logout } from "../logout/action";


const Page = async () => {
    const supabase = await createClient()
    
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/access')
    }
    
 
    return (
        <div className="w-full h-[100vh] ">
            <div className="py-4 px-2">
                <Header user={data.user.email!} onLogout={logout}/>
                <div className="flex justify-center items-center h-full">
                    <p className="text-2xl">Welcome to the dashboard!</p>
                </div>
            </div>
        </div>
      );
}
 
export default Page;