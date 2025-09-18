"use client"
import React from 'react'
import Post from './Post'
import { List } from '@deemlol/next-icons'
const EventList = () => {
    const post = Post()
  return (
     <div className="flex flex-row justify-center mt-4 ml-16 md:ml-1 ">
          <div onClick={() => { post.postopen()
            post.birthDayclose()
            post.weddingclose()
            post.otherclose()
          }} className="flex flex-row mr-4 cursor-pointer">
            <List color='blue' />
            <h5 >Post</h5>
          </div>
          <div onClick={()=> {
            post.postclose()
            post.birthDayopen()
            post.weddingclose()
            post.otherclose()
          }}
             className="flex flex-row mr-4 cursor-pointer">
            <List color='blue' />
            <h5>Birth Day</h5>
          </div>
          <div onClick={()=> {
            post.postclose()
            post.birthDayclose()
            post.weddingopen()
            post.otherclose()
          }} className="flex flex-row mr-4 cursor-pointer">
            <List color='blue' />
            <h5>Wedding</h5>
          </div>
          <div onClick={()=> {
            post.postclose()
            post.birthDayclose()
            post.weddingclose()
            post.otheropen()
          }} className="flex flex-row mr-4 cursor-pointer">
            <List color='blue' />
            <h5>Others</h5>
          </div>

      </div>
  )
}

export default EventList
