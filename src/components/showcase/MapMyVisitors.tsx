import { useEffect, useRef } from "react"

export function MapMyVisitors() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Move the MapMyVisitors widget into our container
    const widget = document.getElementById("mapmyvisitors-widget")
    if (widget && containerRef.current) {
      containerRef.current.appendChild(widget)
    }

    // Cleanup - move widget back to body on unmount
    return () => {
      const widget = document.getElementById("mapmyvisitors-widget")
      if (widget) {
        document.body.appendChild(widget)
      }
    }
  }, [])

  return (
    <div className="mt-24">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Visitor Map</h3>
        <p className="text-gray-600 dark:text-gray-400">See where my visitors come from around the world.</p>
      </div>

      {/* Map Widget Container - the widget from index.html will be moved here */}
      <div className="max-w-4xl mx-auto">
        <div
          ref={containerRef}
          className="flex justify-center items-center min-h-[350px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-6 overflow-hidden"
        />
      </div>
    </div>
  )
}
