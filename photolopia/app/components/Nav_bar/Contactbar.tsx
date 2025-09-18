import React from 'react'
import Contacts from '../follow_sugestion/Contacts'

const data = [
    {userName:'kenisa',profile:'img1.jpg'},
    {userName:'rophnan',profile:'img2.jpg'},
    {userName:'yohana',profile:'img3.jpg'},
    {userName:'pamfalon',profile:'img4.jpg'},
    {userName:'the weakend',profile:'img5.jpg'},
    {userName:'justin',profile:'img2.jpg'},
    {userName:'bob marly',profile:'img3.jpg'},
    {userName:'demen marly',profile:'img1.jpg'},
    
]
const mapdata = data.map((index ,key) => {
    return(<div><Contacts userName={index.userName} profile={index.profile} key={key}/> </div>)
})
const Contactbar = () => {
  return (
     <div className='hidden lg:block'>
           <div className="fixed top-19 lg:right-8  lg:w-[20%] px-2   py-10 h-[75%] z-50  bg-gray-100/80 backdrop-blue-md shadow-xl shadow-blue-300  ">
                <h1 className='  flex justify-center text-2xl text-sky-300 '>Contacts</h1>
                <br></br>
                <hr className='text-sky-300'/>
                <div className='overflow-scroll max-h-full'>
                    <div className=" flex flex-col border-l  border-gray-200  ">
                        {mapdata}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contactbar



       