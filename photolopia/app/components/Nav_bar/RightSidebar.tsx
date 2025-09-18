import { User } from '@deemlol/next-icons'
import Link from 'next/link'
import React from 'react'
import SugestFolow from '../follow_sugestion/SugestFolow'

const RightSidebar = () => {
  return (
    <div className='hidden lg:block'>
        <div className="fixed top-19 lg:right-8  lg:w-[20%] px-2   py-10 h-[75%] z-50  bg-gray-100/80 backdrop-blue-md shadow-xl shadow-blue-300   ">
                <h1>Suggestion follow</h1>
                <div className="flex flex-col border-l  border-gray-200">
                    <SugestFolow name="kenu owner" link='/'/>
                    <SugestFolow name="abenu" link='/'/>
                    <SugestFolow name="besu" link='/'/>
                </div>
            </div>
        </div>
  )
}

export default RightSidebar
