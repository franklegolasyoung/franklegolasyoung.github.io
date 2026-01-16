import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Badge } from "../ui/badge"
import { Calendar } from "lucide-react"

const timelineData = [
  {
    year: "2024 - Present",
    title: "Cyber Security Engineer",
    company: "ST Engineering • Singapore",
    description:
      "Researching privacy attacks and defenses for LLM systems and delivering GenAI security tooling for enterprise programs.",
    tags: ["LLM Security", "GenAI", "Safety Research"]
  },
  {
    year: "2024 - Present",
    title: "Full-stack Self-motivated Developer",
    company: "Independent • Singapore",
    description:
      "Shipping LangChain workflows, Spring Boot backends, and production ML experiments for personal ventures and freelance clients.",
    tags: ["LangChain", "Spring Boot", "Docker"]
  },
  {
    year: "2022 - 2024",
    title: "M.Sc Artificial Intelligence",
    company: "Nanyang Technological University",
    description:
      "Focused on large language models, deep learning, computer vision, natural language processing, and time series analysis.",
    tags: ["LLMs", "Deep Learning", "NLP"]
  },
  {
    year: "2018 - 2022",
    title: "B.Eng Computer Science",
    company: "Harbin Institute of Technology",
    description: "Built a rigorous foundation in algorithms, operating systems, and user experience design.",
    tags: ["Algorithms", "Systems", "UX"]
  }
]

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-24" ref={containerRef}>
      <div className="container mx-auto px-4">
         <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-4">Journey</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A chronological overview of my professional career and growth.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Central Line - Fixed Dashed with Gradient Mask */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed border-gray-300 dark:border-gray-700 -translate-x-1/2 z-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]" />
          
          {/* Animated Line Progress - Solid */}
          <motion.div 
            style={{ height }}
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-[#5000CA] -translate-x-1/2 origin-top z-10 shadow-[0_0_10px_rgba(80,0,202,0.5)]" 
          />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}
    >
      {/* Connector Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-[#0a0a0a] bg-[#5000CA] z-20 shadow-lg" />
      
      {/* Connector Line to Next Item (Visual Only) - Hidden on mobile, visible on desktop */}
      {!isEven && (
         <div className="hidden md:block absolute left-1/2 top-4 bottom-[-64px] w-0 border-l-2 border-dashed border-gray-300 dark:border-gray-700 -translate-x-1/2 z-0 opacity-50" />
      )}

      {/* Content Side (Year) */}
      <div className={`pl-12 md:pl-0 ${isEven ? "md:text-right" : "md:text-left md:order-last"}`}>
         <div className="hidden md:block">
            <h3 className="text-2xl font-bold text-[#5000CA] dark:text-[#8040FF]">{item.year}</h3>
         </div>
      </div>

      {/* Detail Side (Card) */}
      <div className={`pl-12 md:pl-0 ${isEven ? "md:text-left" : "md:text-right"}`}>
         <div className={`p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow ${!isEven && "md:text-left"}`}>
             <span className="md:hidden text-[#5000CA] font-bold text-sm mb-2 block">{item.year}</span>
             <h4 className="text-lg font-bold">{item.title}</h4>
             <p className="text-[#00CACC] font-medium text-sm mb-3 flex items-center gap-2">
               <BriefcaseIcon className="w-3 h-3" /> {item.company}
             </p>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
               {item.description}
             </p>
             <div className="flex flex-wrap gap-2">
               {item.tags.map((tag: string) => (
                 <Badge key={tag} variant="neutral" className="text-xs">{tag}</Badge>
               ))}
             </div>
         </div>
      </div>
    </motion.div>
  )
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}
