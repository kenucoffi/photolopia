"use client"
import { X } from '@deemlol/next-icons'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { useValidationError } from './hooks/errror'
import { Change } from './hooks/change'
interface Modulavariables{
  label:String,
  content:React.ReactElement,
  isOpen:boolean,
  close:() => void

}
const Modula:React.FC<Modulavariables>= ({label,content,close,isOpen}) => {
  const change = Change()
  const {error,iserror,setError,setIserror} = useValidationError()
  const [ShowModal,setShowModal] = useState(false)

  useEffect(() =>{
    setShowModal(isOpen)
    
  },[isOpen])
  useEffect(()=>{
    console.log(error)
  },[iserror])
  const handleclick = useCallback(() => {
    setShowModal(false)
    setTimeout(() =>{
      close()
      change.DontChange()
    },300)
  },[])
  if (!ShowModal){
    return null
  }
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/50  ">
      <div className="relative  w-[90%] md:w-[80%] lg:w-[60%] my-6 mx-auto">
        <div className='translate duration-600 transition-y-0 opacity-100'>
            <div className='w-[95%] lg:w-[70%] md:w-[83%]  h-[400px] my-[-140px] absolute bg-white flex flex-col mx-10 md:mx-41 lg:mx-26 rounded-xl'>
                <header className='relative flex  flex-col  px-3 py-3'>
                    <div onClick={handleclick} className="absolute btn btn-circle p-1 hover:text-red-400 right-3 top-2"><X size={20}  className=' text-black '/></div>
                </header>
                <section className="overflow-y-auto p-6 ">
                  <div className=" flex justify-center  ">
                       <h1  className=" text-xl text-green-300 font-bold ">{label}</h1>
                  </div>
                  {iserror && (<div>
                {(error.map((e)=>(
                <div>{e}</div>
            )))}
            </div>
                )}
                  {content}
                </section>
            </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Modula
