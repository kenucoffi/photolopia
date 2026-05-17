import {create} from "zustand"

interface UserInfoInterface{
    isOpen:boolean
    Open:()=>void
    close:()=>void

}

export const UserInfomation = create<UserInfoInterface>((set)=>({
    isOpen:false,
    Open:()=> set({isOpen:true}),
    close:()=> set({isOpen:false})
}))

