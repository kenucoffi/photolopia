"use client"
import React from 'react'
import Photographer from './Photographer'
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
    
export const getSearchData = async (search:String) =>{
    try{
      
      // const response  = await axios.get("http://localhost:8000/user/searchphotographer?search="+query)
      // return response.data.results
      const response = await axios.post("http://localhost:8000/api/V1/search",{search},{headers:{"Accept":"application/json"},withCredentials:true})
      return response.data.data
    }
    catch(e:any){
      alert(e)
      return []
    } 
}


const getData = async () => {
  try{
    // const response = await axios.get("http://localhost:8000/user/listphotographer",{withCredentials : false})
    const response = await axios.get("http://localhost:8000/api/V1/listofphotographers",{withCredentials:true}) 
    console.log(response.data)
    return response.data.data

  }
  catch{
    return []
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
  
    

  return (
    <>
      <div className=' bg-white ml-16 md:ml-1 rounded-xl shadow-lg '>
          <div className=''>
            <div className=' grid grid-cols-2 sm:grid-cols-3  '>
                {Array.isArray(users) && users.map((Photographers:Photographer,key)=>{
              
                  return(  <Photographer  first_name={Photographers.user.first_name} last_name={Photographers.user.last_name} big_profile_image={Photographers.big_profile_image} profile_image={Photographers.profile_image} speciality={Photographers.speciality} id={""+Photographers.user.id} key={key} />)
                
              })}
            </div>
          </div>
      </div>
    </>
  )
}

export default Photographers_list
