export const getSearchData = async(search:String) =>{
          const response  = await fetch("http://localhost:8000/user/searchphotographer?search="+{search})
          console.log(response.json())
          return response.json()
      
}
