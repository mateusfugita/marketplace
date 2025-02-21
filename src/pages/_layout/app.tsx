import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout(){
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <div className="flex mt-16 w-full justify-center">
        <Outlet />
      </div>
    </div>
  )
}