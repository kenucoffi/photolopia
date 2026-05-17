"use client"
import React from 'react'
import Image from 'next/image'
import { PenTool ,Edit, Edit2, Edit3, User } from '@deemlol/next-icons'

import { Clientglob } from '../Modula/hooks/clientglob'
interface UsersInfo{
    first_name:string
    last_name:string
    phone:string
    location:string
} 
const ClientProfile:React.FC<UsersInfo> = ({phone,first_name,last_name,location}) => {
  
  const user_info = Clientglob()

  function handleUserInfo(){
    user_info.Open()
  }
    
  
  return (
    <div className='grid grid-cols-1 ml-18 md:ml-2 h-[500px] border border-blue-300 shadow-lg rounded-xl shadow-blue-200'>
          <div className='flex flex-col'>
            <div className='relative overflow-auto col-span-1 h-[20%]  rounded-xl object-center bg-gray-300 hover:bg-gray-400 aspect-square blur-none '></div>
            <div className='ml-10 border-4 border-blue-300 p-16 btn btn-circle  mt-[-60px] z-50'><div className="relative overflow-auto  p-15 btn btn-circle"><User className="absolute object-center w-full h-full"/></div></div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div className='relative col-span-2 flex flex-col ml-5 col-span-1 mr-4'>
                  <div className='absolute right-0 top-2' onClick={handleUserInfo}><Edit2  size={25} className=" text-green-500 hover:text-blue-500 cursor-pointer"/></div>
                  <h1 className='mt-3 text-md md:text-xl font-semibold tracking-wider '>{first_name} {last_name}</h1>
                  <p className='mt-2 font-serif text-sm md:text-lg '>phone : {phone}</p>
                  <p className='mt-2 front-light text-sm md:text-sm text-blue-300'>{location}</p>
                </div>
            </div>
          </div>
          
        </div>
  )
}

export default ClientProfile
