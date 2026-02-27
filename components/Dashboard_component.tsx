"use client"
import { useState } from 'react'
import { User } from '@supabase/supabase-js'

import { useRouter } from 'next/navigation'
import { Button } from 'antd'
import { getSupabaseBrowserClient } from '@/lib/supabase/browser-client'

interface userProps {
     user: User | null
}



const Dashboard_component = ({user}:userProps) => {


const [loader, setLoader] = useState<boolean>(false);

const route = useRouter()
async function handleSignOut(){
  setLoader(true);
  const supabase =  getSupabaseBrowserClient ();
  await supabase.auth.signOut();
  route.replace("/auth/login")
 
}



  return (
 <div>
        <div>Uer email:{user?.email}</div>
        <div>Uer UID: {user?.id}</div>
      <Button 
  onClick={handleSignOut} 
  loading={loader}
>
  Sign out
</Button>
    </div>
  )
}

export default Dashboard_component