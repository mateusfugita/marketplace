import { CircleDollarSign, Store, Users } from "lucide-react"
import { MetricCard } from "./components/metric-card"

export function Dashboard(){
  return (
    <main className="flex flex-col gap-10 max-w-[1030px] w-full">
      <div>
        <h1 className="font-title font-bold text-2xl text-gray-500">Últimos 30 dias</h1>
        <p className="text-sm text-gray-300">Confira as estatísticas da sua loja no último mês</p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col gap-4 col-span-1">
          <MetricCard icon={<CircleDollarSign className="w-9 h-9 stroke-blue-dark" />} value={24} description="Produtos vendidos" />
          <MetricCard icon={<Store className="w-9 h-9 stroke-blue-dark" />} value={56} description="Produtos anunciados" />
          <MetricCard icon={<Users className="w-9 h-9 stroke-gray-300" />} value={1238} description="Pessoas visitantes" />
        </div>

        <div className="col-span-3 bg-white rounded-2xl">Dashboard</div>
      </div>
    </main>
  )
}