import { User } from '@deemlol/next-icons'
import Link from 'next/link'
import React from 'react'
import { Url } from 'url'

interface SugestProp{
    name:String,
    link:String

}
const SugestFolow:React.FC<SugestProp> = ({name ,link}) => {
  return (
    <div className=" flex flex-col my-2 px-4">
        <div className="flex flex-row ">
            <div className="px-2 py-2 btn btn-circle items-center"><User size={24}/></div>
            <Link href='${link}' className="font-light hover:text-blue-300"> {name}</Link>
        </div>
        <div className="w-[50%] justify-self-center px-2 py-2 bg-blue-300 text-white rounded-2xl hover:bg-blue-400 cursor-pointer">follow</div>
    </div>
  )
}

export default SugestFolow
