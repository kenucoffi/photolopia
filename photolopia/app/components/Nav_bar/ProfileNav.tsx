"use client"
import React, { use, useState } from 'react'
import { User } from '@deemlol/next-icons'
import UserClick from './Usernav'
import { useSignupModal } from '@/app/Modula/hooks/SignupShow'
import { useLoginModal } from '@/app/Modula/hooks/LoginShow'
const ProfileNav = () => {
  const [open,setOpen] = useState(false)
  const login = useLoginModal()
  const signup = useSignupModal()
  return (
    <>
    <div className='hidden md:block'>
    <div className="flex flex-row items-center ">
        <div onClick={login.open} className="px-2 py-1 cursor-pointer font-bold rounded-xl hover:text-blue-300 hover:bg-white">
            Log In
        </div>
        <div onClick={signup.open} className="px-2 py-1 cursor-pointer font-bold rounded-xl hover:text-blue-300 hover:bg-white">
            Sign Up
        </div>
    </div>
    </div>
    <div className='md:hidden'>
      <div onClick={() => { setOpen(!open)}} className='btn btn-circle px-3 py-3'>
        <User size={30}/>
      </div>
      { open && (
        <div className='flex flex-col right-1 absolute  top-18 bg-gray-100'>
          <UserClick user="Log In" onClick={login.open}/>;
          <UserClick user="Sign Up" onClick={signup.open}/>;
        </div>
      ) }
      </div>
    </>
  )
}

export default ProfileNav
