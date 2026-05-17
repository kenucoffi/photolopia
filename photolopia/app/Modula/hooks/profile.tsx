import {create} from "zustand"

interface ProfileInterface{
    Isclicked:() => void
    IsFalse:()=>void
    Isprofile:Boolean
}

export const Profile = create<ProfileInterface> ((set)=>({
    Isprofile:false,
    Isclicked:()=>set({Isprofile:true}),
    IsFalse:()=>set({Isprofile:false})
}))