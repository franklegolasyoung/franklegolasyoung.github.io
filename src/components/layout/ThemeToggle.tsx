import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light"
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") return stored
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  })
  const [isManual, setIsManual] = React.useState(() => {
    if (typeof window === "undefined") return false
    const stored = localStorage.getItem("theme")
    return stored === "light" || stored === "dark"
  })

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleMediaChange = () => {
      if (!isManual) {
        setTheme(mediaQuery.matches ? "dark" : "light")
      }
    }
    mediaQuery.addEventListener("change", handleMediaChange)
    return () => mediaQuery.removeEventListener("change", handleMediaChange)
  }, [isManual])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    setIsManual(true)
    localStorage.setItem("theme", newTheme)
  }

  React.useEffect(() => {
    if (!isManual && typeof window !== "undefined") {
      const stored = localStorage.getItem("theme")
      if (stored === "light" || stored === "dark") {
        setTheme(stored)
        setIsManual(true)
      }
    }
  }, [isManual])

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
