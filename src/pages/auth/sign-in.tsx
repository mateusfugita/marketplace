import { Link } from "react-router-dom";

export function SignIn(){
  return (
    <div className="flex flex-col justify-between h-full">
      <form>
        <h1 className="font-title text-gray-500 text-2xl font-bold">Acesse sua conta</h1>
        <p className="text-gray-300">Informe seu e-mail e senha para entrar</p>

        <div className="flex flex-col gap-5 my-12">
          <div className="space-y-2">
            <label htmlFor="email">E-mail</label>
            <input className="w-full border-b-[1px] placeholder:Seu-email cadastrado" type="email" name="email" id="email" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password">Senha</label>
            <input className="w-full border-b-[1px] placeholder:Seu-email cadastrado" type="password" name="password" id="password" />
          </div>
        </div>

        <button type="submit" className="bg-orange-base w-full text-white text-left rounded-lg p-5">Acessar</button>
      </form>

      <footer className="flex flex-col gap-5">
        <p>Ainda não tem uma conta?</p>
        <Link className="bg-white border-orange-base border-[1px] w-full text-orange-base text-left rounded-lg p-5" to='/sign-up'>Cadastrar</Link>
      </footer>
    </div>
  )
}