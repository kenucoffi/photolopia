import { TextareaHTMLAttributes } from "react"
import {create} from "zustand"

interface InterfaceuserData{
    first_name:string
    last_name:string
    username:string
    email:string
    big_profile_image:string
    profile_image:string
    location:string
    instagram:string
    phone:string
    bio:string
    speciality:string
    
    setFirst_name :(value:string)=>void
    setLast_name :(value:string)=>void
    setUsername :(value:string)=>void
    setEmail :(value:string)=>void
    setBio :(value:string)=>void
    setSpeciality :(value:string)=>void
    setPhone :(value:string)=>void
    setLocation :(value:string)=>void
    setInstagram :(value:string)=>void
    setProfileImage:(value:string)=>void
    setBigImage:(value:string)=>void

}

export const UserDataStore =create<InterfaceuserData>((set) =>({ 
    first_name:"",
    last_name:"",
    username:"",
    email:"",
    big_profile_image:"",
    profile_image:"",
    location:"",
    instagram:"",
    phone:"",
    bio:"",
    speciality:"",
    setBigImage:(value)=> set({big_profile_image:value}),
    setProfileImage:(value)=> set({profile_image:value}),
    setEmail:(value)=>set({email:value}),
    setBio:(value)=> set({bio:value}),
    setSpeciality:(value)=> set({speciality:value}),
    setFirst_name:(value)=> set({first_name:value}),
    setLast_name:(value)=> set({last_name:value}),
    setUsername:(value)=> set({username:value}),
    setLocation:(value)=> set({location:value}),
    setInstagram:(value)=>set({instagram:value}),
    setPhone:(value)=>set({phone:value})
}))