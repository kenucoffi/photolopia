interface About{
        bio:string
    }
export function AboutPage({bio}:About){

    
     return (
    <div className="col-span-2 ml-18 md:ml-2 md:h-[300px] h-[400px] border border-blue-300 shadow-lg rounded-xl shadow-blue-200 ">
        <div className="flex flex-col my-8 p-4 space-y-3">
            <h1 className="text-2xl font-bold text-blue-500 ">Bio</h1>
            <p className="md:text-md text-sm font-light w-auto">{bio}</p>
        </div>

    </div>)
}