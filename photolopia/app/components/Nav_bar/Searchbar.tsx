"use client"
import React, { useState } from "react"
import {Search} from "@deemlol/next-icons"
import Image from "next/image"
import { Searchuser } from "../Photographers_List/Search"
import Link from "next/link"


export default function Searchbar(){
    const issearch = Searchuser()
    function Change(e){
        issearch.setUserenter(e.target.value)
    }
    return (
        // <div className="flex flex-col">
            <div className="flex flex-row  rounded-2xl items-center bg-blue-300 ">
            
                <input placeholder="Search Photographer"  type="text" className="bg-gray-200 pl-2 rounded-2xl text-black border-5 active:border-blue-300 border-blue-300 w-full   focus:outline-none " onChange={Change}/>
                
                <div className="btn btn-circle bg-blue-300  border border-blue-400 items-center" onClick={()=>
                {
                    issearch.searched()

                }}>
                    <Link href="/photographers"><Search size={24} color="white"/></Link>
                </div>
            </div>
            /* <div className="hidden md:block">
                <div className=" flex mt-2 flex-row">
                    <div className="font-bold  px-3 cursor-pointer rounded-xl hover:text-blue-300 hover:bg-white ">Location</div>
                    <div className=" font-bold px-3 cursor-pointer rounded-xl hover:text-blue-300 hover:bg-white">rating</div>
                    <div className="font-bold px-3 cursor-pointer rounded-xl hover:text-blue-300 hover:bg-white">Event type</div>
                </div>
            </div>
            <div className="md:hidden items-center px-4">
                <div >
                    <select className="px-5 font-bold">
                    
                    <option value="text" className="  font-bold bg-gray-200">Location</option>
                    <option value="text" className="  font-bold bg-gray-200">rating</option>
                    <option value="text" className="  font-bold bg-gray-200">Event type</option>
                </select>

                </div>
                
            </div> */
            
        // </div>
    )
}