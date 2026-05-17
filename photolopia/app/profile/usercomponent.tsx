"use client"
import React from 'react'
import Image from 'next/image'
import UserPage from './UserPage'
import { List } from '@deemlol/next-icons'
import { postimage } from '@/app/imagepost'
import Post from '@/app/components/showProfileLists/Post'
import EventList from './showPosts/EventList'
import ShowProfile from '@/app/components/showProfileLists/ShowProfile'
import {useEffect,useState,use} from "react"
import axios from "axios"

import { getSingleData, getUserData,getuserprofile } from"@/app/Modula/utils/auth" 
import { AboutPage } from './AboutPage'
import { UserDataStore } from './userhook'
import PostPage from './PostPage'
import ClientProfile from './ClientProfile'
import { Change } from '../Modula/hooks/change'
interface Props{
    id :String
}

const Usercomponent = () => {
  const userhook = UserDataStore()
  const change = Change()
  const [user,setUser] = useState<any>(null)
  useEffect(()=>{
    async function getUser(){
      try{
        const response= await getuserprofile()
        setUser(response)
      }
      catch(e:any){
        console.log("error"+e.message)
      } 
    }
    getUser()
    
  },[change.ischange])
    useEffect(()=>{
      if(user){
        if(user.user_type=="photographer"){
          userhook.setBio(user.photographer.bio)
          userhook.setEmail(user.email)
          userhook.setBigImage(user.photographer.big_profile_image)
          userhook.setProfileImage(user.photographer.profile_image)
          userhook.setFirst_name(user.first_name)
          userhook.setLast_name(user.last_name)
          userhook.setLocation(user.photographer.location)
          userhook.setSpeciality(user.photographer.speciality)
          userhook.setInstagram(user.photographer.instagram)
          userhook.setPhone(user.photographer.phone)
          userhook.setUsername(user.username)
          
        }
    }
    },[user])
  
  if(user){
  
  
       if(user.user_type=="photographer"){
        return (
          <div className="flex flex-col space-y-6">
          <UserPage first_name={user.first_name} last_name={user.last_name} big_profile_image={user.photographer.big_profile_image} profile_image={user.photographer.profile_image} speciality={user.photographer.speciality} location={user.photographer.location}/>
          <AboutPage bio={user.photographer.bio}/>
          <PostPage/>
          <EventList/>
     </div>)
       }
       else if(user.user_type=="client"){
          return(
               <ClientProfile first_name={user.first_name} last_name={user.last_name} phone={user.client.phone} location={user.client.location}/>
          )
      }
     
}
else if (!user){
    return (<div className="items-center flex justify-center">User not found</div>)
  }
}
export default Usercomponent