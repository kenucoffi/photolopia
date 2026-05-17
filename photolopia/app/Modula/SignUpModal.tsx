"use client"
import React, { useEffect } from 'react'
import Modula from './Modula'
import { useState } from 'react'
import { register } from './utils/auth'
import { useSignupModal } from './hooks/SignupShow'
import { Change } from './hooks/change'
import {useRouter} from "next/navigation"

interface Showprops{
    ShowModal:boolean
}

const SignUpModal = () => {
    const change = Change()
    const router =useRouter()
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name,setLast_name] = useState("")
    const [user_type,setUser_type] = useState("")
    const [username ,setUsername] = useState("")
    const [verror,setVerror] = useState(false)
    const [response , setResponse] = useState<React.ReactElement | null | undefined>(null)
    const signup = useSignupModal() 
    const handleSubmit= async(e:any) =>{
        e.preventDefault()
        if (password === "" || email===""|| username ==="" || first_name === "" || last_name===""){
            return
        }
        try{
           const response =  await register({username,email,password,first_name,last_name,user_type})
           if(response){
            setResponse(response)
           change.Changed()
           router.push("/profile")
           }
           
        }
        catch(e){
            console.log(e)
            alert("Oops not register")
        }
    }    
     
    
    
    
    const content=(
        
        <form className="space-y-3" onSubmit={handleSubmit}>
            {response != null ? response : null}
            
            <input placeholder='enter your First Name' onChange = {(e)=>{setFirst_name(e.target.value)}} type="text" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your Last Name' onChange = {(e)=>{setLast_name(e.target.value)}} type="text" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your username ' onChange = {(e)=>{setUsername(e.target.value)}} type="text" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your email' onChange = {(e)=>{setEmail(e.target.value)}} type="email" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='enter your password' onChange = {(e)=>{setPassword(e.target.value)}} type="password" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <input placeholder='re-enter password' type="password" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" />
            <select name='user_type' value={user_type} onChange = {(e)=>{setUser_type(e.target.value)}} className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl" >
                <option value="">--are you</option>
                <option value="photographer">photographer</option>
                <option value="client">client</option>
            </select>

            <div className=" flex justify-center w-[90%] m-3 p-3 rounded-2xl bg-red-300 hover:bg-red-400 text-white">error submition</div>
            <input  type = "submit"  className=" flex justify-center w-[90%] m-3 p-3 rounded-2xl bg-green-300 hover:bg-green-400 text-white cursor-pointer"/>
        </form>
    )
  return (
    <div>
        <Modula content={content} label="Sign Up" isOpen={signup.isOpen} close={signup.close}/>
    </div>
  )
}

export default SignUpModal
