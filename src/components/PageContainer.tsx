import SideBar from "@/components/SideBar";
import DetailComponent from "@/components/DetailComponent";

export default function PageContainer() {
  return (
    <div className="grid grid-cols-3 h-screen bg-blue-100 gap-5">
      <div className="col-span-1 h-full">
        <SideBar />
      </div>
      <div className="col-span-2 h-full">
        <DetailComponent />
      </div>
    </div>
  );
}
