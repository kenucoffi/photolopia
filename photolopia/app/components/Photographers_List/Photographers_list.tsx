"use client"
import React from 'react'
import Photographer from './Photographer'
import Contactbar from '../Nav_bar/Contactbar'
import { users } from '@/app/users'
import { Searchuser } from './Search'
import { devNull } from 'os'





const Photographers_list = () => {
  const issearch = Searchuser()
   const photographers_info= users.map((Photographers,key)=>{
    return( <div className='m-2'> <Photographer name={Photographers.name} image={Photographers.image} profile={Photographers.profile} porfolio={Photographers.porfolio} id={Photographers.id} /></div>)
  })
 const photographers_info2 = users.map((photo,key)=>{
   
  return( 
      issearch.userenter == photo.name ? (<div className='m-2'> <Photographer name={photo.name} image={photo.image} profile={photo.profile} porfolio={photo.porfolio} id={photo.id} /></div> ): (null) )
 })
  return (
    <>
      <div className=' bg-white ml-16 md:ml-1 rounded-xl shadow-lg '>
          <div className=''>
            <div className=' grid grid-cols-2 sm:grid-cols-3  '>
                {issearch.issearch ?  (photographers_info2) : (photographers_info)}
            </div>
          </div>
      </div>
      <Contactbar/>
    </>
  )
}

export default Photographers_list
