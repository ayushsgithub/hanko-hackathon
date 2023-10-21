import HankoAuth from "@/app/components/hanko/HankoAuth";
import { LogoutBtn } from "../components/hanko/Logout";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Image className="absolute p-6" src={"hanko-beta-logo.svg"} width={200} height={200} alt="hanko logo"/>
      {/* Left Column */}
      <div className="hidden bg-gradient-to-tr from-gray-900 to-black md:w-1/2 p-16 md:flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold break-words mb-4 text-white leading-tight">
        The easiest way to set up your passkey login with Hanko
        </h1>
        <p className="text-lg text-gray-300">
        Get started with your Hanko Cloud API access in a few minutes. No credit card needed.
        </p>
      </div>

      {/* Right Column */}
      <div className="bg-[#262B35] w-full md:w-1/2 flex justify-center items-center h-screen">
        <div className="p-10">
          <HankoAuth />
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm pt-20">
            By creating an account, you agree to our terms and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
