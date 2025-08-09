import { useState } from "react"
import { 
  LayoutDashboard, 
  FileText, 
  Images, 
  MapPin, 
  Users, 
  BarChart3, 
  Settings, 
  Plus,
  Eye
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "../components/ui/sidebar"

const items = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Posts", url: "/admin/posts", icon: FileText },
  { title: "Gallery", url: "/admin/gallery", icon: Images },
  { title: "Destinations", url: "/admin/destinations", icon: MapPin },
  { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Settings", url: "/admin/settings", icon: Settings },
]

const quickActions = [
  { title: "New Post", url: "/admin/posts/new", icon: Plus },
  { title: "View Site", url: "/", icon: Eye },
]

export function AdminSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path
  const isExpanded = items.some((i) => isActive(i.url))
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" : "hover:bg-muted/50"

  return (
    <Sidebar
      className={state === "collapsed" ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-card border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
            </div>
            {state === "expanded" && (
              <div>
                <h2 className="font-semibold text-sm">Admin Panel</h2>
                <p className="text-xs text-muted-foreground">Travel Blog</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {state === "expanded" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickActions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className="hover:bg-muted/50">
                      <item.icon className="mr-2 h-4 w-4" />
                      {state === "expanded" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}