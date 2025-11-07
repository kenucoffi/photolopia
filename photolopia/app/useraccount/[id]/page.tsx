

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
import { getSingle } from '@/app/users'
interface Props{
    params:{id:String}
}


 const detail_page = async({ params }: Props ) => {
  const id = await params
  const user= await getSingle(String(id.id))
  return (
    <>
      <UserPage first_name={user.user.first_name} last_name={user.user.last_name} big_profile_image={user.big_profile_image} profile_image={user.profile_image} speciality={user.speciality} bio={user.bio} location={user.location}/>
     <EventList/>
     {/* <ShowProfile/> */}
      
    </>
    
  )
}

export default detail_page
