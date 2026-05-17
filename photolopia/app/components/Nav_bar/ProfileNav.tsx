"use client"
import React, { use, useState ,useEffect} from 'react'
import { User } from '@deemlol/next-icons'
import UserClick from './Usernav'
import Link from 'next/link'
import { getUserData } from '@/app/Modula/utils/auth'
import { loginUser, logoutUser } from '@/app/Modula/utils/auth'
import { UserLogout } from '@/app/Modula/hooks/logout'
import { useSignupModal } from '@/app/Modula/hooks/SignupShow'
import { useLoginModal } from '@/app/Modula/hooks/LoginShow'
import { Profile } from '@/app/Modula/hooks/profile'
import { Change } from '@/app/Modula/hooks/change'
interface UserModel{
  id:String
  email :String
  first_name:String
  last_name:String
}
const ProfileNav = () => {
  
  const [open,setOpen] = useState(false)
  const [log,setLog] = useState(true)
  const [isprofile ,setIsprofile] = useState(false)
  const [user,setUser] = useState <UserModel |null>(null)
  const login = useLoginModal()
  const signup = useSignupModal()
  const logout = UserLogout()
  const profile = Profile()
  const change = Change()
  useEffect(() => {
    async function getuser(){
       const users = await getUserData()
      if (users){
         setUser(users)
         logout.IsLogin()
         console.log(logout.IsAuthenticated)   
      }
      
    }
    getuser()
    

      
    
  },[change.ischange])

  async function handleLogout(){
    logout.IsClicked()
    try{
      const response = await logoutUser()
      if(response){
        alert("✅ Logged out successfully");
      }
      setIsprofile(!isprofile);

    }
    catch{
       alert("❌Logout faile" );
    }
  }
  function handleProfile(){
    setIsprofile(!isprofile)
  }
  return (
    
     logout.IsAuthenticated == false ? (
    <>
    <div className='hidden md:block'>
    <div className="flex flex-row items-center ">
        <div onClick={login.open} className="px-2 py-1 cursor-pointer font-bold rounded-xl hover:text-blue-300 hover:bg-white">
            Log In
        </div>
        <div  className="px-2 py-1 cursor-pointer font-bold rounded-xl hover:text-blue-300 hover:bg-white">
            <Link href="/Signup">Sign Up</Link>
        </div>
    </div>
    </div>
    
    <div className='md:hidden'>
      <div onClick={() => { setOpen(!open)}} className='btn btn-circle px-3 py-3'>
        <User size={30}/>
      </div>
      { open && (
        <div className='flex flex-col right-1 absolute   top-18 bg-gray-100'>
          <UserClick user="Log In" onClick={login.open}/>;
          <div className="px-4 py-2 hover:bg-white hover:text-blue-300">
            <Link href="/Signup">Signup</Link>
          </div>;
        </div>
      ) }
      </div></>): (
        <> {user ?(
        <div className="relative">
        <div onClick={handleProfile} className=" p-3 btn btn-circle bg-blue-400 border-blue-400 w-[40px] h-[40px]  " > 
          <div className="btn btn-circle p-2 flex justify-center w-[32px] h-[32px] items-center">{user.first_name[0]}{user.last_name[0]}</div>
        </div>
        { isprofile &&(
        <div className="absolute  top-10 flex flex-col w-[250px] p-4 right-8 bg-white border rounded-xl space-y-3">
            <div className="flex justify-between ">
              <div className="flex flex-col space-y-1">
                <div className='font-light text-[15px] text-gray-500 '>sign in as</div>
                <div className="font-medium text-[15px]">{user.email}</div>
                 
              </div>
              <div className="btn btn-circle p-2 flex justify-center w-[40px] h-[40px] items-center">{user.first_name[0]}{user.last_name[0]}</div>
              </div>
              
              
              <div className="flex w-full items-center  justify-center">
              <hr className="w-[150px] font-bold "/>
              </div>
              <div className='flex flex-row  items-center hover:text-blue-400'>
                  <User size={15}/>
                  <p className="text-[15px] "><Link href="/profile">profile</Link></p>
                 </div>
              <div className="flex w-full items-center cursor-pointer text-[15px] hover:text-blue-400" onClick={handleLogout}>log out</div>

            </div>
        )}
        </div>):null}
      </>)
        
      
    
  )
}

export default ProfileNav
