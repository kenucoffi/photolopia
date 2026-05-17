"use client"
import { User } from '@deemlol/next-icons'
import Link from 'next/link'
import React, { useState } from 'react'
import { Url } from 'url'

interface SugestProp{
    name:string
    id:string
    speciality:string
}
const SugestFolow = ({name ,id,speciality}:SugestProp) => {

  return (
    <div className=" flex flex-col my-2 px-4">
        <div className="flex flex-row ">
            <div className="px-2 py-2 btn btn-circle items-center"><User size={24}/></div>
            <div className="flex flex-col">
              <Link href={'/useraccount/'+id} className="font-light hover:text-blue-300"> {name}</Link>
              <p className='text-gray-700'>{speciality?speciality.slice(0,13)+"...":speciality}</p>
            </div>
        </div>
        <div className="flex justify-center"><div className=" w-[50%] text-center  px-4 py-1 bg-white text-blue-400  rounded-2xl hover:bg-gray-300 cursor-pointer">+follow</div></div>
    </div>
  )
}

export default SugestFolow
