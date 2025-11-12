"use client"
import React from 'react'
import Photographer from './Photographer'
import Contactbar from '../Nav_bar/Contactbar'
import { useState ,useEffect } from 'react'
import { Searchuser } from './Search'
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
    
export const getSearchData = async (query:String) =>{
    try{
      const response  = await axios.get("http://localhost:8000/user/searchphotographer?search="+query)
      return response.data.results
    }
    catch{
      alert(e)
      return []
    } 
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
  const [users,setUsers] = useState([])  
  const issearch = Searchuser()
  
 useEffect(() => {
    async function data(){
      const users = await getData()
          if (users){
            setUsers(users)
          }
         }
    async function searchNow() {

      const searchUser = await getSearchData(issearch.userenter)
      if(searchUser){
        setUsers(searchUser)
      }
    }
    if (issearch.userenter !== ""){ 
      searchNow()
    }
    else{
      data()
    }
    
  }, [issearch.userenter ]);
  

    const photographers_info = users.map((Photographers:Photographer,key:Number)=>{
     return( <div className='m-2'> <Photographer first_name={Photographers.user.first_name} last_name={Photographers.user.last_name} big_profile_image={Photographers.big_profile_image} profile_image={Photographers.profile_image} speciality={Photographers.speciality} id={""+Photographers.user.id} /></div>)
  })

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
