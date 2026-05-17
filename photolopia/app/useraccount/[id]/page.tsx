

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
import Usercomponent from '../usercomponent'
interface Props{
    params:Promise<{id:String}>
}

  const page = async({ params }: Props ) => {
  const {id} = await params
  return (
    <div>
      <Usercomponent id={id}/>
    </div>
    
  )
}

export default page
