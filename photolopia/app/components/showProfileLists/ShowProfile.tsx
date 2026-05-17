"useState"
import React, { useEffect, useState } from 'react'
import Post from './Post'
import { postimage ,bdimage,weddingimage ,otherimage} from '@/app/imagepost'
import Image from 'next/image'
import { public_user_post, user_post } from '@/app/Modula/utils/auth'
import Post_card from './post_card'

interface ShowpostInterface{
  id:string
  user_id:string
}
interface PostInterface{
  title:string
  description:string
  post_image:string
  post_type:string
  id:string
}
const ShowPost = ({id,user_id}:ShowpostInterface) => {
  const [post ,setPost] = useState<PostInterface | null>(null)
  useEffect(()=>{
    async function userpost(){
       const response = await public_user_post({id:user_id})
       if(response){
        console.log(response)
        setPost(response)
       }
    }
    userpost()
  },[user_id])
  
  if(id=="1"){
    return <div className="grid grid-cols-2 sm:grid-cols-3 space-x-2 space-y-2">{Array.isArray(post) && post.map((index)=>{
        return <Post_card post_type={index.post_type} post_image={index.post_image} title={index.title} description={index.description}/>
    })}</div>
  }
  else if(id=="2"){
    return <div className="grid grid-cols-2 sm:grid-cols-3 space-x-2 space-y-2">{Array.isArray(post) && post.map((index)=>{
      if(index.post_type=="birth_day"){
        return <Post_card post_type={index.post_type} post_image={index.post_image} title={index.title} description={index.description}/>
      }
      
    })}</div>
  }
  else if(id=="3"){
    return <div className="grid grid-cols-2 sm:grid-cols-3 space-x-2 space-y-2">{Array.isArray(post) &&post.map((index)=>{
      if(index.post_type=="wedding"){
        return <Post_card post_type={index.post_type} post_image={index.post_image} title={index.title} description={index.description}/>
      }
    })}</div>
  }
  else{
    return <div className="grid grid-cols-2  sm:grid-cols-3 space-x-2 space-y-2">{Array.isArray(post)&&post.map((index)=>{
      if(index.post_type=="other"){
        return <Post_card post_type={index.post_type} post_image={index.post_image} title={index.title} description={index.description}/>
      }
    })}</div>
  }


}

export default ShowPost
