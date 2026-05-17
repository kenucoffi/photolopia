import {create} from 'zustand'

interface ShowModal{
    isOpen:boolean,
    open: () => void,
    close: () => void
}

export const useLoginModal = create<ShowModal>((set) =>({
    isOpen:false,
    open:() => set({isOpen:true}),
    close:() => set({isOpen:false})
}))
export default useLoginModal