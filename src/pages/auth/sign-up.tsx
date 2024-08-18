import { Link } from "react-router-dom";

export function SignUp(){
  return (
    <div className="flex flex-col justify-between h-full overflow-auto py-[72px] px-[80px]">
      <h1 className="font-title text-gray-500 text-2xl font-bold">Crie sua conta</h1>
      <p className="text-gray-300">Informe os seus dados pessoais e de acesso</p>
      <form>
        <fieldset className="flex flex-col gap-5 my-10">
          <legend className="mb-3">Perfil</legend>
          <input className="block" type="file" />

          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" placeholder="Seu nome completo" className="w-full py-3 border-b-[1px] border-gray-100 placeholder:text-gray-200" />
          </div>

          <div>
            <label htmlFor="phone">Telefone</label>
            <input type="text" name="phone" id="phone" placeholder="(00) 00000-0000" className="w-full py-3 border-b-[1px] border-gray-100 placeholder:text-gray-200" />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-5 my-12">
          <legend className="mb-3">Acesso</legend>
          <div>
            <label className="text-gray-300 uppercase" htmlFor="email">E-mail</label>
            <input placeholder="Seu e-mail de acesso" className="w-full py-3 border-b-[1px] border-gray-100 placeholder:text-gray-200" type="email" name="email" id="email" />
          </div>

          <div>
            <label className="text-gray-300 uppercase" htmlFor="password">Senha</label>
            <input placeholder="Senha de acesso" className="w-full py-3 border-b-[1px] border-gray-100 placeholder:text-gray-200" type="password" name="password" id="password" />
          </div>
          <div>
            <label className="text-gray-300 uppercase" htmlFor="password">Confirmar senha</label>
            <input placeholder="Confirme a senha" className="w-full py-3 border-b-[1px] border-gray-100 placeholder:text-gray-200" type="password" name="password" id="password" />
          </div>
        </fieldset>

        <button type="submit" className="bg-orange-base w-full text-white text-left rounded-lg p-5">Cadastrar</button>
      </form>

      <footer className="flex flex-col gap-5 mt-20">
        <p>Já tem uma conta?</p>
        <Link
          className="bg-white border-orange-base border-[1px] w-full text-orange-base text-left rounded-lg p-5"
          to='/sign-in'
        >
          Acessar
        </Link>
      </footer>
    </div>
  )
}