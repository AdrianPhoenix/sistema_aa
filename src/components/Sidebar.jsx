"use client"
import Link from "next/link";

const Sidebar = ({user}) => {
  return (
    <aside className="bg-slate-400">
      <div className="h-[20%] flex flex-col justify-center text-center">
        <h1 className="text-4xl">{user.name}</h1>
      </div>
      <div className="h-[60%] flex flex-col gap-[1rem] pl-[2rem]">
        <Link href={"/dashboard"}>Sistema A&A</Link>
        <Link href={"/dashboard/addcustomer"}>Agregar cliente</Link>
        <Link href={"/dashboard"}>Capital Sistema A&A</Link>
        <Link href={"/dashboard"}>Ganancias Sistema A&A</Link>
        <Link href={"/dashboard"}>Inversores Principales</Link>
        <Link href={"/dashboard"}>Inversores Externos</Link>
        <Link href={"/dashboard"}>Cuentas por Pagar</Link>
        <Link href={"/dashboard"}>Inversores Externos</Link>
        <Link href={"/api/auth/signin"}>Cerrar Sesión</Link>

      </div>
    </aside>
  );
};

export default Sidebar;
