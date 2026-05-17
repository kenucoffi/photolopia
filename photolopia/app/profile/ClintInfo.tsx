"use client"
import React from 'react'
import { useState ,useEffect} from 'react'
import { Clientglob } from '../Modula/hooks/clientglob'
import Modula from '../Modula/Modula'
import { getbasicinfo, getuserprofile, client_info_edit } from '../Modula/utils/auth'
import { Change } from '../Modula/hooks/change'


interface Userinfointerface{
    id:string
    first_name:string
    last_name:string
    email:string
    username:string 
    location : string
    phone: string

}
const ClientInfo = () => {
   
    const infohook = Clientglob()
    const change = Change()
    // const info = {"first_name":userhook.first_name,"last_name":userhook.last_name,"phone":userhook.phone,"email":userhook.email,"username":userhook.username,'location':userhook.location,"speciality":userhook.speciality,"instagram":userhook.instagram}
    const [profile,setProfile] = useState<Userinfointerface | null>(null)
    useEffect(()=>{
        async function user(){
            const profile = await getbasicinfo()
            if(profile){
                setProfile(profile)
            }
        }
        user()
    },[])
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setProfile((prev) => ({
                ...prev!,
                [name]: value,
            }));
        }
        
    const handleSubmit = async(e:any)=>{
        e.preventDefault()
        try{
            const response = await client_info_edit({first_name:profile?.first_name,last_name:profile?.last_name,username:profile?.username,email:profile?.email,phone:profile?.phone,location:profile?.location})
            if(response == true){
                change.Changed()
                alert("update successfuly")
            }
        }
        catch(e:any){
            alert(e.message)
        }
    }
  const content =  (
        <form method='post' className='p-3 space-y-2' onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold ">Basic Info</h2>
            <div className="flex flex-col space-y-5">
                <div className='flex flex-col space-y-2'>
                    <label className="text-gray-500">First Name</label>
                    <input type="text" name="first_name" value={profile?profile.first_name : "" } placeholder="First Name" onChange={handleInputChange} className="w-full py-1 px-2 flex justify-center border border-black  "/>
                </div>
                <div className='flex flex-col space-y-1'>
                    <label className="text-gray-500">Last Name</label>
                    <input type="text" name="last_name" value={profile? profile.last_name:"" } placeholder="Last Name" onChange={handleInputChange} className="w-full py-1 px-2 flex justify-center border border-black"/>
                </div>
                <div className='flex flex-col space-y-1'>
                    <label className="text-gray-500">UserName</label>
                    <input type="text" name="username" value={profile?profile.username: ""} placeholder="username it should be unique" onChange={handleInputChange} className="w-full py-1 px-2 flex justify-center border border-black"/>
                </div>
                <div className='flex flex-col space-y-1'>
                    <label className="text-gray-500">Email</label>
                    <input type="text" name="email" value={profile?profile.email : ""} placeholder="Email" onChange={handleInputChange} className="w-full py-1 px-2 flex justify-center border border-black"/>
                </div>
                <div className='flex flex-col space-y-1'>
                    <label className="text-gray-500">Phone</label>
                    <input type="text" name="phone" value={profile?profile.phone :""} placeholder="Phone" onChange={handleInputChange} className="w-full py-1 px-2 flex justify-center border border-black"/>
                </div>
                <div className='flex flex-col space-y-1'>
                    <label className="text-gray-500">Location</label>
                    <input type="text" name="location" value={profile?profile.location : ""} placeholder="location" onChange={handleInputChange} className="w-full py-1 px-2 flex justify-center border border-black"/>
                </div>     
            </div>
            <div className="w-full flex justify-center  items-center mt-3"><button type="submit" className='bg-green-500 rounded-xl text-center text-white hover:bg-red-500 cursor-pointer w-[60%] py-1 px-3 '> Submit</button></div>
            
            
        </form>)
  return (
    <Modula content={content} isOpen={infohook.isOpen} close={infohook.close} label={'update client info'} />
  )
}

export default ClientInfo
