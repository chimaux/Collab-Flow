"use client"
import React, { useState } from 'react'
import { User } from '@supabase/supabase-js'
import { createSupabaseServerClient } from '@/lib/supabase/server-client'
import { useRouter } from 'next/navigation'
import { Button } from 'antd'

interface userProps {
     user: User | null
}

const [loader, setLoader] = useState<boolean>(false);

const route = useRouter()
async function handleSignOut(){
  setLoader(true);
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  route.push("/auth/login")
  setLoader(false)
}

const Dashboard_component = ({user}:userProps) => {
  return (
 <div>
        <div>Uer email:{user?.email}</div>
        <div>Uer UID: {user?.id}</div>
        <Button name='Sign out' onClick={handleSignOut}  loading={loader} />
    </div>
  )
}

export default Dashboard_component