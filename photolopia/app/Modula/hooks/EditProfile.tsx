import { create } from "zustand";

interface InterfaceEeitProfile{
    isBigImage:Boolean
    openBig:()=>void
    closeBig:()=>void
    isProfileImage:Boolean
    openProfile:()=>void
    closeProfile:()=>void

}

export const EditProfile = create<InterfaceEeitProfile> ((set)=>({
    isBigImage: false,
    isProfileImage:false,
    openBig:()=> set({isBigImage:true}),
    closeBig:()=> set({isBigImage:false}),
    openProfile:()=>set({isProfileImage:true}),
    closeProfile:()=>set({isProfileImage:false})
    
}))
