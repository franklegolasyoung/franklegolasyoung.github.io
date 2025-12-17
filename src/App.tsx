import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Layout } from "./components/layout/Layout"
import { Hero } from "./components/showcase/Hero"
import { Expertise } from "./components/showcase/Expertise"
import { Timeline } from "./components/showcase/Timeline"
import { Projects } from "./components/showcase/Projects"
import { Contact } from "./components/showcase/Contact"
import { Footer } from "./components/layout/Footer"
import { CVHeader } from "./components/cv/CVHeader"
import { CVContent } from "./components/cv/CVContent"

export default function App() {
  const [currentView, setCurrentView] = React.useState<"showcase" | "cv">("showcase")
  const [shouldResetScroll, setShouldResetScroll] = React.useState(false)

  const handleViewChange = (view: "showcase" | "cv") => {
    if (view !== currentView) {
      setCurrentView(view)
      setShouldResetScroll(true)
    }
  }

  return (
    <Layout currentView={currentView} onViewChange={handleViewChange}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (shouldResetScroll) {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" })
            setShouldResetScroll(false)
          }
        }}
      >
        {currentView === "showcase" ? (
          <motion.div
            key="showcase"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <Expertise />
            <Timeline />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="cv"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white dark:bg-[#0a0a0a] min-h-screen"
          >
            <CVHeader />
            <CVContent />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}
