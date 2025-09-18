"use client"
import { X } from '@deemlol/next-icons'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react' 
interface Modulavariables{
  label:String,
  content:React.ReactElement,
  isOpen:boolean,
  close:() => void

}
const Modula:React.FC<Modulavariables>= ({label,content,close,isOpen}) => {
  const [ShowModal,setShowModal] = useState(false)

  useEffect(() =>{
    setShowModal(isOpen)
  },[isOpen])
  const handleclick = useCallback(() => {
    setShowModal(false)
    setTimeout(() =>{
      close()
    },300)
  },[])
  if (!ShowModal){
    return null
  }
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/50  ">
      <div className="relative  w-[90%] md:w-[80%] lg:[60%] my-6 mx-auto">
        <div className='translate duration-600 transition-y-0 opacity-100'>
            <div className='w-[95%] lg:w-[70%] md:w-[83%]  h-[400px] my-[-140px] absolute bg-white flex flex-col mx-10 md:mx-41 lg:mx-26 '>
                <header className='flex  flex-col border-b   border-green-300 '>
                    <div onClick={handleclick} className="btn btn-circle px-3 py-3 mx-2"><X size={27} color="red"/></div>
                    <div className=" flex justify-center  ">
                       <h1  className=" text-xl text-green-300 font-bold ">{label}</h1>
                    </div>
                </header>
                <section className="overflow-scroll">
                  {content}
                </section>
            </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Modula
