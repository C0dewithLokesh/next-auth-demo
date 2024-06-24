"use client"

import { signIn, signOut } from 'next-auth/react'
import React from 'react'

const AppBar = () => {
  return (
    <div className='flex items-center gap-5'>
      <button className='border p-5' onClick={() => signIn()}>
        Sign In
      </button>
      <button className='border p-5' onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  )
}

export default AppBar