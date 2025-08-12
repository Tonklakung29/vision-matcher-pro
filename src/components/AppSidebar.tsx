import { NavLink } from "react-router-dom";
import { Camera, Video, ScanSearch, Database, Box, Cpu, Cloud, Settings, Bell, Users, Activity, Gauge } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: Gauge },
  { title: "Cameras", url: "/cameras", icon: Camera },
  { title: "Streams", url: "/streams", icon: Video },
  { title: "Matching", url: "/matching", icon: ScanSearch },
  { title: "Datasets", url: "/datasets", icon: Database },
  { title: "Models", url: "/models", icon: Cpu },
  { title: "Training", url: "/training", icon: Activity },
  { title: "Storage", url: "/storage", icon: Cloud },
  { title: "Alerts", url: "/alerts", icon: Bell },
  { title: "Users", url: "/users", icon: Users },
  { title: "Monitoring", url: "/monitoring", icon: Box },
  { title: "Settings", url: "/settings", icon: Settings },
];

export default function AppSidebar() {

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-muted text-foreground font-medium"
      : "hover:bg-muted/60";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end={item.url === "/"} className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
