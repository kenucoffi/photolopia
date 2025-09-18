import React from 'react'
import Image from 'next/image'
interface ContactInfo{
    userName :String
    profile:String
}
const Contacts:React.FC<ContactInfo> = ({profile,userName}) => {
  return (
        <div className="flex flex-row my-2 border border-gray-200 my-2">
            <div className="flex justify-y-center cursor-pointer relative overflow-auto btn btn-circle p-5"><Image src={'/'+ profile} alt='pic' fill /></div>
            <div className="flex flex-col">
              <div className="ml-2 cursor-pointer  font-semibold text-gray-700 text-md   ">{userName}</div>
              <div className="ml-2 font-light text-sm">test purpose</div>
            </div>
            
        </div>
  )
}

export default Contacts
