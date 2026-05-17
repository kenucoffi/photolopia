import {create} from "zustand"

interface Profile{
    isOpen:boolean
    Open:()=>void
    close:()=>void

}

export const ProfileImage = create<Profile>((set)=>({
    isOpen:false,
    Open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false})
}))