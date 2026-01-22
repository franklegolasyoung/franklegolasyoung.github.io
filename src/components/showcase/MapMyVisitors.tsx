import { useEffect } from "react"

export function MapMyVisitors() {
  useEffect(() => {
    // Create script element for the globe widget
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.id = "mmvst_globe"
    script.src = "https://mapmyvisitors.com/globe.js?d=G00Icc1PlUiLUuWvwTl81hU_dProxdBz99lgG6Knx5E"

    // Append to the globe container
    const container = document.getElementById("globe-widget-container")
    if (container) {
      container.appendChild(script)
    }

    // Cleanup function
    return () => {
      const scriptElement = document.getElementById("mmvst_globe")
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [])

  return (
    <div className="mt-24">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Visitor Map</h3>
        <p className="text-gray-600 dark:text-gray-400">See where my visitors come from around the world.</p>
      </div>

      {/* Globe Widget Container */}
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center min-h-[450px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-6">
          <div id="globe-widget-container" className="flex justify-center items-center" />
        </div>
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-4">
          Globe widget will display after deployment to the live site.
        </p>
      </div>
    </div>
  )
}
