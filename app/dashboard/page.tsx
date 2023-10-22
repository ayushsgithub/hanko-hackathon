import HankoProfile from "@/app/components/hanko/HankoProfile";
import { LogoutBtn } from "../components/hanko/Logout";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex flex-col p-4 items-center min-h-screen bg-[#262B35]">
      <HankoProfile />
      <div className="flex mt-5">
      <div className="bg-white p-3 rounded-lg m-2">
          <Link href="/gallery">
            <p className="text-blue-600 hover:underline">Home</p>
          </Link>
        </div>
        <div className="bg-red-400 p-3 rounded-lg m-2">
          <LogoutBtn />
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
