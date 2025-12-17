import { motion } from "motion/react"
import { Card } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { ArrowUpRight } from "lucide-react"
import pixcloudImg from "../../assets/images/pixcloud.jpg"
import chatlahImg from "../../assets/images/chatlah.png"
import cospedImg from "../../assets/images/cosped.png"
import zoteroImg from "../../assets/images/zotero.png"

const projects = [
  {
    title: "PixCloud",
    description:
      "Image storage, sharing, and collaboration platform powered by Spring Boot, Vue, MySQL, Redis, AWS, COS Storage, Kafka, and CDN acceleration.",
    image: pixcloudImg,
    stack: ["Spring Boot", "Vue", "MySQL", "Redis", "AWS"]
  },
  {
    title: "ChatLah",
    description:
      "RAG-Agent system for equities research that fuses market news, prices, retrieval/reranking, and structured LLM reasoning to produce traceable investment briefs.",
    image: chatlahImg,
    stack: ["LangChain", "PostgreSQL", "AWS", "RAG", "Agents"]
  },
  {
    title: "CoSPED Research Paper",
    description:
      "First-author AAAI-26 paper introducing a consistent soft prompt targeted data extraction framework plus defensive strategies for LLM privacy.",
    image: cospedImg,
    stack: ["Research", "LLM Security", "AAAI-26"]
  },
  {
    title: "Zotero Snap",
    description:
      "Maintainer for the Linux Snap Store build of Zotero, simplifying installation and lifecycle management for research teams on Linux.",
    image: zoteroImg,
    stack: ["Zotero", "Snapcraft", "DevOps"]
  }
]

export function Projects() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0f0f0f]" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
             <h2 className="text-3xl font-bold mb-4">Research and Work Projects</h2>
             <p className="text-gray-600 dark:text-gray-400 max-w-lg">
               A collection of projects that demonstrate my passion for building high-quality software.
             </p>
          </div>
          <a
            href="https://github.com/franklegolasyoung"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-[#5000CA] font-medium hover:underline"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.stack.map(tech => (
                    <Badge key={tech} className="bg-white/20 text-white border-none hover:bg-white/30 backdrop-blur-md">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://github.com/franklegolasyoung"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#5000CA] font-medium hover:underline"
          >
            View All <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
