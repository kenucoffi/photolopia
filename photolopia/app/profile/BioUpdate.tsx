"use client"
import React, { useEffect } from 'react'
import { UserDataStore } from './userhook'
import { useState } from 'react'
import { Bio_hook } from '../Modula/hooks/bio'
import Modula from '../Modula/Modula'
import { getbioinfo , updatebio } from '../Modula/utils/auth'
import { Change } from '../Modula/hooks/change'
interface BioInterface{
    bio:string
}
const BioUpdate = () => {
    const Bio = Bio_hook()
    const userhook = UserDataStore()
    const change = Change()
    const [bio_text ,setBio] = useState<BioInterface | null>(null)
    useEffect(()=>{
       async function bio_data(){
            const bio = await getbioinfo()
            if(bio){
                setBio(bio)
            }
        }
        
        bio_data()
        
    },[])
    const  handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
       const {name,value} = e.target
       setBio((prev) =>({
        ...prev!,
        [name]:value,
       }))

    }
    async function handleSubmit(e:any){
        e.preventDefault()
        const response =  await updatebio({bio:bio_text?.bio})
        if(response){
            alert("update successfuly")
            change.Changed()
        }

    }
    const form = (
        <form method='POST' className="flex flex-col space-y-3 mt-2" onSubmit={handleSubmit}>
            <textarea  onChange={handleChange} name="bio"  className='w-full h-[200px]  border border-black p-4'>{bio_text?bio_text.bio:""}</textarea>
            <div className="w-full flex justify-center"><button className=" w-[60%] py-2 text-white text-center hover:bg-blue-500 bg-green-500 rounded-xl " type="submit">submit</button></div>
        </form>
    )
  return (
    <div>
      <Modula label="Update Bio" isOpen={Bio.isOpen} close={Bio.close} content={form}/>
    </div>
  )
}

export default BioUpdate
