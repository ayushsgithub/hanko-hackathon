// import HankoProfile from "@/app/components/hanko/HankoProfile";
import dynamic from 'next/dynamic';
const HankoProfile = dynamic(() => import('@/app/components/hanko/HankoProfile'), { ssr: false })

const DashboardPage = () => {
  return (
    <div>
      <div className="min-h-screen h-[200vh] pt-10 flex justify-center">
        <HankoProfile />
      </div>
    </div>
  );
};

export default DashboardPage;
