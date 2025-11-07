import React from 'react'
import Image from 'next/image'
interface UsersInfo{
    first_name:String
    last_name:String
    big_profile_image:String
    profile_image:String
    bio:String
    speciality:String
    location:String
} 
const UserPage:React.FC<UsersInfo> = ({big_profile_image,bio,speciality,profile_image,first_name,last_name,location}) => {
  return (
    <div className='grid grid-cols-1 ml-18 md:ml-2 h-[500px] border-b border-blue-200 shadow-lg'>
          <div className='flex flex-col'>
            <div className='relative overflow-auto col-span-1 h-[20%]  rounded-xl object-center aspect-square blur-none '><img src= {'http://localhost:8000' + big_profile_image} alt='profie' className="absolute object-center w-full h-full"/></div>
            <div className='ml-10 border-4 border-blue-300 p-16 btn btn-circle  mt-[-60px] z-50'><div className="relative overflow-auto  p-15 btn btn-circle">< img src= {'http://localhost:8000' + profile_image} alt='profie' className="absolute object-center w-full h-full"/></div></div>
            <div className="grid grid-cols-2">
                <div className='flex flex-col ml-5 col-span-1 mr-4'>
                  
                  <h1 className='mt-3 text-md md:text-xl font-semibold tracking-wider '>{first_name} {last_name}</h1>
                  <p className='mt-2 font-serif text-sm md:text-lg '>{speciality}</p>
                  <p className='mt-2 front-light text-sm md:text-sm text-blue-300'>{location}</p>
                </div>
                <div className="col-span-1 flex flex-col">
                   <h1 className="text-md md:text-xl font-bold flex justify-center"> About</h1>
                   <p className="ml-2 font-light text-xs sm:text-sm overflow-scroll mt-2">{bio}</p>
                </div>
            </div>
          </div>
          
        </div>
  )
}

export default UserPage
