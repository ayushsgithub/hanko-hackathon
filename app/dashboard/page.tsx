import HankoProfile from "@/app/components/hanko/HankoProfile";
import { LogoutBtn } from "../components/hanko/Logout";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <HankoProfile />
      <div className="bg-red-200 p-2 rounded-lg">
        <LogoutBtn />
      </div>
      <div className="bg-red-200 p-2 rounded-lg">
        <Link href={"/test"}>Home</Link>
      </div>
    </div>
  );
};

export default DashboardPage;