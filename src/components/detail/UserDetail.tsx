"use client";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useSearchParams } from "next/navigation";

export default function UserDetail() {
    const isUserDetail = useSearchParams().get("type") === "user-detail";

    return (
        <div className="user-detail">
            <div className="bg-white p-2 border-b-2">
                <div className="flex gap-3 items-center">
                    {isUserDetail ? (
                        <MdKeyboardArrowDown size={25} />
                    ) : (
                        <MdKeyboardArrowRight size={25} />
                    )}
                    <h2>User Detail</h2>
                </div>
                {isUserDetail && (
                    <div className="grid grid-cols-2 pl-10">
                        <div className="bg-gray-100">
                            <ul className="font-medium pl-5 py-4">
                                <li>Person</li>
                                <li>First Name</li>
                                <li>Last Name</li>
                                <li>Employee ID</li>
                                <li>Email ID</li>
                                <li>Branch</li>
                                <li>Department</li>
                                <li>Role</li>
                                <li>Domain User</li>
                                <li>Comments</li>
                            </ul>
                        </div>
                        <div className="bg-gray-100">
                            <ul className="font-medium py-4">
                                <li>Shivani Sharma</li>
                                <li>Shivani</li>
                                <li>Sharma</li>
                                <li>258945</li>
                                <li>shivani@gmail.com</li>
                                <li>CS</li>
                                <li>IT</li>
                                <li>Software Developer</li>
                                <li>No</li>
                                <li>No Request</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
