"use client"
import React from 'react'
import Modula from './Modula'
import { UserLogout } from './hooks/logout'
import {useState} from "react"
import {loginUser} from './utils/auth'
import { useLoginModal } from './hooks/LoginShow'
import { Change } from './hooks/change'
import { useRouter } from 'next/navigation'

const LoginModal = () => {
  const router = useRouter()
  const change = Change()
  const logout = UserLogout()
  const handlesubmit = async(e:any) =>{
    e.preventDefault()
    if (email == "" || password == ""){
      return
    }
    try{
      const  response = await loginUser({email,password})
      
      if(await response.status == 200){
        logout.IsLogin()
        change.Changed()
        alert("IsAuthentication is now true")
        router.refresh()
      }
    }
    catch{
      alert("Autentication Error")
      return 
    }
    
  }
   const [email,setEmail] = useState("") 
   const [password,setPassword] = useState("")
   const login = useLoginModal()
   const content= (
    <form className="space-x-3" onSubmit={handlesubmit}>
        <input onChange={(e)=>{setEmail(e.target.value)}} placeholder=' Email' type="email" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl"/>
        <input onChange={(e)=>{setPassword(e.target.value)}} placeholder=' Password' type="password" className="w-[90%] p-3 m-3 bg-gray-100 rounded-xl"/>
        <input type="submit" placeholder="Submit" className="flex justify-center px-3 py-3 m-3 rounded-2xl bg-green-300 text-white w-[90%] cursor-pointer hover:bg-green-900"/>
    </form>
    )
  return (
    <div>
      <Modula content={content} label="Log In" isOpen={login.isOpen} close={login.close}/>
    </div>
  )
}

export default LoginModal
