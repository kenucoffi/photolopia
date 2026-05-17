import { Edit2 } from "@deemlol/next-icons"
import { Bio_hook } from "../Modula/hooks/bio"
interface About{
        bio:string
    }
export function AboutPage({bio}:About){
    const Bio = Bio_hook()
    function handleBio(){
        Bio.Open()
    }
    
    return (
    <div className="relative ml-18 md:ml-2 md:h-[300px] h-[400px] border border-blue-300 shadow-lg rounded-xl shadow-blue-200 ">
        <div className="flex flex-col my-8 p-4 space-y-3">
            <h1 className="text-2xl font-bold text-blue-500 ">Bio</h1>
            <p className="md:text-md text-sm font-light w-auto">{bio}</p>
        </div>
        <Edit2 onClick={handleBio} size={24} className="absolute right-7 cursor-pointer top-4 text-green-500 hover:text-blue-500"/>
    </div>)
}