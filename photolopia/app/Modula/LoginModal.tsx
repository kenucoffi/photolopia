"use client"
import React from 'react'
import Modula from './Modula'
import { UserLogout } from './hooks/logout'
import {useState} from "react"
import {loginUser} from './utils/auth'
import { useLoginModal } from './hooks/LoginShow'

const LoginModal = () => {
  const logout = UserLogout()
  const handlesubmit = async(e:any) =>{
    e.preventDefault()
    if (email == "" || password == ""){
      return
    }
    try{
      await loginUser({email,password})
    }
    catch{
      return 
      alert("Autentication Error")
    }
    logout.IsLogin()
  }
   const [email,setEmail] = useState("") 
   const [password,setPassword] = useState("")
   const login = useLoginModal()
   const content= (
    <form className="space-x-3" onSubmit={handlesubmit}>
        <input onChange={(e)=>{setEmail(e.target.value)}} placeholder=' Email' type="email" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl"/>
        <input onChange={(e)=>{setPassword(e.target.value)}} placeholder=' Password' type="password" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl"/>
        <input type="submit" placeholder="Submit" className="flex justify-center px-3 py-3 m-3 rounded-2xl bg-green-300 text-white w-[90%]"/>
    </form>
    )
  return (
    <div>
      <Modula content={content} label="Log In" isOpen={login.isOpen} close={login.close}/>
    </div>
  )
}

export default LoginModal
