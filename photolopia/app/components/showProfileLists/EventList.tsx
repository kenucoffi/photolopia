"use client"
import React, { useState } from 'react'
import Post from './Post'
import { List } from '@deemlol/next-icons'
import ShowProfile from './ShowProfile'
interface UserId{
  user_id:string
}
const EventList = ({user_id}:UserId) => {
    const [id,setId] = useState("1")
    
  return (
    <div className="flex ml-18 md:ml-2 flex-col mb-4 space-y-4">
     <div className="flex flex-row justify-center mt-4 ml-16 md:ml-1 ">
          <div onClick={() => {setId("1")}} className="flex flex-row mr-4 cursor-pointer">
            <List color='blue' />
            <h5 className="text-[10px] sm:text-[15px]">Post</h5>
          </div>
          <div onClick={()=> {setId("2")}}className="flex flex-row mr-4 cursor-pointer">
            <List color='blue' />
            <h5 className="text-[10px] sm:text-[15px]">Birth Day</h5>
          </div>
          <div onClick={()=> {setId("3")}} className="flex flex-row mr-4 cursor-pointer">
            <List color='blue' />
            <h5 className="text-[10px] sm:text-[15px]">Wedding</h5>
          </div>
          <div onClick={()=> {setId("4")}} className="flex flex-row mr-4 cursor-pointer">
            <List color='blue' />
            <h5 className="text-[10px] sm:text-[15px]">Others</h5>
          </div>
      </div>
      <ShowProfile id={id} user_id={user_id}/>
      </div>
  )
}

export default EventList
