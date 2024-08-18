import { ReactNode } from "react"

interface MetricCardProps {
  icon: ReactNode
  value: number
  description: string
}

export function MetricCard({ icon, value, description }: MetricCardProps){
  return (
    <div className="flex items-center gap-4 bg-white p-3 pr-6 rounded-2xl">
      <div className="bg-blue-light rounded-xl w-[80px] h-[86px] flex items-center justify-center">
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-title font-bold text-3xl text-gray-400">
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </span>
        <p className="text-wrap text-gray-300 text-xs">
          {description}
        </p>
      </div>
    </div>
  )
}