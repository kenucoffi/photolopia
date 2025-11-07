"use client"
import React from 'react'
import Modula from './Modula'
import { useState } from 'react'
import { register } from './utils/auth'
import { useSignupModal } from './hooks/SignupShow'
interface Showprops{
    ShowModal:boolean
}

const SignUpModal = () => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name,setLast_name] = useState("")
    const [user_type,setUser_type] = useState("")
    const signup = useSignupModal() 
    const handleSubmit= async(e:any) =>{
        e.preventDefault()
        if (password === "" || email==="" || first_name === "" || last_name===""){
            return
        }
        try{
            await register({email,password,first_name,last_name,user_type})
            alert("you register successfuly")
        }
        catch(e){
            alert("Oops not register")

        }
    }    
    const content=(
        <form className="space-y-3" onSubmit={handleSubmit}>
            <input placeholder='enter your First Name' onChange = {(e)=>{setFirst_name(e.target.value)}} type="text" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your Last Name' onChange = {(e)=>{setLast_name(e.target.value)}} type="text" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your email' onChange = {(e)=>{setEmail(e.target.value)}} type="email" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your password' onChange = {(e)=>{setPassword(e.target.value)}} type="password" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='re-enter password' type="password" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='user type'  onChange = {(e)=>{setUser_type(e.target.value)}} type="text" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <div className=" flex justify-center w-[90%] m-3 p-3 rounded-2xl bg-red-300 hover:bg-red-400 text-white">error submition</div>
            <input type = "submit"  className=" flex justify-center w-[90%] m-3 p-3 rounded-2xl bg-green-300 hover:bg-green-400 text-white cursor-pointer"/>
        </form>
    )
  return (
    <div>
        <Modula content={content} label="Sign Up" isOpen={signup.isOpen} close={signup.close}/>
    </div>
  )
}

export default SignUpModal
