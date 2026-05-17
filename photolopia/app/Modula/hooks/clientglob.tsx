import {create} from "zustand"

interface ClientInterface{
    isOpen:Boolean
    Open:()=>void
    close:()=>void

}

export const Clientglob = create<ClientInterface>((set)=>({
    isOpen:false,
    Open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false})
}))