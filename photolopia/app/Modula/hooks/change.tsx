import {create} from "zustand"

interface ChangeInterface{
    ischange:boolean
    Changed:()=>void
    DontChange:()=>void

}

export const Change = create<ChangeInterface>((set)=>({
    ischange:false,
    Changed:()=> set({ischange:true}),
    DontChange:()=> set({ischange:false})
}))