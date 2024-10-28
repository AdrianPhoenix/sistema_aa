import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function Layout({ children }) {
    const sesion = await getServerSession(authOptions);
    const user = sesion.user;
    console.log(user);

  return (
    <div className="h-screen w-screen grid grid-cols-[35vh,1fr]">
      <Sidebar user={user}/>
      <main>{children}</main>
    </div>
  );
}
