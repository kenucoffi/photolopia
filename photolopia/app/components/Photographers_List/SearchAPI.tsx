import axios from "axios"

export const getSearchData = async(query:String) =>{
          try{
             const response  = await axios.get("http://localhost:8000/user/searchphotographer?search="+query)
             return response.data
             
          }
          catch(e:any){
            alert(e)
          }
          finally{
          alert("fetched successfully")
          }
}
