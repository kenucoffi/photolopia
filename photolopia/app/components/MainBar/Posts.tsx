import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface PostProps{
  name:String
  porfolio:String
  description:String
  profile?:String
  image?:String
  link?:String
}
const Posts:React.FC<PostProps> = ({name,porfolio,description,profile,image,link}) => {
  return (
    <div className="flex flex-col px-3 py-3 max-w-[400px]  border border-blue-200 ml-3 my-4 ">
      <div className="flex flex-row ">
        <div className=" relative btn btn-circle overflow-auto px-3 py-3"><Image src={'/'+ profile} alt="profil" fill/></div>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <Link href={''+link}>{name}</Link>
                <div className="text-blue-300 font-bold cursor-pointer"> + FOLLOW</div>
            </div>
            <p className="text-2xs text-gray-400">{porfolio}</p>
        </div>
      </div>
        <p className="overflow-scroll"> {description}</p>
        <div className="relative overflow-hidden aspect-square h-[400px]"><Image fill src={'/'+ image} alt="post"  className="object-center transition h-[50%] "/></div>
    </div>
  )
}

export default Posts
