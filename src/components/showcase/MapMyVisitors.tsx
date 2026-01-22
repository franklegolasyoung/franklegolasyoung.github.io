import { useEffect, useRef, useState } from "react"

export function MapMyVisitors() {
  const lightContainerRef = useRef<HTMLDivElement>(null)
  const darkContainerRef = useRef<HTMLDivElement>(null)
  const scriptsLoadedRef = useRef(false)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isDark, setIsDark] = useState(false)

  // Detect theme changes
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  // Measure container width
  useEffect(() => {
    const container = lightContainerRef.current || darkContainerRef.current
    if (!container) return

    const updateWidth = () => {
      if (container) {
        // Get container width minus padding (p-4 = 16px * 2 = 32px)
        const width = container.clientWidth - 32
        setContainerWidth(Math.floor(width))
      }
    }

    updateWidth()

    const resizeObserver = new ResizeObserver(updateWidth)
    resizeObserver.observe(container)

    return () => resizeObserver.disconnect()
  }, [])

  // Load both light and dark scripts when we have the width
  useEffect(() => {
    if (scriptsLoadedRef.current || containerWidth === 0) return
    if (!lightContainerRef.current || !darkContainerRef.current) return

    // Remove any existing mapmyvisitors elements first
    document.querySelectorAll('[id^="mapmyvisitors"]').forEach(el => el.remove())

    // Base URL parameters
    const baseParams = `cl=135d9e&w=${containerWidth}&t=n&d=7I1ySOZzz6_tws4Fp2G7ErX6SwjarouXvh-HoqgzBlU&cmo=3acc3a&cmn=ff5353&ct=808080`

    // Create light theme script (co=ffffff)
    const lightScript = document.createElement("script")
    lightScript.type = "text/javascript"
    lightScript.id = "mapmyvisitors-light"
    lightScript.src = `https://mapmyvisitors.com/map.js?${baseParams}&co=ffffff`
    lightContainerRef.current.appendChild(lightScript)

    // Create dark theme script (co=000000) after a short delay to avoid conflicts
    setTimeout(() => {
      if (darkContainerRef.current) {
        const darkScript = document.createElement("script")
        darkScript.type = "text/javascript"
        darkScript.id = "mapmyvisitors-dark"
        darkScript.src = `https://mapmyvisitors.com/map.js?${baseParams}&co=000000`
        darkContainerRef.current.appendChild(darkScript)
      }
    }, 500)

    scriptsLoadedRef.current = true

    return () => {
      document.querySelectorAll('[id^="mapmyvisitors"]').forEach(el => el.remove())
      scriptsLoadedRef.current = false
    }
  }, [containerWidth])

  return (
    <div className="mt-24">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Visitor Map</h3>
        <p className="text-gray-600 dark:text-gray-400">See where my visitors come from around the world.</p>
      </div>

      {/* Map Widget Container */}
      <div className="max-w-4xl mx-auto">
        <div className="relative min-h-[450px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-4 overflow-hidden">
          {/* Light theme map */}
          <div
            ref={lightContainerRef}
            className={`flex justify-center items-center w-full ${isDark ? "hidden" : ""}`}
          />
          {/* Dark theme map */}
          <div
            ref={darkContainerRef}
            className={`flex justify-center items-center w-full ${isDark ? "" : "hidden"}`}
          />
        </div>
      </div>
    </div>
  )
}
