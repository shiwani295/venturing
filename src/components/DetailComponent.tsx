import WorkflowTimeline from "@/components/detail/WorkflowTimeline"
import UserDetail from "@/components/detail/UserDetail"
import ViewPermission from "@/components/detail/ViewPermission"
import PendingRequest from "@/components/detail/PendingRequest" 
import CurrentAccess from "@/components/detail/CurrentAccess"
import Signature from "@/components/detail/Signature"
import SystemDetail from "@/components/detail/SystemDetail"
import Setting from "@/components/detail/Setting"



export default function DetailComponent(){

    return(
        <div className="flex flex-col gap-3 h-full bg-white pt-4">
            <ul>
                <li><WorkflowTimeline/></li>
                <li><UserDetail/></li>
                <li><ViewPermission/></li>
                <li><PendingRequest/></li>
                <li><CurrentAccess/></li>

                <li><Signature/></li>

                <li><SystemDetail/></li>

                <li><Setting/></li>


                </ul>

        </div>
    )
}