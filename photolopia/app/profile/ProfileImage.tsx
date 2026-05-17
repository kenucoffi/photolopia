"use client"
import React from 'react'
import { UserDataStore } from './userhook'
import { useState } from 'react'
import { updateProfileImage } from '../Modula/utils/auth'
import Modula from '../Modula/Modula'
import { ProfileImage } from '../Modula/hooks/profile_image'
import { Change } from '../Modula/hooks/change'

const ProfileImg = () => {
  const profile = ProfileImage()
  const [profile_image ,setImage] = useState<File | null >(null)
  const change = Change()
  function handleChange(e:any){
    
    setImage(e.target.files[0])
  }
  async function handleSubmit(e:any){
    e.preventDefault()
    const sendimage = await updateProfileImage({profile_image})
    if (sendimage){
      change.Changed()
      alert("updated successfuly")
    }
  }
   const image = UserDataStore()

    const form = (
        <form className="space-y-3 mt-3 flex flex-col justify-center items-center" method='PATCH' onSubmit={handleSubmit} >
            <div>click photo to upload new image</div>
            <label >
              <div className="relative btn btn-circle p-18 overflow-auto border-green-500 border-4">
                <img src={"http://localhost:8000/"+image.profile_image} className='absolute h-full w-full '/>
              </div>
              <input onChange={handleChange} type="file" style={{display:"none"}} name='profile_image' />
              
            </label>
            <div>{profile_image ? profile_image.name:null}</div>
              
            <button type='submit' className="px-3 py-2 text-center text-white rounded-xl bg-green-500 hover:bg-blue-500">Update</button>            
        </form>
    )
  return (
    <div>
      <Modula content={form} label="update BigImage" isOpen={profile.isOpen} close={profile.close}/>      
    </div>
  )
}

export default ProfileImg
