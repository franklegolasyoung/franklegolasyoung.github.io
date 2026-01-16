import * as React from "react"
import { ThemeToggle } from "./ThemeToggle"
import { Briefcase, LayoutTemplate } from "lucide-react"
import { motion } from "motion/react"
import { cn } from "../lib/utils"
import { PERSONAL_INFO } from "../../lib/data"

import { ScrollToTop } from "../ui/ScrollToTop"

interface LayoutProps {
  children: React.ReactNode
  currentView: "showcase" | "cv"
  onViewChange: (view: "showcase" | "cv") => void
}

export function Layout({ children, currentView, onViewChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <ScrollToTop />
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#5000CA] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#5000CA]/20">
              {PERSONAL_INFO.initials}
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">{PERSONAL_INFO.name}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Animated Toggle Switch */}
            <div className="relative flex p-1 bg-gray-100 dark:bg-gray-900 rounded-full select-none">
               {/* Background Slider */}
               <motion.div 
                 className="absolute top-1 bottom-1 left-1 rounded-full bg-white dark:bg-gray-800 shadow-sm"
                 initial={false}
                 animate={{ 
                   x: currentView === "showcase" ? "0%" : "100%",
                 }}
                 style={{ width: "calc(50% - 4px)" }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
               />
               
               <motion.button
                 onClick={() => onViewChange("showcase")}
                 whileTap={{ scale: 0.95 }}
                 className={cn(
                   "relative z-10 flex items-center justify-center gap-2 px-6 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full flex-1",
                   currentView === "showcase" ? "text-[#5000CA] dark:text-[#8040FF]" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                 )}
               >
                 <LayoutTemplate className="w-4 h-4 shrink-0" />
                 <span className="hidden sm:inline whitespace-nowrap">Showcase</span>
               </motion.button>

               <motion.button
                 onClick={() => onViewChange("cv")}
                 whileTap={{ scale: 0.95 }}
                 className={cn(
                   "relative z-10 flex items-center justify-center gap-2 px-6 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full flex-1",
                   currentView === "cv" ? "text-[#5000CA] dark:text-[#8040FF]" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                 )}
               >
                 <Briefcase className="w-4 h-4 shrink-0" />
                 <span className="hidden sm:inline whitespace-nowrap">Resume</span>
               </motion.button>
            </div>

            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
            
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="w-full">
        {children}
      </main>
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
