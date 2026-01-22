import { useEffect, useRef, useState } from "react"

export function MapMyVisitors() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isDark, setIsDark] = useState<boolean | null>(null)
  const currentThemeRef = useRef<boolean | null>(null)

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
    if (!containerRef.current) return

    const updateWidth = () => {
      if (containerRef.current) {
        const rawWidth = containerRef.current.clientWidth - 32
        const width = Math.max(rawWidth, 200)
        setContainerWidth(Math.floor(width))
      }
    }
    updateWidth()

    const resizeObserver = new ResizeObserver(updateWidth)
    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  // Load script when width is ready or theme changes
  useEffect(() => {
    if (isDark === null || containerWidth === 0 || !containerRef.current) return

    // Skip if theme hasn't changed
    if (currentThemeRef.current === isDark) return
    currentThemeRef.current = isDark

    // Remove any existing mapmyvisitors elements
    const existingScript = document.getElementById("mapmyvisitors")
    if (existingScript) existingScript.remove()
    const existingWidget = document.getElementById("mapmyvisitors-widget")
    if (existingWidget) existingWidget.remove()

    // Create script with exact parameter order as required by MapMyVisitors
    const co = isDark ? "0f0f0f" : "ffffff"
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.id = "mapmyvisitors"
    script.src = `https://mapmyvisitors.com/map.js?cl=5000CA&w=${containerWidth}&t=n&d=7I1ySOZzz6_tws4Fp2G7ErX6SwjarouXvh-HoqgzBlU&co=${co}&cmo=00f3ff&cmn=ff1e1e&ct=808080`

    containerRef.current.appendChild(script)

    return () => {
      const script = document.getElementById("mapmyvisitors")
      if (script) script.remove()
      const widget = document.getElementById("mapmyvisitors-widget")
      if (widget) widget.remove()
    }
  }, [containerWidth, isDark])

  return (
    <div className="mt-24">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Visitor Map</h3>
        <p className="text-gray-600 dark:text-gray-400">See where my visitors come from around the world.</p>
      </div>

      {/* Map Widget Container */}
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          className="flex justify-center items-center min-h-[450px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-4 overflow-hidden"
        />
      </div>
    </div>
  )
}
