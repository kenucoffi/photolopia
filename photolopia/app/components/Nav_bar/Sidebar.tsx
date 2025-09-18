"use client"
import React from 'react'
import {Menu,House,Map,PhoneCall,X} from '@deemlol/next-icons'
import Menuclick from "./Usernav.jsx"
import {useState} from 'react'
import { Searchuser } from '../Photographers_List/Search'

import Link from 'next/link.js'
export default function Sidebar(){
    const issearch = Searchuser()
    const [open,setOpen] = useState(false)
    return (
        <>
        <div className="hidden md:block">
            <div className="fixed top-18 left-0 px-10  py-10 h-[75%] z-50  bg-gray-100/80 backdrop-blue-md  overflow-y-scroll ">
                <div className="flex flex-col  my-3 ml-3">
                    <div className='lg:hidden '>
                        <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl "><Link href='/'>Home</Link></div>
                        <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl " onClick={() => {issearch.Notsearch()}}><Link href='/photographers'>Photographers</Link></div>
                        <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">packeges</div>
                    </div>
                    <hr className="my-2 lg:hidden"/>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">Location</div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">Event type</div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">rating</div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">contacts</div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">followers</div>
                </div>
            </div>
        </div>
        
        <div className="md:hidden">
            <div className="fixed top-18 left-0    h-[75%] z-50 bg-gray-100/80 backdrop-blue-md shadow-xl shadow-blue-300 ">
                <div onClick={()=>{setOpen(true)}} className="px-4 py-4 hover:bg-white hover:scale-110"><Menu size={25}/></div>
                <div className="px-4 py-4 hover:bg-white hover:scale-110"><House size={25}/></div>
                <div className="px-4 py-4 hover:bg-white hover:scale-110"><Map size={25}/></div>
                <div className="px-4 py-4 hover:bg-white hover:scale-110"><PhoneCall size={25}/></div>
            </div>
        </div>
        {open &&(
        <div className="md:hidden">
            <div className="fixed top-18 left-0 px-6  h-[75%] z-50  bg-gray-100/80 backdrop-blue-md shadow-xl shadow-blue-300   ">
                    <div onClick={() => setOpen(false)} className='ml-30 btn btn-circle items-center border-blue-300'><X size={15}/></div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl "><Link href="/">Home</Link></div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl " onClick={() => {issearch.Notsearch()}}><Link href='/photographers'>Photographers</Link></div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">packeges</div>
                    <hr className="my-2 "/>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">Location</div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">Event type</div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">rating</div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">contacts</div>
                    <div className="px-2 py-2 font-bold text-gray-500 text-lg cursor-pointer hover:bg-white hover:text-blue-300 rounded-xl ">followers</div>
                </div>
            </div>
        )}
        </>
    )
}

