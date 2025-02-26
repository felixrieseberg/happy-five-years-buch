import { ReactNode, useState } from 'react'

interface FloatingPanelProps {
  title: string
  children: ReactNode
  className?: string
  defaultCollapsed?: boolean
}

export function FloatingPanel({
  title,
  children,
  className = "",
  defaultCollapsed = false
}: FloatingPanelProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  return (
    <div className={`bg-black/70 backdrop-blur-sm rounded-lg text-white p-6 shadow-xl z-50 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-full hover:bg-white/10 transition-colors w-6 h-6 flex items-center justify-center"
          aria-label={isCollapsed ? "Expand panel" : "Collapse panel"}
        >
          <span className="text-lg font-bold leading-none">
            {isCollapsed ? "+" : "−"}
          </span>
        </button>
      </div>
      <div className={`transition-all duration-300 overflow-hidden ${isCollapsed ? 'max-h-0 opacity-0 invisible' : 'max-h-[1000px] opacity-100 visible'}`}>
        {children}
      </div>
    </div>
  )
}
