import { motion } from "motion/react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { SHOWCASE_DATA } from "../../lib/data"

export function Expertise() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">
            I bring a comprehensive set of skills to the table, spanning cybersecurity, AI/ML systems, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOWCASE_DATA.expertise.map((item, index) => {
            const Icon = item.icon
            return (
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
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="neutral" className="bg-gray-100 dark:bg-gray-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
