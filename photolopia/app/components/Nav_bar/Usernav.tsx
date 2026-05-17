import React from 'react'
interface User{
  onClick:() => void;
  user:String
}

const UserClick:React.FC<User> = ({user,onClick}) => {
  return (
    <div onClick={onClick} className="px-4 py-2 hover:bg-white hover:text-blue-300">
      {user}
    </div>
  )
}

export default UserClick
