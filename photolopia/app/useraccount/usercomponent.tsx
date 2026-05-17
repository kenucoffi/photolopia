"use client"
import React from 'react'
import Image from 'next/image'
import UserPage from '@/app/components/dynamic_page/UserPage'
import { List } from '@deemlol/next-icons'
import { postimage } from '@/app/imagepost'
import Post from '@/app/components/showProfileLists/Post'
import EventList from '@/app/components/showProfileLists/EventList'
import ShowProfile from '@/app/components/showProfileLists/ShowProfile'
import {useEffect,useState,use} from "react"
import axios from "axios"

import { getSingleData } from"@/app/Modula/utils/auth" 
import { AboutPage } from '../components/dynamic_page/AboutPage'
import { Detail } from '../Modula/hooks/detail'
interface Props{
    id :string
}
const Usercomponent = ({id}:Props) => {
  const detail = Detail()
  
  const [user,setUser] = useState<any>(null)
  useEffect(()=>{
    async function getUser(){
      try{
        const response= await getSingleData({id})
        setUser(response)
        
      }
      catch(e:any){
        console.log("error"+e.message)
      } 
    }
    getUser()   
    detail.converId(id)
    console.log("i am "+detail.id)
  },[id])
  
  if (!user){
    return (<div className="items-center flex justify-center">User not found</div>)
  }
  
  return (
    <>
       {user && (<div className="flex flex-col space-y-6">
      <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-2">
         <UserPage first_name={user.user.first_name} last_name={user.user.last_name} big_profile_image={user.big_profile_image} profile_image={user.profile_image} speciality={user.speciality} location={user.location}/>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-2">
          <AboutPage bio={user.bio}/>
      </div>
      <EventList user_id={id}/>
     </div>)}
     {/* <ShowProfile/> */}
     
    </>
    
  )
}
export default Usercomponent