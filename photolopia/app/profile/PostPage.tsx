"use client"
import React from 'react'
import {Post } from '../Modula/hooks/post'
const PostPage = () => {
  const openPost = Post()
  function handlePost(){
    openPost.Open()
  }
  return (
    <div className="flex flex-col justify-center ml-18 md:ml-2 space-y-3  border border-blue-400 shadow-lg shadow-blue-300 p-3 rounded-xl">
        <h1 className="text-xl text-center font-bold text-sky-500 ">Post your work hire</h1>
        <div className=" w-full flex justify-center ">
            <div onClick={handlePost} className='w-[90px] cursor-pointer text-center text-white bg-blue-400 py-1 hover:bg-green-400  rounded-xl'> Post</div>
        </div>        
    </div>
  )
}

export default PostPage
