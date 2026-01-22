import { useEffect, useRef, useState } from "react"

export function MapMyVisitors() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isDark, setIsDark] = useState<boolean | null>(null)

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
        const width = containerRef.current.clientWidth - 32
        setContainerWidth(Math.floor(width))
      }
    }
    updateWidth()

    const resizeObserver = new ResizeObserver(updateWidth)
    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  // Generate iframe HTML for each theme
  const generateIframeContent = (co: string) => `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: transparent; }
        </style>
      </head>
      <body>
        <script type="text/javascript" id="mapmyvisitors" src="https://mapmyvisitors.com/map.js?cl=135d9e&w=${containerWidth}&t=n&d=7I1ySOZzz6_tws4Fp2G7ErX6SwjarouXvh-HoqgzBlU&co=${co}&cmo=3acc3a&cmn=ff5353&ct=808080"></script>
      </body>
    </html>
  `

  const isReady = isDark !== null && containerWidth > 0

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
          className="relative min-h-[450px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0f0f0f] p-4 overflow-hidden"
        >
          {isReady && (
            <>
              {/* Light theme iframe */}
              <iframe
                srcDoc={generateIframeContent("ffffff")}
                className={`absolute inset-0 w-full h-full border-0 ${isDark ? "hidden" : ""}`}
                title="Visitor Map Light"
              />
              {/* Dark theme iframe */}
              <iframe
                srcDoc={generateIframeContent("000000")}
                className={`absolute inset-0 w-full h-full border-0 ${isDark ? "" : "hidden"}`}
                title="Visitor Map Dark"
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
