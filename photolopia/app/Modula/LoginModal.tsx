"use client"
import React from 'react'
import Modula from './Modula'
import { useLoginModal } from './hooks/LoginShow'

const LoginModal = () => {
    const login = useLoginModal()
   const content= (
    <form className="space-x-3">
        <input placeholder=' Email' type="email" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl"/>
        <input placeholder=' Password' type="email" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl"/>
        <div className="flex justify-center px-3 py-3 m-3 rounded-2xl bg-green-300 text-white w-[90%]">Submit</div>
    </form>
    )
  return (
    <div>
      <Modula content={content} label="Log In" isOpen={login.isOpen} close={login.close}/>
    </div>
  )
}

export default LoginModal
