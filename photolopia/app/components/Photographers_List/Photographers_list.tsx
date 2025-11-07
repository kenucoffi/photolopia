"use client"
import React from 'react'
import Photographer from './Photographer'
import Contactbar from '../Nav_bar/Contactbar'
import { useState ,useEffect } from 'react'
import { Searchuser } from './Search'
import {getSearchData} from "./SearchAPI"
import { devNull } from 'os'
import axios from "axios"

interface Photographer {
  id: String;
  user: {
    email:string
    first_name: string;
    last_name: string;
    id:String
  };
  big_profile_image: string;
  profile_image: string;
  speciality: string;
  portfolio: string;
}



const getData = async () => {
  try{
    const response = await axios.get("http://localhost:8000/user/listphotographer",{withCredentials : false})
    return response.data
  }
  catch{
    return null
  }
}


const Photographers_list =  () => {
  const [searchUser ,setSearchUser] = useState<any[]>([])
  const [users,setUsers] = useState([])  
  const issearch = Searchuser()
  
    useEffect( () => {
         async function data(){
          const users = await getData()
          if (users){
            setUsers(users)
          }
         }
         data()
        
    },[])

    // useEffect(()=>{
       
    //    async function Searchuser(){
    //       const searchusers =await  getSearchData(issearch.userenter)
    //       setSearchUser( searchusers)
    //    }
    //    Searchuser()

    // },[issearch.userenter])

    const photographers_info = users.map((Photographers:Photographer,key:Number)=>{
     return( <div className='m-2'> <Photographer first_name={Photographers.user.first_name} last_name={Photographers.user.last_name} big_profile_image={Photographers.big_profile_image} profile_image={Photographers.profile_image} speciality={Photographers.speciality} id={""+Photographers.user.id} /></div>)
  })
    // console.log(searchUser)
    // const photographers_info2 =  searchUser.map((photo:Photographer,key:Number)=>{
    //   return( 
    //      (<div className='m-2'> 
    //            <Photographer first_name={photo.user.first_name} last_name={photo.user.last_name} big_profile_image={photo.big_profile_image} profile_image={photo.profile_image} speciality={photo.speciality} id={''+photo.user.id} />
    //       </div> ))})
  return (
    <>
      <div className=' bg-white ml-16 md:ml-1 rounded-xl shadow-lg '>
          <div className=''>
            <div className=' grid grid-cols-2 sm:grid-cols-3  '>
                {photographers_info}
            </div>
          </div>
      </div>
      <Contactbar/>
    </>
  )
}

export default Photographers_list
