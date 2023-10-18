import HankoAuth from "@/app/components/hanko/HankoAuth";
import { LogoutBtn } from "../components/hanko/Logout";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Column */}
      <div className="bg-gray-600 lg:w-1/2 p-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-gray-300">
          Discover the best way to authenticate and secure your account with
          HankoAuth.
        </p>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <HankoAuth />
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Have questions?{" "}
              <Link href={"/"} className="text-blue-700 hover:text-blue-400">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
