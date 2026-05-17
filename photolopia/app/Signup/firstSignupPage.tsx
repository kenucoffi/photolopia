"use client"
import React from 'react'
import { useState } from 'react'
import {register} from '@/app/Modula/utils/auth'
const FirstSignupPage = () => {
    
    const [first_name ,setFirst_name] = useState("")
    const [last_name ,setLast_name] = useState("")
    const [email ,setEmail] = useState("")
    const [username ,setUser_name] = useState("")
    const [password ,setPassword] = useState("")
    const [user_type,setUser_type] = useState("")
    const [response,setResponse] = useState("")

    async function hundleSubmit(e:any){
        e.preventDefault()
        try{
            const response =  await register({username,email,password,first_name,last_name,user_type})
            setResponse(response)
        }
        catch(e){
            alert(e.message)
        }
    }

    return(
    <> 
    <div className="flex sm:w-[600px] w-[500px] ml-5 sm:px-2 flex-col h-full justify-center items-center ">
      <h1 className="flex items-center  justify-center w-full text-blue-500 text-2xl font-bold my-5">Sign Up</h1>
      <hr className="w-[500px] font-bold my-5"/>
        {response != null ? response : null }
        <form className="space-y-4" onSubmit={hundleSubmit} method="POST">
            <div className="flex flex-row space-x-4">
                <div>
                    <label className="text-lg">First Name</label><br/>
                    <input type="text" onChange={(e)=>setFirst_name(e.target.value)} name="first_name" className="w-full xsm:[45%] border py-2 px-2 rounded-xl" placeholder="First Name"/>                    
                </div>
                <div>
                    <label className="text-lg">Last Name</label><br/>
                    <input type="text" onChange={(e)=>setLast_name(e.target.value)} name="last_name" className="w-full border xsm:[45%] py-2 px-2 rounded-xl" placeholder="Last Name"/>                    
                </div>
            </div>
            <div className="flex flex-row space-x-4">
                <div>
                    <label className="text-lg">Unique Name</label><br/>
                    <input type="text" onChange={(e)=>setUser_name(e.target.value)} name="username" className="w-full xsm:[45%] rounded-xl border py-2 px-2" placeholder="Unique Name"/>                    
                </div>
                <div>
                    <label className="text-lg">Email Name</label><br/>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" className="w-full xsm:[45%] rounded-xl border py-2 px-2" placeholder="Email"/>                    
                </div>
            </div>
            <div>
                <label className="text-lg">Password</label><br/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" className="w-full xsm:[90%] rounded-xl border py-2 px-2" placeholder="Password"/>                    
            </div>
            <div className="w-full">
                <label className="text-lg">Are You</label><br/>
                <select name="user_type" onChange={(e)=>setUser_type(e.target.value)} className="w-full rounded-xl border py-2 px-2">
                    <option value="">Choose</option>
                    <option value="photographer">Photographer</option>
                    <option value="client">Client</option>
                </select>                    
            </div>
            <div className="w-full flex items-center justify-center">
                <button type="submit" className="text-center  rounded-xl text-white px-5 py-2 bg-green-700 hover:bg-blue-400 cursor-pointer">create my account</button>
            </div>
        </form>
      
    </div>
    </>
  )

}
  


export default FirstSignupPage
