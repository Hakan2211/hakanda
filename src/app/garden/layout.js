import { Sidebar } from "@/components/garden/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function GardenLayout({ children }) {
  return (
    // h-screen ensures the app feel. overflow-hidden prevents double scrolls.
    <div className="flex h-screen overflow-hidden bg-background pt-[120px]">
      
      {/* LEFT SIDEBAR - Hidden on mobile, block on md */}
      <aside className="hidden w-64 border-r border-border/40 bg-background/60 backdrop-blur-xl md:block">
        <ScrollArea className="h-full">
          <Sidebar />
        </ScrollArea>
      </aside>

      {/* RIGHT CONTENT - The Outlet */}
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden p-4 border-b flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
               <Sidebar />
            </SheetContent>
          </Sheet>
          <span className="ml-4 font-bold">My Digital Garden</span>
        </div>
        <div className="container max-w-4xl py-6 lg:py-10">
          {children}
        </div>
      </main>
    </div>
  )
}

