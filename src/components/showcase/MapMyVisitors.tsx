import { useEffect, useRef } from "react"

export function MapMyVisitors() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptAddedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || scriptAddedRef.current) return

    // Remove any existing mapmyvisitors elements first
    const existingScript = document.getElementById("mapmyvisitors")
    if (existingScript) existingScript.remove()
    const existingWidget = document.getElementById("mapmyvisitors-widget")
    if (existingWidget) existingWidget.remove()

    // Create and append script directly to the container
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.id = "mapmyvisitors"
    script.src = "https://mapmyvisitors.com/map.js?cl=ffffff&w=320&t=n&d=7I1ySOZzz6_tws4Fp2G7ErX6SwjarouXvh-HoqgzBlU"

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
  }, [])

  return (
    <div className="mt-24">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Visitor Map</h3>
        <p className="text-gray-600 dark:text-gray-400">See where my visitors come from around the world.</p>
      </div>

      {/* Map Widget Container - script will be appended here and widget created after it */}
      <div className="max-w-2xl mx-auto">
        <div
          ref={containerRef}
          className="flex justify-center items-center min-h-[400px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-4 overflow-hidden"
        />
      </div>
    </div>
  )
}
