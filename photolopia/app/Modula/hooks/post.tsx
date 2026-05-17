import {create} from "zustand"

interface PostInterface{
    isOpen:boolean
    Open:()=>void
    close:()=>void

}

export const Post = create<PostInterface>((set)=>({
    isOpen:false,
    Open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false})
}))