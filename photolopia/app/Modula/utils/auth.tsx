
import axios from "axios"
const API = "http://localhost:8000/user/"

interface Register{
    email:String
    password:String
    first_name:String
    last_name:String
    user_type:String
}

interface Login{
    email:String
    password:String
}
interface ProfileModule{
    bio : string
    big_profile_image :File | null
    profile_image :File | null
    location : string
    speciality :string
    phone: string
    website : string
    instagram : string
}

export const register = async({email,password,first_name,last_name,user_type}:Register) => {
    try{
        const response = await axios.post("http://localhost:8000/user/register",{email,password,first_name,last_name,user_type},{withCredentials:true})
    }
    catch{
        return new Error("Register Field")
    }
}

export const loginUser = async({email,password}:Login) => {
    try {
        const response = await axios.post("http://localhost:8000/user/login",{email,password},{withCredentials:true})
        if (response.status == 200){
          alert("✅ successfuly login")
          return true
        }
        else {
      alert("❌Logout faile" );
      return false;
    }
    }
    catch{
        return new Error("register faild")
    }
}

export const logoutUser = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/user/logout",
      null, // send an empty body instead of null
      { withCredentials: true } // important: send cookies along
    );

    if (response.status === 200) {
      alert("✅ Logged out successfully");
      return true;
    } else {
      alert("❌Logout faile" );
      return false;
    }
  } catch (error) {
    console.error("🚨 Logout error:", error.response?.data || error.message);
    return false;
  }
};


export const getUserData = async() => {
    try {
        
        const response = await axios.get("http://localhost:8000/user/userdata",{ withCredentials: true})
        alert("successfuly fetch user data")
        return response.data
    }
    catch{
        return []


    }
}
export const updateprofileUser = async({bio,location,profile_image,big_profile_image,speciality,phone,website,instagram} : ProfileModule) => {
  try {
    const formData = new FormData();

    // Append all fields (text + image)
    if (bio) formData.append("bio", bio);
    if (location) formData.append("location", location);
    if (speciality) formData.append("speciality", speciality);
    if (phone) formData.append("phone", phone);
    if (website) formData.append("website", website);
    if (instagram) formData.append("instagram", instagram);

    if (big_profile_image instanceof File)
      formData.append("big_profile_image", big_profile_image);
    if (profile_image instanceof File)
      formData.append("profile_image", profile_image);
    const response = await axios.patch("http://localhost:8000/user/updateprofile",formData,{withCredentials:true})
    alert("update successfuly")
  
  }
  catch(e){
    alert(e)
  }
}
export  async function list_photographers(query:string){
  try{
    const response = await axios.get("http://localhost:8000/user/searchphotographer?search="+query)
        return response.data.results
    }
    catch{
        alert("erro fetch user")
        return []
    } 
  }