"use client"
import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import RightSidebar from '../Nav_bar/RightSidebar'
import { getPosts } from '@/app/Modula/utils/auth'
interface PostsModule{
  post_image:string 
  title:string
  description:string
  id:string
  post_type:string
  user:{
      username:string
      firstname:string
      lastname:string
      id:string
      profile:string
      portfolio:string
   }
}
const MainBar = () => {
  const [posts,setPosts] = useState([]); 
  useEffect(()=>{
    async function posts(){
    try{
      const post = await getPosts();
      console.log(post.data)
      setPosts(post.data)
    }
  catch(e:any){
    console.log(e.message)
  }
  
  }
  posts()
  },[])
  

  return (
    <>
      <div className="flex flex-col ml-14 overflow-scroll justify-center">
          {Array.isArray(posts) && posts.map((post:PostsModule,key)=>{
            return <Posts id={post.user.id} name={post.user.username} porfolio={post.user.portfolio} description={post.description} image={post.post_image} profile={post.user.profile} key={key}/>
          })}
          
          
      </div>
      
      <RightSidebar/>
    </>
  )
}

export default MainBar
