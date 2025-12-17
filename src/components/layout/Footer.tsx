import { Button } from "../ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#5000CA] flex items-center justify-center text-white font-bold text-lg">
              ZY
            </div>
            <span className="font-bold text-xl tracking-tight">Zhuochen Yang</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/franklegolasyoung" className="text-gray-500 hover:text-[#5000CA] transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/zhuochenyang/" className="text-gray-500 hover:text-[#5000CA] transition-colors">LinkedIn</a>
          <a href="https://medium.com/@frank1045325433" className="text-gray-500 hover:text-[#5000CA] transition-colors">Medium</a>
          <a href="mailto:frankyoung@outlook.sg" className="text-gray-500 hover:text-[#5000CA] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
