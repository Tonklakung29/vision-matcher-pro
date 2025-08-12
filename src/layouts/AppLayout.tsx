import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b flex items-center gap-3 px-4">
            <SidebarTrigger />
            <div className="font-semibold">Vision Matcher Pro</div>
          </header>
          <main className="flex-1 p-4 container mx-auto animate-fade-in">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
