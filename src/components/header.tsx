import { NavLink } from "./nav-link"

import logo from '@/assets/Logo.svg'

export function Header(){
  return (
    <header className="flex justify-between items-center p-6 border-shape border-b-[1px]">
      <img className="h-10" src={logo} />

      <nav className="flex gap-2">
        <NavLink to='/'>
          Dashboard
        </NavLink>
        <NavLink to='/products'>
          Produtos
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
        <button className="bg-orange-base text-white rounded-lg py-3 px-4 text-sm">
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