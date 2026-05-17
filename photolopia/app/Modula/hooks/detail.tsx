import {create} from "zustand"

interface DetailInterface{
    isOpen:boolean
    id:string
    converId:(value:string)=>void
    Open:()=>void
    close:()=>void
}

export const Detail = create<DetailInterface>((set)=>({
    isOpen:false,
    id:"0",
    converId:(value)=>set({id:value}),
    Open:()=>set({isOpen:true}),
    close:()=>set({isOpen:false})
}))