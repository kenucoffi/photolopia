"use client"
import React, { useState } from 'react'
import Modula from '../Modula/Modula'
import { Post } from '../Modula/hooks/post'
import { create_post } from '../Modula/utils/auth'
import { Change } from '../Modula/hooks/change'

const Post_open = () => {
    const change = Change()
    const openPost = Post()
    const [image ,setImage] = useState<File | null>(null)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [post_type,setPostType]=useState("")
    function handleTitle(e:any){
        setTitle(e.target.value)
    }
    function handleDesciption(e:any){
        setDescription(e.target.value)
    }
    function handlePostType(e:any){
        setPostType(e.target.value)
    }
    function handleImage(e:any){
        setImage(e.target.files[0])
    }
    async function handleSubmit(e:any){
        e.preventDefault()
        const response = await create_post({title:title,description:description,post_type:post_type,image:image})
        if(response){
            alert('post create successfuly')
            change.Changed()
        }

    }
    const form=(

        <form method='POST' className='p-3 flex flex-col space-y-4' onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-1">
                <label className='text-gray-400'>title </label>
                <input type='text' onChange={handleTitle} name="title" placeholder='your post title' className='text-sm p-1 w-full border rounded-xl '/>
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-gray-400">description</label>
                <textarea name='description' onChange={handleDesciption} className='w-full p-3 border rounded-xl text-sm' placeholder='your post description'></textarea>
            </div>
            <div className='flex flex-col space-x-1'>
                <label className='text-gray-400'>post Type</label>
                <select name='post_type' className="w-full rounded-xl p-2 border cursor-pointer " onChange={handlePostType}>
                    <option value="" >Choose type</option>
                    <option value='birth_day' className="bg-blue-500 text-white hover:bg-green-300 p-2">birth day</option>
                    <option value="wedding" className="bg-blue-500 text-white hover:bg-green-300 p-2">wedding</option>
                    <option value="others" className="bg-blue-500 text-white hover:bg-green-300 p-2">Others</option>
                </select>
            </div>
            <label>
                <div className='p-2 border text-center border-green-300 bg-gray-200 text-blue-500 rounded-xl hover:bg-gray-300 cursor-pointer'>click to upload </div>
                <input onChange={handleImage}  type='file' name='image' style={{display:"none"}}/>
                <div className='text-center'>{image?image.name:null}</div>
            </label>
            <div className="w-full flex justify-center"><button type="submit" className='w-[60%] cursor-pointer bg-blue-500 hover:bg-green-500 rounded-xl text-white text-center p-1'>Submit</button></div>
        </form>
    )
    return (<Modula isOpen={openPost.isOpen} close={openPost.close} content={form} label="Create Post"/>)
}

export default Post_open
