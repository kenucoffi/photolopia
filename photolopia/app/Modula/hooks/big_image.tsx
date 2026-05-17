import {create} from "zustand"

interface BigImage{
    isOpen:boolean
    Open:()=>void
    close:()=>void

}

export const BigProfile = create<BigImage>((set)=>({
    isOpen:false,
    Open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false})
}))