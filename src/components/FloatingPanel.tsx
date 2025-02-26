import { ReactNode } from 'react'

interface FloatingPanelProps {
  title: string
  children: ReactNode
  className?: string
}

export function FloatingPanel({ title, children, className = "" }: FloatingPanelProps) {
  return (
    <div className={`bg-black/70 backdrop-blur-sm rounded-lg text-white p-6 shadow-xl z-50 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  )
}
