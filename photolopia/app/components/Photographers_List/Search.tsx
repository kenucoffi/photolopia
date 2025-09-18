import {create} from 'zustand'

interface UserSearch{
    issearch:Boolean
    userenter:String
    setUserenter:(value:String) => void
    Notsearch:() => void
    searched:() => void
    
}

export const Searchuser = create<UserSearch> ((set) =>({
    issearch :false,
    Notsearch:()=> set({issearch:false}),
    searched:()=> set({issearch:true}),
    userenter:"",
    setUserenter:(value) => set({userenter:value})
}))