import { motion } from "motion/react"
import { SHOWCASE_DATA } from "../../lib/data"

export function About() {
  const renderParagraphWithEmail = (paragraph: string) => {
    const emailRegex = /(\S+@\S+\.\S+)/g
    const parts = paragraph.split(emailRegex)

    return parts.map((part, i) => {
      if (emailRegex.test(part)) {
        return (
          <a
            key={i}
            href={`mailto:${part}`}
            className="text-[#5000CA] hover:text-[#00CACC] transition-colors underline decoration-[#5000CA]/30 hover:decoration-[#00CACC]"
          >
            {part}
          </a>
        )
      }
      return part
    })
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#5000CA] to-[#00CACC] mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-6">
            {SHOWCASE_DATA.about.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify"
              >
                {renderParagraphWithEmail(paragraph)}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
