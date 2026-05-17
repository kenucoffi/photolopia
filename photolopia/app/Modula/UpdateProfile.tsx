"use client"
import React, { useEffect } from 'react'
import {useState} from "react"
import {list_photographers, updateprofileUser} from "./utils/auth"
import { UserLogout } from './hooks/logout'
import { getUserData } from './utils/auth'

import axios from 'axios'
import { userInfo } from 'os'
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

const UpdateProfile = () => {
    const login = UserLogout()
    const [values ,setValue] =useState<Userinfo | null  >(null)
    const [user_id ,setId] =useState("")
    const [profile,setProfile] = useState<Userprofile | null>(null)
    const [displayuser,setDisplayuser] =useState(null)
useEffect(()=>{
    async function getUser(){
        const response = await getUserData()
        setValue(response)
        login.IsLogin()
        console.log(login.IsAuthenticated)
    }
    getUser()
},[])

useEffect(()=>{
    
    async function userProfile(){
        if(values?.id){
           const profile = await list_photographers(values?.id)   
           setProfile(profile)

        }
    }
    
    userProfile()

    
    
    },[values])
    const [bio , setBio] = useState("")
    const [location,setLocation] = useState("")
    const [speciality,setSpeciality] = useState("")
    const [phone , setPhone] = useState("")
    
    const [instagram ,setInstagram] = useState("")
    const [profile_image,setProfile_image] = useState<File | null>(null)
    const [big_profile_image,setBig_Profile_image] = useState<File | null>(null)
    
    const hundleSubmit = async (e:any) => {
        e.preventDefault()
        if (bio == "" || location == ""  || speciality == "" || phone == "" ||  instagram==""){
            return 
        }
        try {
            await updateprofileUser({id:values?.id,bio,location,profile_image,big_profile_image,speciality,phone,instagram})
        }
        catch{
            alert("not updated successfuly")
        }
    }
     function handle_BPI_submit(e:any){
        const file = e.target.files[0]
    
      // create a preview URL
        try{
        setBig_Profile_image(file);
       }
       catch{
        alert("the image is not upload")
       }
    }

   function handle_PI_submit(e:any){
    const file = e.target.files[0]
      // create a preview URL
    try{
        setProfile_image(file);
    }
    catch{
    alert("the image is not upload")
       }
        
    }
    const handlelocatio = (e)=>{
        setLocation(e.target.value)
    }
    const handlebio = (e)=>{
        setBio(e.target.value)
    }
    const handlephone = (e)=>{
        setPhone(e.target.value)
    }
    const handlespeciality = (e)=>{
        setSpeciality(e.target.value)
    }
    const handleinstagram = (e)=>{
        setInstagram(e.target.value)
    }
    if(profile){
        var data = profile
    }
    else{
        var data = null
    }
    
        
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setProfile((prev) => ({
            ...prev!,
            [name]: value,
        }));
    };
    
    
 const autuser= profile && (
    
      <div>
        <form className="m-2 space-y-3 flex flex-col" onSubmit={hundleSubmit} method="put" >
    
    <div className="flex flex-row items-center space-x-3">
                <label>Bio : </label>
                <textarea name="bio" onChange ={handleInputChange}  value={profile.bio || ""}   rows={5} cols={40}  className="p-2 border"></textarea>
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>Location : </label>
                <input name="location" onChange ={handleInputChange} value={profile.location || ""}  placeholder='location' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>Speciality : </label>
                <input name="speciality" onChange ={handleInputChange} value={profile.speciality || ""}  placeholder='speciality' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>profile Image : </label>
                <input placeholder='uploade' type='file'   onChange ={handle_PI_submit} accept='image/' className="p-2 " />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>big image : </label>
                <input onChange={handle_BPI_submit}   placeholder='uploade'  type='file' accept='image/'  className="p-2 " />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>phone : </label>
                <input name="phone" onChange ={handleInputChange} value={profile.phone || ""}   placeholder='phone' type='text' className="p-2 border" />
            </div>
            
            <div className="flex flex-row items-center space-x-3">
                <label>instagram : </label>
                <input name="instagram" onChange ={handleInputChange} value={profile.instagram || ""}  placeholder='instagram' type='text' className="p-2 border" />
            </div>
            
            <input placeholder="submit" type="submit" className="px-3 py-2 rounded-xl text-center text-white bg-green-400 hover:bg-green-600" />
        </form> </div>
 )
  return (
    
    <div className="m-2 border-blue-300 w-[500px] h-full  rounded-xl overflow-y-scroll flex justify-items-center ">
        {login.IsAuthenticated ? autuser : null}  
    </div>
  )
}

export default UpdateProfile
