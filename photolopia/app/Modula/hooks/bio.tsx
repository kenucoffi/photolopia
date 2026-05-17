import {create} from "zustand"

interface BioInterface{
    isOpen:boolean
    Open:()=>void
    close:()=>void

}

export const Bio_hook = create<BioInterface>((set)=>({
    isOpen:false,
    Open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false})
}))