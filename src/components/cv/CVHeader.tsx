import { motion } from "motion/react"
import { Download, Mail, MapPin, Globe, Github, Linkedin } from "lucide-react"
import { Button } from "../ui/button"
import { PERSONAL_INFO } from "../../lib/data"

export function CVHeader() {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 pb-8 pt-12 relative z-10">
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative w-40 h-40 rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg bg-white shrink-0">
            <img 
              src={PERSONAL_INFO.photo} 
              alt="Portrait of Zhuochen Yang" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left pt-4 md:pt-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{PERSONAL_INFO.name}</h1>
            <p className="text-xl text-[#5000CA] dark:text-[#8040FF] font-medium mb-4">{PERSONAL_INFO.role}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 mt-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#5000CA] dark:hover:text-[#00CACC] transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {PERSONAL_INFO.location} (PR)
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/franklegolasyoung" target="_blank" rel="noreferrer" className="hover:text-[#5000CA] dark:hover:text-[#00CACC] transition-colors">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/zhuochenyang/" target="_blank" rel="noreferrer" className="hover:text-[#5000CA] dark:hover:text-[#00CACC] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="pb-4 pt-4 md:pt-2">
             <Button className="gap-2 shadow-lg shadow-[#5000CA]/25 bg-[#5000CA] hover:bg-[#3f009a] text-white">
               <Download className="w-4 h-4" /> Download CV
             </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
