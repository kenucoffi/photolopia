"use client"
import React, { useState } from 'react'

interface CardInterface{
  title:string
  description:string
  post_image:string
  post_type:string

}
const Post_card = ({title,description,post_image,post_type}:CardInterface) => {
  const lessDescription = description.slice(0,50)
  const [more_less,setMoreLess] = useState(false)
  function showMoreLess(){
    setMoreLess(!more_less)
  }
  return (
    <div className=" relative flex  h-[300px]  flex-col pt-3 space-y-2 border border-blue-500 shadow-lg hover:scale-105 rounded-lg col-span-1">
        <div className='absolute right-1 top-1 text-yellow-500 text-[10px] '>{post_type}</div>
        <h1 className='m-2 h-[20px] text-indigo-500 text-[12px] '>{title}</h1>
        <div className='relative h-[280px] w-full overflow-auto object-cover'><img src={"http://localhost:8000/"+post_image} className="absolute w-full h-full "/>{more_less?<div className="absolute bottom-7 text-white left-2 text-[12px] mr-2 font-bold text-justify">{description}<span onClick={showMoreLess} className='hover:underline'>show less</span></div>:<div className="absolute bottom-4 text-white left-2 text-[12px] mr-2 font-bold text-justify">{lessDescription}...<span onClick={showMoreLess} className='hover:underline'>Show More</span></div>}</div> 
    </div>
  )
}

export default Post_card
