"use client"
import React from 'react'
import {useState} from "react"
import {updateprofileUser} from "./utils/auth"


const UpdateProfile = () => {
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
     function handle_BPI_submit(e){
        const file = e.target.files[0]
    
      // create a preview URL
        try{
        setBig_Profile_image(file);
       }
       catch{
        alert("the image is not upload")
       }


    }

   function handle_PI_submit(e){
    const file = e.target.files[0]
      // create a preview URL
    try{
        setProfile_image(file);
    }
    catch{
    alert("the image is not upload")
       }
        
    }
  return (
    <div className="m-2 border-blue-300 w-[500px] h-full  rounded-xl overflow-y-scroll flex justify-items-center ">
        <form className="m-2 space-y-3 flex flex-col" onSubmit={hundleSubmit} method="put" >
            <div className="flex flex-row items-center space-x-3">
                <label>Bio : </label>
                <textarea onChange ={(e) => {setBio(e.target.value)}} name="message" rows={5} cols={40}  className="p-2 border"></textarea>
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>Location : </label>
                <input onChange ={(e) => {setLocation(e.target.value)}} placeholder='location' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>Speciality : </label>
                <input onChange ={(e) => {setSpeciality(e.target.value)}}  placeholder='speciality' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>profile Image : </label>
                <input placeholder='uploade' type='file' onChange ={handle_PI_submit} accept='image/' className="p-2 " />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>big image : </label>
                <input onChange={handle_BPI_submit} placeholder='uploade'  type='file' accept='image/'  className="p-2 " />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>phone : </label>
                <input onChange ={(e) => {setPhone(e.target.value)}}  placeholder='phone' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>website : </label>
                <input onChange ={(e) => {setWebsite(e.target.value)}}  placeholder='website' type='text' className="p-2 border" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <label>instagram : </label>
                <input onChange ={(e) => {setInstagram(e.target.value)}}  placeholder='instagram' type='text' className="p-2 border" />
            </div>
            <input placeholder="submit" type="submit" className="px-3 py-2 rounded-xl text-center text-white bg-green-400 hover:bg-green-600" />
        </form>
    </div>
  )
}

export default UpdateProfile
