"use client";
import { MdKeyboardArrowRight,MdKeyboardArrowDown  } from "react-icons/md";
import { useSearchParams } from "next/navigation";
export default function SystemDetail(){
    const searchParams = useSearchParams().get("type");

    return (
        <div className="system-detail">
            <div className="bg-white p-2  border-b-2 ">
                <div className="flex gap-3 justify-start items-center">
           {searchParams==="system-detail" ?<MdKeyboardArrowDown size={25}/>:<MdKeyboardArrowRight size={25}/>}
            <h2>System Detail</h2>
                </div>
            {searchParams==="system-detail" && 
            <p className="ml-10 text-[10px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>}

            </div>
        </div>
    )
}