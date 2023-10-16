import HankoAuth from "@/app/components/HankoAuth";
import { LogoutBtn } from "../components/Logout";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-row">
      <div className="bg-red-200 w-1/2">
        <LogoutBtn />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <HankoAuth />
      </div>
    </div>
  );
}
