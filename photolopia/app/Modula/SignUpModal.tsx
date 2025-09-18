"use client"
import React from 'react'
import Modula from './Modula'
import { useSignupModal } from './hooks/SignupShow'
interface Showprops{
    ShowModal:boolean
}
const SignUpModal = () => {
    const signup = useSignupModal() 
    const content=(
        <form className="space-y-3">
            <input placeholder='enter your First Name' type="text" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your Last Name' type="text" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your email' type="email" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your password' type="password" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='re-enter password' type="password" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <div className=" flex justify-center w-[90%] m-3 p-3 rounded-2xl bg-red-300 hover:bg-red-400 text-white">error submition</div>
            <div className=" flex justify-center w-[90%] m-3 p-3 rounded-2xl bg-green-300 hover:bg-green-400 text-white">Submit</div>
        </form>
    )
  return (
    <div>
        <Modula content={content} label="Sign Up" isOpen={signup.isOpen} close={signup.close}/>
    </div>
  )
}

export default SignUpModal
