import React from 'react'
import Image from 'next/image'
interface UsersInfo{
    name:String
    image:String
    profile:String
    about:String
    porfolio:String
    city:String
} 
const UserPage:React.FC<UsersInfo> = ({image,about,porfolio,profile,name,city}) => {
  return (
    <div className='grid grid-cols-1 ml-18 md:ml-2 h-[500px] border-b border-blue-200 shadow-lg'>
          <div className='flex flex-col'>
            <div className='relative overflow-auto col-span-1 h-[20%]  rounded-xl object-center aspect-square blur-none '><Image src={'/'+image} alt='image' fill/></div>
            <div className='ml-10 border-4 border-blue-300 p-16 btn btn-circle  mt-[-60px] z-50'><div className="relative overflow-auto  p-15 btn btn-circle">< Image src= {'/' + profile} alt='profie' fill/></div></div>
            <div className="grid grid-cols-2">
                <div className='flex flex-col ml-5 col-span-1 mr-4'>
                  
                  <h1 className='mt-3 text-md md:text-xl font-semibold tracking-wider '>{name}</h1>
                  <p className='mt-2 font-serif text-sm md:text-lg '>{porfolio}</p>
                  <p className='mt-2 front-light text-sm md:text-sm text-blue-300'>{city}</p>
                </div>
                <div className="col-span-1 flex flex-col">
                   <h1 className="text-md md:text-xl font-bold flex justify-center"> About</h1>
                   <p className="ml-2 font-light text-xs sm:text-sm overflow-scroll mt-2">{about}</p>
                </div>
            </div>
          </div>
          
        </div>
  )
}

export default UserPage
