
import React from 'react'
import Post from './Post'
import { postimage ,bdimage,weddingimage ,otherimage} from '@/app/imagepost'
import Image from 'next/image'
const ShowProfile = () => {
    const posts = Post()
    const postlists = postimage.map((image)=>{
  return(<div className='mr-3 mt-3 col-span-1  h-[300px] relative overflow-auto blur-none'><Image src={'/' + image} alt='image' fill /></div>)
 })
    
    const bdlists = bdimage.map((image)=>{
  return(<div className='mr-3 mt-3 col-span-1  h-[300px] relative overflow-auto blur-none'><Image src={'/' + image} alt='image' fill /></div>)
 })
    
    const weddinglist = weddingimage.map((image)=>{
  return(<div className='mr-3 mt-3 col-span-1  h-[300px] relative overflow-auto blur-none'><Image src={'/' + image} alt='image' fill /></div>)
 })

    const otherlists = otherimage.map((image)=>{
  return(<div className='mr-3 mt-3 col-span-1  h-[300px] relative overflow-auto blur-none'><Image src={'/' + image} alt='image' fill /></div>)
 })
  if(posts.postisOpen)return (
    <div className="grid ml-18 md:ml-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 mt-4">
        {postlists}
    </div>
  )
  if(posts.otherisOpen)return (
    <div className="grid ml-18 md:ml-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 mt-4">
        {otherlists}
    </div>
  )
  if(posts.birthDayisOpen)return (
    <div className="grid ml-18 md:ml-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 mt-4">
        {bdlists}
    </div>
  )
  if(posts.weddingisOpen)return (
    <div className="grid ml-18 md:ml-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 mt-4">
        {weddinglist}
    </div>
  )
}

export default ShowProfile
