import {create} from 'zustand'

interface ShowPost{
    postisOpen:boolean,
    postopen: () => void,
    postclose: () => void,
    birthDayisOpen:boolean,
    birthDayopen: () => void,
    birthDayclose: () => void,
    weddingisOpen:boolean,
    weddingopen: () => void,
    weddingclose: () => void,
    otherisOpen:boolean,
    otheropen: () => void,
    otherclose: () => void,
}

export const Post = create<ShowPost>((set) =>({
    postisOpen:false,
    postopen:() => set({postisOpen:true}),
    postclose:() => set({postisOpen:false}),
    birthDayisOpen:false,
    birthDayopen:() => set({birthDayisOpen:true}),
    birthDayclose:() => set({birthDayisOpen:false}),
    weddingisOpen:false,
    weddingopen:() => set({weddingisOpen:true}),
    weddingclose:() => set({weddingisOpen:false}),
    otherisOpen:false,
    otheropen:() => set({otherisOpen:true}),
    otherclose:() => set({otherisOpen:false})
}))
export default Post