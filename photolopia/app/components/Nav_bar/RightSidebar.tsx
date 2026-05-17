import { User } from '@deemlol/next-icons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SugestFolow from '../follow_sugestion/SugestFolow'
import { suggest_follow } from '@/app/Modula/utils/auth'

interface Userinfo{
    id:string
    name:string
    speciality:string
}

const RightSidebar = () => {
    const [user,setUser] = useState<Userinfo | null>(null)
    useEffect(()=>{
       async function Suggest(){
            const users = await suggest_follow()
            if(users){
                setUser(users)
            }
        }
        Suggest()
    },[])
  if(user){
  return (
    <div className='hidden lg:block'>
        <div className="fixed top-19 lg:right-8  lg:w-[20%] px-2   py-10    bg-gray-100/80 backdrop-blue-md shadow-xl shadow-blue-300   ">
                <h1>Suggestion follow</h1>
                <div className="flex flex-col border-l  border-gray-200">
                    {Array.isArray(user) && user.slice(0,4).map((index:Userinfo,key)=>{
                        return <SugestFolow key={key} name={index.name} id={index.id} speciality={index.speciality}/>
                    })}
                </div>
            </div>
        </div>
  )}
}

export default RightSidebar
