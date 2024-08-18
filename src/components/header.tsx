import { ChartNoAxesCombined, Package, Plus } from "lucide-react"
import { NavLink } from "./nav-link"

import logo from '@/assets/Logo.svg'

export function Header(){
  return (
    <header className="flex justify-between items-center p-6 border-shape border-b-[1px]">
      <img className="h-10" src={logo} />

      <nav className="flex gap-2">
        <NavLink to='/'>
          <ChartNoAxesCombined width={16} height={16} />
          Dashboard
        </NavLink>
        <NavLink to='/products'>
          <Package width={16} height={16} />
          Produtos
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-orange-base text-white rounded-lg py-3 px-4 text-sm">
          <Plus width={15} height={15} />
          Novo produto
        </button>
        <img
          className="ml-2 rounded-xl w-12 h-12"
          src="https://github.com/mateusfugita.png"
          alt="Foto de perfil"
        />
      </div>
    </header>
  )
}