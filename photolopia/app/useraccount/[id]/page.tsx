'use client'
import React from 'react'
import { users } from '@/app/users'
import Image from 'next/image'
import UserPage from '@/app/components/dynamic_page/UserPage'
import { List } from '@deemlol/next-icons'
import { postimage } from '@/app/imagepost'
import Post from '@/app/components/showProfileLists/Post'
import EventList from '@/app/components/showProfileLists/EventList'
import ShowProfile from '@/app/components/showProfileLists/ShowProfile'
interface Props{
    params:{id:String}
}
 
 const detail_page = ({params}:Props) => {
   const user = users.find((u) => u.id == params.id)
   if (!user){
    return (<div>user not found</div>)
   }
  return (
    <>
      <UserPage name={user.name} image={user.image} profile={user.profile} porfolio={user.porfolio} about={user.about} city={user.city}/>
     <EventList/>
     <ShowProfile/>
      
    </>
    
  )
}

export default detail_page
