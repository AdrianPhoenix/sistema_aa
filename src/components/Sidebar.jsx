"use client"
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-black text-[#AB9144] font-bold">
      <div className="h-[20%] flex flex-col justify-center text-center">
        <h1 className="text-4xl ">Sistema A&A</h1>
      </div>
      <div className="h-[60%] flex flex-col gap-[1rem] pl-[2rem] text-lg">
        <Link href={"/dashboard"}>Dashboard</Link>
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
