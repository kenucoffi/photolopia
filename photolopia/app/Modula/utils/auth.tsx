import { useValidationError } from "../hooks/errror"
import axios from "axios"
import { headers } from "next/headers"
const API = "http://localhost:8000/user/"
import { useState } from "react"
interface Register{
    
    email:String
    password:String
    first_name:String
    last_name:String
    user_type:String
    username:String
}
interface ProfileImage{
  profile_image:File | null
}
interface PostInterface{
  image:File | null
  post_type:string
  description:string
  title:string
}
interface Login{
    email:String
    password:String
}
interface BigImage{
  big_profile_image :File | null
}
interface ProfileModule{
    id:string
    bio : string
    big_profile_image :File | null
    profile_image :File | null
    location : string
    speciality :string
    phone: string
    instagram : string
}
interface Userinfointerface{
    first_name:string
    last_name:string
    email:string
    username:string
    location : string
    speciality :string
    phone: string
    instagram : string
}
interface Clientinfointerface{
    first_name:string
    last_name:string
    email:string
    username:string
    location : string
    phone: string
}
interface UserId{
  id:String
}
interface BioInterface{
   bio:string
}

export const register = async({username,email,password,first_name,last_name,user_type}:Register) => {
     
     
  try{
        
        // const response = await axios.post("http://localhost:8000/user/register",{email,password,first_name,last_name,user_type},{withCredentials:true})
        axios.defaults.xsrfCookieName = "XSRF-TOKEN";
        axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
        await axios.get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true });
        const response = await axios.post("http://localhost:8000/api/V1/register",{username,email,password,first_name,last_name,user_type},{headers: {'Content-Type': 'application/json','Accept': 'application/json' ,withCredentials: true}})
        if(response.status == 201){
          const messages = <div className="text-green">Register Successfuly</div>
          return messages
        }


    }
        catch(errors:any){
            if(errors.response){
              const errorsObj = errors.response.data.errors
              const errorMessage = Object.values(errorsObj).flat()
              alert(errors.response.data.errors.first_name)
              
              return <div>{ errorMessage.map((error:any)=>{
                 return typeof error === 'string' ?  <div className="text-red-500 p-2 ml-2 ">{error}</div>:null
              })}</div>
            }
            else{
              alert(errors.message)
              const messages = <div className="text-red-500">the system have some issue try agen</div>
              return messages
            }
        
    }
}

export const loginUser = async({email,password}:Login) => {
    try {
         
        // const response = await axios.post("http://localhost:8000/user/login",{email,password},{withCredentials:true})
        
        const response = await axios.post("http://localhost:8000/api/V1/login",{email,password},{headers: {'Content-Type': 'application/json','Accept': 'application/json' },withCredentials: true})
       
        if (response.status == 200){
          const result = await response.data
          alert("✅ successfuly login " + result.message)
          console.log(result.message) 
          localStorage.setItem("auth_token",result.data.token)
          return response
        }
        
    }
    catch(e:any){
        alert(e.response.data.message)
    }
}

export const logoutUser = async () => {
  const token = localStorage.getItem("auth_token")
  console.log("log out token = "+token)
  try {
    const response = await axios.post("http://localhost:8000/api/V1/logout",{},{headers:{"Authorization":"Bearer "+token,"Accept":"application/json"}, withCredentials: true } );

    if (response.status === 200) {
      localStorage.setItem("auth_token","")
      return response.data;
      
    } else {
     
      return false;
    }
  } catch (error) {
    console.error("🚨 Logout error:", error.response?.data || error.message);
    return false;
  }
};


export const getUserData = async() => {
    try {
        const token = localStorage.getItem("auth_token")
        console.log(token)
        const response = await axios.get("http://localhost:8000/api/V1/userdata",{headers:{"Authorization":"Bearer "+token,"Accept":"application/json"}, withCredentials: true})
        alert("successfuly fetch user data")
        console.log(response.data)
        return response.data.data

    }
    catch(e:any){
        return false
    }
}
export const updateprofileUser = async({id,bio,location,profile_image,big_profile_image,speciality,phone,instagram} : ProfileModule) => {
  try {
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("bio", bio);
    formData.append("location", location);
    formData.append("speciality", speciality);
    formData.append("phone", phone);
    formData.append("instagram", instagram);
if (big_profile_image instanceof File) {
  formData.append("big_profile_image", big_profile_image);
}
if (profile_image instanceof File) {
  formData.append("profile_image", profile_image);
}
for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }



    const token = localStorage.getItem("auth_token")
    // const response = await axios.patch("http://localhost:8000/user/updateprofile",formData,{withCredentials:true})
    const url = "http://localhost:8000/api/V1/photographer/"+id
    // const response = await axios.put(url,formData,{headers:{"Accept":"application/json","Authorization":"Bearer "+token },withCredentials:true})
    const response = await fetch(url,{method:"POST",body:formData,headers:{"Accept":"application/json","Authorization":"Bearer "+token},credentials:"include"})
    const data = await response.json()
    console.log(data);
    if(response.status == 201){
      alert("update successfuly")
    }
    else {
      // console.log(response.data)
    }
    
  
  }
  catch(e){
    alert(e)
  }
}

export  async function list_photographers(query:string){
  try{
    console.log("this is "+query)
    const token = localStorage.getItem("auth_token");
    const url = "http://localhost:8000/api/V1/editphotographer/"+query
    // const response = await axios.get("http://localhost:8000/user/searchphotographer?search="+query)
    const response = await axios.get(url,{headers:{"Accept":"application/json","Authorization":"Bearer "+token},withCredentials:true});  
    return response.data.data
  
    }
    catch{
        alert("erro fetch user")
        return []
    } 
  }

export const getSingleData = async({id}:UserId) => {
    try {
        const url ="http://localhost:8000/api/V1/photographer/"+id
        console.log(id)
        console.log(url)
        const response = await axios.get(url,{headers:{"Accept":"application/json"}, withCredentials: true})
        console.log(response.data)
        return response.data.data

    }
    catch(e:any){
        console.log("error "+e.message)
        return null


    }
}
export const getPosts = async() =>{
  try{
    const token = localStorage.getItem("auth_token") 
    const response = await axios.get("http://localhost:8000/api/V1/publicpost",{headers:{'Authorization':"Bearer "+{token},"Accept":"application/json"},withCredentials:true})
    return response.data
  }
  catch(e:any){
    alert(e.message)
  }
}

export const getuserprofile= async() => {
  const token = localStorage.getItem("auth_token")
  console.log("the token is "+token)
  try{
    const response = await axios.get("http://localhost:8000/api/V1/userprofile",{headers:{'Authorization':"Bearer "+token ,"Accept":"application/json"},withCredentials:true})
    if(response.status==200){
      console.log("data")
      console.log(response.data.data)
      return response.data.data
    }

  }
  catch(e:any){
    console.log(e.message)
    
  }
  
}
export const updateBigImage= async({big_profile_image}:BigImage)=>{
  const formData =new FormData()
  const token = localStorage.getItem("auth_token")
  if (big_profile_image instanceof File) {
      formData.append("big_profile_image", big_profile_image);
  }
  try{
    const response = await fetch("http://localhost:8000/api/V1/big_profile",{method:"post",body:formData,headers:{"Accept":"application/json","Authorization":"Bearer "+token},credentials:'include'})
    if (response.status==200){
      console.log(response.json())
      return true
    }
    
  }
  catch(e:any){
    alert(e.message)
  }

}

export const updateProfileImage = async({profile_image}:ProfileImage)=>{
  const token = localStorage.getItem("auth_token")
  const formData = new FormData()
  if(profile_image instanceof File){
    formData.append("profile_image",profile_image)
  }
  
  try{
    const response = await fetch("http://localhost:8000/api/V1/profile",{method:"post",body:formData,headers:{"Accept":"application/json","Authorization":"Bearer "+token} ,credentials:"include"})
    if(response.status==200){
      console.log(response.json())
      return true
    }
  }
  catch(e:any){
    alert(e.message)
  }
}

export const updateUserInfo = async({first_name,last_name,username,email,speciality,location,phone,instagram}:Userinfointerface)=>{
  
  try{
    const token = localStorage.getItem("auth_token")
    const response = await axios.post("http://localhost:8000/api/V1/user_info",{first_name,last_name,username,email,speciality,location,phone,instagram},{headers:{"Authorization":"Bearer "+token ,"Accept":"application/json"},withCredentials:true})
    if(response.status==200){
      console.log(response.data)
      return true
    }
  }
  catch(e:any){
    alert(e.message)
  }
}

export const getbasicinfo= async()=>{
  const token = localStorage.getItem("auth_token")
  
  try{
    const response = await axios.get("http://localhost:8000/api/V1/basic_info",{headers:{"Authorization":"Bearer "+token,"Accept":"application/json"},withCredential:true})
    if(response){
      return response.data.data
    }
  }
  catch(e:any){
    console.log(e.message)
  }

}

export const getbioinfo= async()=>{
  const token = localStorage.getItem("auth_token")
  
  try{
    const response = await axios.get("http://localhost:8000/api/V1/bio_info",{headers:{"Authorization":"Bearer "+token,"Accept":"application/json"},withCredential:true})
    if(response){
      console.log(response.data)
      return response.data
    }
  }
  catch(e:any){
    console.log(e.message)
  }

}

export const updatebio= async({bio}:BioInterface)=>{
  const token = localStorage.getItem("auth_token")
  try{
    const response = await axios.post("http://localhost:8000/api/V1/bio",{bio},{headers:{"Authorization":"Bearer "+token ,"Accept":"application/json"},withCredential:true})
    if(response.data.message){
      console.log(response.data)
      return true
    }
  }
  catch(e:any){
    alert(e.message)
  }
}
export async function  create_post({title,description,post_type,image}:PostInterface){
  const token = localStorage.getItem("auth_token")
  const formData = new FormData()
  formData.append("title",title)
  formData.append("description",description)
  formData.append("post_type",post_type)
  if(image instanceof File){
    formData.append("image",image)
  }
  try{
    const response = await fetch("http://localhost:8000/api/V1/post",{method:"post",body:formData,headers:{"Authorization":"Bearer "+token,'Accept':"application/json"},credentials:"include"})
    if (response){
      console.log(response.json())
      return true
    }
  }
  catch(e:any){
    alert(e.message)
  }

}
export async function user_post(){
  const token = localStorage.getItem("auth_token")
  
  try{
    const response = await axios.get("http://localhost:8000/api/V1/userpost",{headers:{"Authorization":"Bearer "+token,"Accept":"application/json"},withCredentials:true})
    if(response.data.data){
     
      return response.data.data
    }
  }
  catch(e:any){
    console.log(e.message)
  }
}
export async function public_user_post({id}:UserId){ 
  try{
    const response = await axios.get("http://localhost:8000/api/V1/public_user_post/"+id,{headers:{"Accept":"application/json"},withCredentials:true})
    if(response.data.data){
      return response.data.data
    }
  }
  catch(e:any){
    alert(e.message)
  }
}
export async function user_basic_info({id}:UserId){ 
  try{
    const response = await axios.get("http://localhost:8000/api/V1/user_basic_info/"+id,{headers:{"Accept":"application/json"},withCredentials:true})
    if(response.data.data){
      console.log(response.data.data)
      return response.data.data
    }
  }
  catch(e:any){
    console.log(e.message)
  }
}
export async function suggest_follow(){ 
  const token = localStorage.getItem("auth_token")
  try{
    const response = await axios.get("http://localhost:8000/api/V1/suggest_follow",{headers:{'Authorization':"Bearer "+token,"Accept":"application/json"},withCredentials:true})
    if(response.data.data){
      console.log(response.data.data)
      return response.data.data
    }
  }
  catch(e:any){
    console.log(e.message)
  }
}
export async function client_info_edit({first_name,last_name,username,email,location,phone}:Clientinfointerface){ 
  const token = localStorage.getItem("auth_token")
  try{
    const response = await axios.post("http://localhost:8000/api/V1/client_info_edit",{first_name,last_name,email,location,phone,username},{headers:{'Authorization':"Bearer "+token,"Accept":"application/json"},withCredentials:true})
    if(response.data){
      console.log(response.data.message)
      return true
    }
  }
  catch(e:any){
    console.log(e.message)
  }
}