import Image from 'next/image'
import Link from 'next/link'

interface PhotographerInfo{
    name:String
    porfolio:String
    profile?:String
    image?:String
    id:String
    

}

const Photographer : React.FC<PhotographerInfo> = ({name,profile,image,porfolio,id}) => {
     var variable:String = ''
     var temp:String =  porfolio
     if(porfolio.length > 25){
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
        variable = porfolio
     }
   
    return (
        
        <div className='flex flex-col border-1 rounded-xl max-w-[170px]  cols-span-1  h-[240px] border-gray-300 shadow-lg'>
            <div className='relative overflow-auto rounded-xl aspect-square object-center  transition  h-[34%] '><Image src={'/'+ image} alt='profile pic' fill /></div>
            <div className='flex flex-col '>   
                <div className='flex justify-center cursor-pointer'><div className='relative overflow-auto mt-[-40px] mb-2 btn btn-circle p-10  '><Image src={'/'+ profile} alt='profile pic' fill /></div></div>
                <div className='flex justify-center cursor-pointer text-md font-bold'><Link href={'../../useraccount/'+id}>{name}</Link></div>
                <div className='flex justify-center text-sm my-1 ml-2 mr-1 overflow-ellipsis font-light'>{variable}</div>
                <div className='flex justify-center cursor-pointer text-md  text-blue-300 hover:text-blue-500'> Followe +</div>
            </div>

        </div>
)
}
export default  Photographer