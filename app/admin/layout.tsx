import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import AdminSidebar from "../components/admin-sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2 border-b px-3">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-2"
              />
              <p className="text-lg tracking-wide">Admin Dashboard</p>
            </div>
            <div className="ml-auto">
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
        </SidebarInset>
        <Toaster/>
      </SidebarProvider>
  );
}
