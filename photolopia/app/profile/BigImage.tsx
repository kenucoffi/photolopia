"use client"
import React from 'react'
import { UserDataStore } from './userhook'
import { useState } from 'react'
import { updateBigImage } from '../Modula/utils/auth'
import Modula from '../Modula/Modula'
import { BigProfile } from '../Modula/hooks/big_image'
import { Change } from '../Modula/hooks/change'

const BigImage = ({}) => {
  const change = Change()
  const Big = BigProfile()
  const [big_profile_image ,setImage] = useState<File | null >(null)
  function handleChange(e:any){
    
    setImage(e.target.files[0])
  }
  async function handleSubmit(e:any){
    e.preventDefault()
    const sendimage = await updateBigImage({big_profile_image})
    if (sendimage){
      change.Changed()
      alert("updated successfuly")
    }
  }
   const image = UserDataStore()

    const form = (
        <form className="space-y-2 mt-3 flex flex-col justify-center items-center" method='PATCH' onSubmit={handleSubmit} >
            <label >
              <div className="relative btn btn-circle p-18 overflow-auto border-green-500 border-4">
                <img src={"http://localhost:8000/"+image.big_profile_image} className='absolute h-full w-full '/>
              </div>
              <input onChange={handleChange} type="file" style={{display:"none"}} name='big_profile_image' />
              
            </label>
            <div>{big_profile_image ? big_profile_image.name:null}</div>
              
            <button type='submit' className="px-3 py-2 text-center text-white rounded-xl bg-green-500 hover:bg-blue-500">Update</button>            
        </form>
    )
  return (
    <div>
      <Modula content={form} label="update BigImage" isOpen={Big.isOpen} close={Big.close}/>      
    </div>
  )
}

export default BigImage
