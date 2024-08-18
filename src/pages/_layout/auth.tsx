import { Outlet } from "react-router-dom";

import background from '@/assets/background.png'
import logo from '@/assets/Logo.svg'

export function AuthLayout(){
  return (
    <div className="bg-background grid w-screen h-screen grid-cols-3 antialiased p-6 fixed">
      <div className="col-span-2 flex flex-col w-full p-4 gap-6">
        <div className="flex gap-5 items-center">
          <img className="w-24" src={logo} />
          <div>
            <h1 className="font-title font-bold text-2xl text-gray-500">Marketplace</h1>
            <span className="text-gray-400">Painel de Vendedor</span>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <img className="w-full max-w-[720px]" src={background} alt="" />
        </div>
      </div>

      <div className="col-span-1 flex flex-col h-full w-full overflow-auto">
        <div className="bg-white w-full h-full rounded-[32px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}