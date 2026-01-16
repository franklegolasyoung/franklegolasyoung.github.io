import { motion } from "motion/react"
import { Button } from "../ui/button"
import { PERSONAL_INFO } from "../../lib/data"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#5000CA]/20 rounded-full blur-[100px] animate-pulse" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#00CACC]/20 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div>
             <span className="inline-block px-3 py-1 rounded-full bg-[#5000CA]/10 text-[#5000CA] dark:text-[#8040FF] text-sm font-medium mb-4">
               {PERSONAL_INFO.role.split('@')[0].trim()}
             </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4">
               Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5000CA] to-[#00CACC]">{PERSONAL_INFO.name}</span>.
             </h1>
             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
               {PERSONAL_INFO.tagline}
             </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-[#5000CA]/30 bg-[#5000CA] hover:bg-[#3f009a] text-white" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base shadow-lg shadow-[#5000CA]/15 bg-white/80 text-[#5000CA] dark:bg-[#5000CA]/20 dark:text-[#5000CA] dark:border-[#5000CA]/50 hover:bg-white hover:text-[#5000CA] dark:hover:bg-[#5000CA] dark:hover:text-white"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            {PERSONAL_INFO.socials.map((social) => {
              const Icon = social.icon
              return (
                <SocialLink
                  key={social.name}
                  icon={<Icon className="w-5 h-5" />}
                  href={social.url}
                  label={social.name}
                />
              )
            })}
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="relative"
        >
          <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-64 md:w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#5000CA] to-[#00CACC] rotate-3 opacity-20 transform translate-x-4 translate-y-4" />
            <img
              src={PERSONAL_INFO.photo}
              alt={`Portrait of ${PERSONAL_INFO.name}`}
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <a 
      href={href}
      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#5000CA] hover:text-white dark:hover:bg-[#5000CA] dark:hover:text-white transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
