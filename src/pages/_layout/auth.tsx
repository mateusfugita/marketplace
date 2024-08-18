import { Outlet } from "react-router-dom";

import background from '@/assets/background.png'
import logo from '@/assets/Logo.svg'

export function AuthLayout(){
  return (
    <div className="bg-background grid h-screen grid-cols-3 antialiased p-6 overflow-hidden">
      <div className="col-span-2 flex flex-col w-full p-4 gap-6">
        <img className="w-[270px]" src={logo} alt="Marketplace: Painel de Vendedor" />
        <div className="flex items-center justify-center h-full">
          <img className="w-full max-w-[720px]" src={background} alt="" />
        </div>
      </div>

      <div className="col-span-1 flex flex-col h-full w-full">
        <div className="bg-white w-full h-full py-[72px] px-[80px] rounded-[32px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}