"use client"
import { Detail } from '@/app/Modula/hooks/detail'
import Modula from '@/app/Modula/Modula'
import { user_basic_info } from '@/app/Modula/utils/auth'
import React, { useEffect, useState } from 'react'
interface UserInfo{
    first_name:string
    last_name:string
    email:string
    username:string
    speciality:string
    instagram:string
    phone:string
    location:string
}
interface UserId{
    id:string
}
const DetailPage = () => {
    const [user,setUser]=useState<UserInfo | null>(null)
    const detail = Detail()
    useEffect(()=>{
        async function Userfun(){
            const user = await user_basic_info({id:detail.id})
            if(user){
                setUser(user)
            }
        }
        Userfun()
        console.log("now i "+detail.id)
    },[detail.id])
    const content =(
        <div className="flex flex-col  px-4 py-3">
            <div className="grid grid-cols-2 space-y-3">
                <h1 className="text-lg col-span-1 font-medium  text-indigo-900">Name</h1>
                <h2 className="text-lg col-span-1 font-light text-indigo-500">{user?user.first_name:null} {user?user.last_name:null}</h2>
                <h1 className="text-lg col-span-1 font-medium text-indigo-900">Username</h1>
                <h2 className="text-lg font-light text-indigo-500">{user?user.username:null} </h2>
                <h1 className="text-lg col-span-1 font-medium text-indigo-900">email</h1>
                <h2 className="text-lg col-span-1 font-light text-indigo-500">{user?user.email:null} </h2>
                <h1 className="text-lg col-span-1 font-medium text-indigo-900">Phone</h1>
                <h2 className="text-lg col-span-1 font-light text-indigo-500">{user?user.phone:null} </h2>
                <h1 className="text-lg col-span-1 font-medium text-indigo-900">Speciality</h1>
                <h2 className="text-lg col-span-1 font-light text-indigo-500">{user?user.speciality:null} </h2>
                <h1 className="text-lg col-span-1 font-medium text-indigo-900">Instagram</h1>
                <h2 className="text-lg col-span-1 font-light text-indigo-500">{user?user.instagram:null} </h2>
                <h1 className="text-lg col-span-1 font-medium text-indigo-900">Location</h1>
                <h2 className="text-lg col-span-1 font-light text-indigo-500">{user?user.location:null} </h2>
            </div>
        </div>
    )
  return (
    <div>
      <Modula isOpen={detail.isOpen} close={detail.close} label='Basic Info' content={content} />
    </div>
  )
}

export default DetailPage
