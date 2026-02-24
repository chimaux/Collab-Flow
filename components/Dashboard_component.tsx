"use client"
import React from 'react'
import { User } from '@supabase/supabase-js'

interface userProps {
     user: User | null
}

const Dashboard_component = ({user}:userProps) => {
  return (
 <div>
        <div>Uer email:{user?.email}</div>
        <div>Uer UID: {user?.id}</div>
    </div>
  )
}

export default Dashboard_component