"use client"
import React, { use, useState ,useEffect} from 'react'
import { User } from '@deemlol/next-icons'
import UserClick from './Usernav'
import { getUserData } from '@/app/Modula/utils/auth'
import { loginUser, logoutUser } from '@/app/Modula/utils/auth'
import { UserLogout } from '@/app/Modula/hooks/logout'
import { useSignupModal } from '@/app/Modula/hooks/SignupShow'
import { useLoginModal } from '@/app/Modula/hooks/LoginShow'

interface UserModel{
  id:String
  email :String
  first_name:String
}
const ProfileNav = () => {
  
  const [open,setOpen] = useState(false)
  const [log,setLog] = useState(true)
  const [user,setUser] = useState <UserModel |null>(null)
  const login = useLoginModal()
  const signup = useSignupModal()
  const logout = UserLogout()
  useEffect(() => {
    async function getuser(){
       const users = await getUserData()
      if (users){
         setUser(users)
      }
      
    }
    getuser()
  },[logout.IsAuthenticated])
  return (
    
     logout.IsAuthenticated == false ? (
    <>
    <div className='hidden md:block'>
    <div className="flex flex-row items-center ">
        <div onClick={login.open} className="px-2 py-1 cursor-pointer font-bold rounded-xl hover:text-blue-300 hover:bg-white">
            Log In
        </div>
        <div onClick={signup.open} className="px-2 py-1 cursor-pointer font-bold rounded-xl hover:text-blue-300 hover:bg-white">
            Sign Up
        </div>
    </div>
    </div>
    
    <div className='md:hidden'>
      <div onClick={() => { setOpen(!open)}} className='btn btn-circle px-3 py-3'>
        <User size={30}/>
      </div>
      { open && (
        <div className='flex flex-col right-1 absolute  top-18 bg-gray-100'>
          <UserClick user="Log In" onClick={login.open}/>;
          <UserClick user="Sign Up" onClick={signup.open}/>;
        </div>
      ) }
      </div></>): (
        <div className="flex flex-col ">
          { user ?(
          <div className="font-bold text-md text-gray-400">
            {user.email}
          </div>) : (null)
          }
          <div onClick={async() => {
              logout.IsClicked()
              try{
                 await logoutUser()
                 alert("logout successfuly")
                 }
             catch {
                 alert("not logout")
                  }
       }} className=" px-2 py-1 font-bold rounded-xl cursor-pointer hover:text-blue-300 hover:bg-white"> Logout</div>
        </div>
     )
    
  )
}

export default ProfileNav
