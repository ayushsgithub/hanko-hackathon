import HankoAuth from "@/app/components/hanko/HankoAuth";
import { LogoutBtn } from "../components/hanko/Logout";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-row">
      <div className="bg-red-200 w-1/2">
        <h1>lorem</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          earum tempora rerum quia cumque, saepe illo est quam harum eligendi
          ratione reprehenderit officia necessitatibus mollitia rem maiores
          repudiandae eius assumenda.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <HankoAuth />
      </div>
    </div>
  );
}
