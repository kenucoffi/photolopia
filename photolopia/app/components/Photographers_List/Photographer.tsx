import Image from 'next/image'
import Link from 'next/link'

interface PhotographerInfo{
    first_name:string
    last_name:string
    speciality:string
    profile_image:string
    big_profile_image?:string
    id:string
    

}

const Photographer : React.FC<PhotographerInfo> = ({first_name,last_name,profile_image,big_profile_image,speciality,id}) => {
     var variable:string = ''
     var temp:string =  speciality
     if(speciality.length > 25){
        for(var i=0; i<25;i++){
            if(i>22){
                variable +='.'
            }
            else{
                variable += temp[i]
            }
            
        }
     }
     else {
        variable = speciality
     }
     var urlstart:string = ''
     var temp2:string = profile_image 
     if(profile_image){
     for(var i=0;i< Math.min(4,profile_image.length);i++ ){
        urlstart +=temp2[i]
     }}
    return (
        <div className='flex flex-col border-1 rounded-xl max-w-[170px]  cols-span-1  h-[240px] border-gray-300 shadow-lg'>
            <div className='relative overflow-auto rounded-xl aspect-square object-center  transition  h-[34%] '><img src={"http" == urlstart ? big_profile_image : 'http://localhost:8000'+ big_profile_image} alt='profile pic' className="w-full h-full object-cover overflow-auto" /></div>
            <div className='flex flex-col '>   
                <div className='flex justify-center cursor-pointer'><div className='relative overflow-auto mt-[-40px] mb-2 btn btn-circle p-10  '><img src={"http" == urlstart ? profile_image : 'http://localhost:8000'+ profile_image} alt='profile pic' className="absolute w-full h-full object-cover overflow-auto" /></div></div>
                <div className='flex justify-center cursor-pointer text-md font-bold'><Link href={'/useraccount/'+id} >{first_name} {last_name}</Link></div>
                <div className='flex justify-center text-sm my-1 ml-2 mr-1 overflow-ellipsis font-light'>{variable}</div>
                <div className='flex justify-center cursor-pointer text-md  text-blue-300 hover:text-blue-500'> Followe +</div>
            </div>
        </div>
)
}
export default  Photographer