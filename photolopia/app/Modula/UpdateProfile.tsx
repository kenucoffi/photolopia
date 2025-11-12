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
    website:string
    bio:string
    phone:string
}

const UpdateProfile = () => {
    const login = UserLogout()
    const [values ,setValue] =useState<any[] >([])
    const [email ,setEmail] =useState<string>("")
    const [profile,setProfile] = useState<any[]>([])
    useEffect(() => {
        async function getUserinfo(){
            const values = await getUserData()
            if (values != null){
                setValue(values)
            }
        }
        
        getUserinfo()
        
    },[login.IsAuthenticated])

useEffect(()=>{
    async function userProfile(){
        values.map((data:Userinfo)=>  {setEmail(data.email)})
        console.log("email " + email )
        const profile = await list_photographers(email)
        setProfile(profile)
    }
    if (values != null ){
        userProfile()
        console.log(profile)
    }
    },[values])
    const [bio , setBio] = useState("")
    const [location,setLocation] = useState("")
    const [speciality,setSpeciality] = useState("")
    const [phone , setPhone] = useState("")
    const [website,setWebsite] = useState("")
    const [instagram ,setInstagram] = useState("")
    const [profile_image,setProfile_image] = useState<File | null>(null)
    const [big_profile_image,setBig_Profile_image] = useState<File | null>(null)
    
    const hundleSubmit = async (e:any) => {
        e.preventDefault()
        if (bio == "" || location == "" || big_profile_image == null || profile_image == null || speciality == "" || phone == "" || website == "" || instagram==""){
            return 
        }
        try {
            await updateprofileUser({bio,location,profile_image,big_profile_image,speciality,phone,website,instagram})
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
    console.log(values)
 const autuser= profile.map((data:Userprofile)=>{
    return(<div><form className="m-2 space-y-3 flex flex-col" onSubmit={hundleSubmit} method="put" >
    <div className="flex flex-row items-center space-x-3">
                <label>Bio : </label>
                <textarea onChange ={(e) => {setBio(e.target.value)}} value={data.bio}  name="message" rows={5} cols={40}  className="p-2 border"></textarea>
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>Location : </label>
                <input onChange ={(e) => {setLocation(e.target.value)}} value={data.location} placeholder='location' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>Speciality : </label>
                <input onChange ={(e) => {setSpeciality(e.target.value)}} value={data.speciality} placeholder='speciality' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>profile Image : </label>
                <input placeholder='uploade' type='file'  onChange ={handle_PI_submit} accept='image/' className="p-2 " />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>big image : </label>
                <input onChange={handle_BPI_submit}   placeholder='uploade'  type='file' accept='image/'  className="p-2 " />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>phone : </label>
                <input onChange ={(e) => {setPhone(e.target.value)}} value={data.phone}  placeholder='phone' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>website : </label>
                <input onChange ={(e) => {setWebsite(e.target.value)}} value={data.website

                }  placeholder='website' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>instagram : </label>
                <input onChange ={(e) => {setInstagram(e.target.value)}} value={data.instagram} placeholder='instagram' type='text' className="p-2 border" />
            </div>
            <input placeholder="submit" type="submit" className="px-3 py-2 rounded-xl text-center text-white bg-green-400 hover:bg-green-600" />
        </form></div>
        )
})
  return (
    <div className="m-2 border-blue-300 w-[500px] h-full  rounded-xl overflow-y-scroll flex justify-items-center ">
        {login.IsAuthenticated ? autuser : null}  
    </div>
  )
}

export default UpdateProfile
