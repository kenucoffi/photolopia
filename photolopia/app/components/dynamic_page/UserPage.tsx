import React from 'react'
import Image from 'next/image'
import { Eye, User } from '@deemlol/next-icons'
import { Detail } from '@/app/Modula/hooks/detail'
interface UsersInfo{
    first_name:String
    last_name:String
    big_profile_image:String
    profile_image:String

    speciality:String
    location:String
} 
const UserPage:React.FC<UsersInfo> = ({big_profile_image,speciality,profile_image,first_name,last_name,location}) => {
  const detail = Detail()
  function handleUserInfo(){
    detail.Open()
  }
  return (
    <div className='grid grid-cols-1 col-span-2 ml-18 md:ml-2 h-[500px] border border-blue-300 shadow-lg rounded-xl shadow-blue-200'>
          <div className='flex flex-col'>
            <div className='relative overflow-auto col-span-1 h-[20%]  rounded-xl object-center aspect-square bg-gray-300 hover:bg-gray-400 blur-none '>{big_profile_image?<img src= {'http://localhost:8000/' + big_profile_image} alt='profie' className="absolute object-center w-full h-full"/>:null}</div>
            <div className='ml-10 border-4 border-blue-300 p-16 btn btn-circle  mt-[-60px] z-50'><div className="relative overflow-auto  p-15 btn btn-circle">{profile_image?< img src= {'http://localhost:8000/' + profile_image} alt='profie' className="absolute object-center w-full h-full"/>:<User className="absolute object-center w-full h-full"/>}</div></div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <div className='relative col-span-2 flex flex-col ml-5 col-span-1 mr-4'>
                  <div className='absolute right-0 top-2' onClick={handleUserInfo}><Eye  size={25} className=" text-green-500 hover:text-blue-500 cursor-pointer"/></div>
                  <h1 className='mt-3 text-md md:text-xl font-semibold tracking-wider '>{first_name} {last_name}</h1>
                  <p className='mt-2 font-serif text-sm md:text-lg '>{speciality}</p>
                  <p className='mt-2 front-light text-sm md:text-sm text-blue-300'>{location}</p>
                </div>
            </div>
          </div>
          
        </div>
  )
}

export default UserPage
