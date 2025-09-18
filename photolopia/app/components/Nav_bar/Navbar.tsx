import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Searchbar from './Searchbar'
import Shortcuts from './Shortcuts'
import ProfileNav from './ProfileNav'

const Navbar = () => {
  return (
    <nav className="fixed px-2 sm:px-5 md:px-10 py-4  top-0 left-0 z-10 w-full h-auto mx-auto text-gray-500  bg-gray-100/80 backdrop-blue-md shadow-lg shadow-blue-300 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
            <Link href="/"> 
               <Image src="/logo.png" alt="logo" width={100} height={100}/>
             </Link>
             <div>
                <Shortcuts/>
             </div>
             <div className="space-x-3 flex ">
                <Searchbar/>
             </div>
             <div>
                <ProfileNav/>
             </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
