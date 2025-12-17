import { motion } from "motion/react"
import { Card, CardContent } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Cpu, Layout, Server } from "lucide-react"

const expertise = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Full Stack Development",
    description:
      "Experienced in building scalable web applications using Spring Boot, Flask, and FastAPI. Proficient across frontend (React, TypeScript) and backend development with a strong understanding of RESTful APIs and microservices architecture.",
    skills: ["Spring Boot", "React", "TypeScript", "FastAPI", "PostgreSQL", "Microservices"]
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "DevOps & Cloud Infrastructure",
    description:
      "Skilled in containerization, orchestration, and cloud deployment. Comfortable with distributed systems and CI/CD pipelines running on AWS and GCP.",
    skills: ["Docker", "Kafka", "GitHub Actions", "AWS", "GCP", "Nginx"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI & LLM Security",
    description:
      "Building intelligent applications with LLMs, RAG systems, and AI agents while researching security and safety for generative AI systems.",
    skills: ["PyTorch", "LangGraph", "RAG", "LLM Security", "Agents", "MCP"]
  }
]

export function Expertise() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">
            I bring a comprehensive set of skills to the table, covering the full spectrum of web and mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-[#5000CA]/50 transition-colors group">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 rounded-xl bg-[#5000CA]/5 text-[#5000CA] w-fit group-hover:bg-[#5000CA] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <Badge key={skill} variant="neutral" className="bg-gray-100 dark:bg-gray-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
