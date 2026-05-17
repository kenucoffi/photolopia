import axios from "axios"
 async function getData(){
  const response = await fetch("http://127.0.0.1:8000/user/listphotographer")
  if (!response){
    alert("error fetching the data")
  }
  return response.json()
}

export const getSingle = async(id:String)=>{
  const Data = await getData()
 
  const singleData = Data.find((u:any) => String(u.user.id) == id )
  if (singleData){
    console.log(singleData)
  }
  else{
    console.log("error fetching the dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  }
  return singleData
}




