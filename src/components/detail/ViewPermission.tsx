"use client";
import { MdKeyboardArrowRight,MdKeyboardArrowDown  } from "react-icons/md";
import { useSearchParams } from "next/navigation";
export default function ViewPermission(){
    const searchParams = useSearchParams().get("type");

    return (
        <div className="view-permission">
            <div className="bg-white p-2  border-b-2 ">
                <div className="flex gap-3 justify-start items-center">
           {searchParams==="view-permission" ?<MdKeyboardArrowDown size={25}/>:<MdKeyboardArrowRight size={25}/>}
            <h2>View Permission</h2>
                </div>
            {searchParams==="view-permission" && 
            <p className="ml-10 text-[10px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>}

            </div>
        </div>
    )
}