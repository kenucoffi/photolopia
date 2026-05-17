"use client"
import Link from 'next/link'
import React from 'react'
import { Searchuser } from '../Photographers_List/Search'
const Shortcuts = () => {
  const issearch =Searchuser()
  return (

    <>
    <div className="hidden lg:block">
        <div className="flex flex-row space-x-3">
            <p className="font-bold  cursor-pointer hover:text-blue-300 py-1 px-2 rounded-2xl hover:bg-white"><Link href="/">Home</Link></p>
            <p className="font-bold  cursor-pointer hover:text-blue-300 py-1 px-2 rounded-2xl hover:bg-white" onClick={() => {issearch.Notsearch()}}><Link href='/photographers'>Photographers</Link></p>
            <p className="font-bold  cursor-pointer hover:text-blue-300 py-1 px-2 rounded-2xl hover:bg-white">Packege </p>
        </div>
    </div>
    {/* <div className="lg:hidden items-center">
            <select className=" font-bold">
                <option value="text" className="  font-bold bg-gray-200">Home</option>
                <option value="text" className="  font-bold bg-gray-200">Galleries</option>
                <option value="text" className="  font-bold bg-gray-200">Galleries</option>
            </select>

        </div> */ }
    </>
  )
}

export default Shortcuts
