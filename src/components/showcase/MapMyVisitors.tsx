import { useEffect, useRef, useState } from "react"

export function MapMyVisitors() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptAddedRef = useRef(false)
  const [containerWidth, setContainerWidth] = useState(0)

  // Measure container width
  useEffect(() => {
    if (!containerRef.current) return

    const updateWidth = () => {
      if (containerRef.current) {
        // Get container width minus padding (p-4 = 16px * 2 = 32px)
        const width = containerRef.current.clientWidth - 32
        setContainerWidth(Math.floor(width))
      }
    }

    updateWidth()

    // Update on resize
    const resizeObserver = new ResizeObserver(updateWidth)
    resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [])

  // Load script when we have the width
  useEffect(() => {
    if (!containerRef.current || scriptAddedRef.current || containerWidth === 0) return

    // Remove any existing mapmyvisitors elements first
    const existingScript = document.getElementById("mapmyvisitors")
    if (existingScript) existingScript.remove()
    const existingWidget = document.getElementById("mapmyvisitors-widget")
    if (existingWidget) existingWidget.remove()

    // Create and append script directly to the container with dynamic width
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.id = "mapmyvisitors"
    script.src = `https://mapmyvisitors.com/map.js?cl=ffffff&w=${containerWidth}&t=n&d=7I1ySOZzz6_tws4Fp2G7ErX6SwjarouXvh-HoqgzBlU`

    containerRef.current.appendChild(script)
    scriptAddedRef.current = true

    return () => {
      // Cleanup on unmount
      const script = document.getElementById("mapmyvisitors")
      if (script) script.remove()
      const widget = document.getElementById("mapmyvisitors-widget")
      if (widget) widget.remove()
      scriptAddedRef.current = false
    }
  }, [containerWidth])

  return (
    <div className="mt-24">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Visitor Map</h3>
        <p className="text-gray-600 dark:text-gray-400">See where my visitors come from around the world.</p>
      </div>

      {/* Map Widget Container - script will be appended here and widget created after it */}
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          className="flex justify-center items-center min-h-[450px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-4 overflow-hidden"
        />
      </div>
    </div>
  )
}
