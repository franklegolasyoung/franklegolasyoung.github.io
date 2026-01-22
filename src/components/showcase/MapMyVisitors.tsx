import { useEffect } from "react"

export function MapMyVisitors() {
  useEffect(() => {
    // Check if script already exists to prevent duplicates
    if (document.getElementById("mapmyvisitors")) {
      return
    }

    // Create script element - MUST use exact ID "mapmyvisitors" as required by the service
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.id = "mapmyvisitors"
    script.src = "https://mapmyvisitors.com/map.js?cl=d2efd6&w=300&t=n&d=7I1ySOZzz6_tws4Fp2G7ErX6SwjarouXvh-HoqgzBlU&co=2d78ad&ct=ffffff&cmo=3acc3a&cmn=ff5353"

    // Append to document body as required by MapMyVisitors
    document.body.appendChild(script)

    // Cleanup function
    return () => {
      const scriptElement = document.getElementById("mapmyvisitors")
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

      {/* Map Widget Container - the script will inject the map here */}
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center min-h-[350px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-6">
          <div id="mapmyvisitors-container" className="flex justify-center items-center" />
        </div>
      </div>
    </div>
  )
}
