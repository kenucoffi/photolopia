"use client"
import React from 'react'
import {useState ,useEffect} from "react"
import {list_photographers, updateprofileUser} from "./utils/auth"
import { UserLogout } from './hooks/logout'
import { getUserData } from './utils/auth'
interface FirstProfile{
    profile_image:File | null
    speciality :string
    bio:string

}

const SecondProfile = ({profile_image,speciality ,bio}:FirstProfile) => {
    const [big_profile_image, setBig_profile_image] =useState(File | null)
    const [location ,setLocation ] = useState("")
    const [phone , setPhone] = useState("")
    const [instagram,setInstagram] = useState("")
    const UpdateProfile = () => {
    const login = UserLogout()
    const [values ,setValue] =useState<Userinfo | null  >(null)
    const [user_id ,setId] =useState("")
    const [profile,setProfile] = useState<Userprofile | null>(null)
   
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
    const handleBigProfile=(e:any)=>{
        const file = e.target.files[0]
        try{
            setBig_profile_image(file)
        }
        catch{
            alert(e.message)
        }
    }
    const hundlesubmit=async()=>{
        try{
            await updateprofileUser({id:values?.id,bio,location,profile_image,big_profile_image,speciality,phone,instagram})
        }
        catch(e){
            alert(e.message)
        }
    }
    return (
    <div className="flex flex-col w-[700px] h-[800px] justify-center items-center  ">
      <div  className="space-y-6 border w-[600px] h-[600px] flex flex-col p-5 ">
        <div className="flex justify-center flex-col items-center ">
            <label class="font-bold">Big Image</label><br/>
            <label className="relative border-blue-400 btn btn-circle hover:bg-gray-200 p-20 flex justify-center items-center">
                <input type="file" onChange={handleBigProfile} style={{display:"none"}}/>
                Big Image
                <label className="absolute right-[-10px] bottom-[-10px] p-2 btn btn-circle border-green-500">p</label>
            </label>
        </div>
        <div className="flex flex-col">
            <label className="font-bold text-md">Location</label>
            <input name="location" onChange={(e)=>setLocation(e.target.value)} placeholder="Example addis abeba yeka ferensay" className="w-full border rounded-xl p-2"/>
        </div>
        <div className="flex flex-col">
            <label className="text-md font-bold">phone</label>
            <input type="text" name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder="Example addis abeba yeka ferensay" className="w-full border rounded-xl p-2"/>
        </div>
        <div className="flex flex-col">
            <label className="font-bold text-md">Instagram</label>
            <input name="instagram" onChange={(e)=>setInstagram(e.target.value)} placeholder="Example https://instagram.com" className="w-full border rounded-xl p-2"/>
        </div>
        <div className="w-full flex justify-center items-center">
            <button onClick={handlesubmit} className="px-5 py-1 rounded-xl w-[400px] bg-green-600 text-white text-green-500">submit</button>
        </div>
        </div>
      </div>
  )
}

export default SecondProfile
