"use client"
import Image from "next/image"
import React from 'react'
import {useState ,useEffect} from "react"
import {list_photographers, updateprofileUser} from "@/app/Modula/utils/auth"
import { UserLogout } from '@/app/Modula/hooks/logout'
import { getUserData ,getuserprofile} from '@/app/Modula//utils/auth'
const FirstProfile = () => {
    interface Userinfo{
        email:string
        id:string
        first_name:string
        last_name:string
    
    }
interface Userprofile{
    profile_image:string
    big_profile_image:string
    location:string
    speciality:string
    instagram:string    
    bio:string
    phone:string
    }
  const [profile_image,setProfile_image] = useState(File | null)
  const [specialtiy,setSpeciality] = useState("")
  const [bio ,setBio] = useState("")
      const [big_profile_image, setBig_profile_image] =useState(File | null)
    const [location ,setLocation ] = useState("")
    const [phone , setPhone] = useState("")
    const [instagram,setInstagram] = useState("")
    
   
    const login = UserLogout()
    const [values ,setValue] =useState<Userinfo | null  >(null)
    const [user_id ,setId] =useState("")
    const [profile,setProfile] = useState<Userprofile | null>(null)
    


useEffect(()=>{
    
    async function userProfile(){
        
        const profile = await getuserprofile()
           if(profile){
              setProfile(profile)
              console.log(profile)
           }
           else{
            alert("there is problem with the network")
           }
    }
    
    userProfile()

    },[values])
    const handleBigProfile=(e:any)=>{
        const file = e.target.files[0]
        try{
            setBig_profile_image(file)
        }
        catch{
            alert(e.message)
        }
    }
    const handlesubmit=async()=>{
        try{
            await updateprofileUser({id:profile?.id,bio:profile?.bio,location:profile?.location,profile_image,big_profile_image,speciality:profile?.speciality,phone:profile?.phone,instagram:profile.instagram})
        }
        catch(e:any){
            alert(e.message)
        }
    }
  const hundleProfile =(e:any)=>{
    const file = e.target.files[0]
    try{
        setProfile_image(file)
    }
    catch(e:any){
        alert(e.message)
    }
    
  }
  const handleInputChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
   const  {name,value} = e.target
    setProfile((prev)=>({
        ...prev,
        [name]:value,
    }))
  }
  const updateProfile = profile && (
    <>
    <div className="flex flex-col w-[700px] h-[400px] justify-center items-center  ">
       <div className="my-5 space-y-4 ">
        <h1 className="text-4xl  text-center font-bold">Next fill out your profile </h1>
        <h1 className="text-2xl text-center font-light">Highlight what you're good at and how you can help clients. What you share here will be visible to them.</h1>
       </div>
       <div className="space-y-10 border w-[600px] h-[350px]  p-5 ">
        <div className="flex flex-row space-x-10 ">
            <div className="flex flex-col">
            <label className="relative border-blue-400 btn btn-circle hover:bg-gray-200 p-15 flex justify-center items-center">
                <input type="file" onChange={hundleProfile} style={{display:"none"}}/>
                {profile.photographer.profile_image ?<div className="relative overflow-auto border-blue-400 btn btn-circle p-10"><img src={"http://localhost:8000/"+profile.photographer.profile_image}  className="absolute w-full h-full object-cover overflow-auto" /></div>:null}
                <label className="absolute right-[-10px] bottom-[-10px] p-2 btn btn-circle border-green-500">p</label>
            </label>
            <div className="flex justify-center w-full items-center"><h1>{profile_image ? profile_image.name:null}</h1></div>
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-md font-bold">Speciality</label>
                <input type="text" onChange={handleInputChange} value={profile.photographer.speciality || ""} name="speciality" className="w-[300px] border rounded-xl p-2"  placeholder="Example , birth day ,wedding ,graduation"/>
            </div>
        </div>
        <div className="flex flex-col space-y-2">
            <label className="font-bold text-lg">Bio</label>
            <textarea type="text" onChange={handleInputChange} value={profile.photographer.bio || ""} name="bio" className="w-full h-[100px] border p-2 rounded-xl" placeholder="Enter your top skill experiance and interest.this one is the first ting client see"></textarea>

        </div>
       </div>
      
    </div>
    <div className="flex flex-col w-[700px] h-[800px] justify-center items-center  ">
      <div  className="space-y-6 border w-[600px] h-[600px] flex flex-col p-5 ">
        <div className="flex justify-center flex-col items-center ">
            
            <label className="font-bold">Big Image</label><br/>
            <div className="flex flex-col">
            <label className="relative border-blue-400 btn btn-circle hover:bg-gray-200 p-20 flex justify-center items-center">
                {profile.photographer.big_profile_image ?<div className="relative overflow-auto border-blue-400 btn btn-circle p-15"><img src={"http://localhost:8000/"+profile.photographer.big_profile_image}  className="absolute w-full h-full object-cover overflow-auto" /></div>:null}
                <input type="file" onChange={handleBigProfile} style={{display:"none"}}/>
                
                <label className="absolute right-[-10px] bottom-[-10px] p-2 btn btn-circle border-green-500">p</label>
            </label>
            <div className="flex justify-center w-full items-center"><h1>{big_profile_image ? big_profile_image.name:null}</h1></div>
            </div>
        </div>
        <div className="flex flex-col">
            <label className="font-bold text-md">Location</label>
            <input name="location" onChange={handleInputChange} value={profile.photographer.location || ""} placeholder="Example addis abeba yeka ferensay" className="w-full border rounded-xl p-2"/>
        </div>
        <div className="flex flex-col">
            <label className="text-md font-bold">phone</label>
            <input type="text" name="phone" onChange={handleInputChange} value={profile.photographer.phone || ""} placeholder="Example addis abeba yeka ferensay" className="w-full border rounded-xl p-2"/>
        </div>
        <div className="flex flex-col">
            <label className="font-bold text-md">Instagram</label>
            <input name="instagram" onChange={handleInputChange} value={profile.photographer.instagram || ""} placeholder="Example https://instagram.com" className="w-full border rounded-xl p-2"/>
        </div>
        <div className="w-full flex justify-center items-center">
            <button onClick={handlesubmit} className="px-5 py-1 rounded-xl w-[400px] bg-green-600 text-white text-green-500 hover:bg-blue-400 cursor-pointer">submit</button>
        </div>
        </div>
      </div>
    </>
  )
 return (
    
    <div className="m-10  w-full h-full   flex flex-col ">
        {login.IsAuthenticated ? updateProfile : null}  
    </div>
  )
}

export default FirstProfile
