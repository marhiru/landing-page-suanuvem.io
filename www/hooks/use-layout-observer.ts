import { useState, useEffect, useRef, useCallback } from 'react'

export interface LayoutDimensions {
  width: number
  height: number
}

export interface UseLayoutObserverReturn {
  elementRef: React.RefObject<HTMLElement | null>
  dimensions: LayoutDimensions
  isResizing: boolean
}

/**
 * Hook customizado para observar mudanças de layout usando ResizeObserver
 * Útil para animações responsivas e layout adaptativos
 */
export function useLayoutObserver(): UseLayoutObserverReturn {
  const [dimensions, setDimensions] = useState<LayoutDimensions>({ width: 0, height: 0 })
  const [isResizing, setIsResizing] = useState(false)
  const elementRef = useRef<HTMLElement>(null)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const updateDimensions = useCallback((entries: ResizeObserverEntry[]) => {
    if (entries[0]) {
      const { width, height } = entries[0].contentRect
      setDimensions({ width, height })
      setIsResizing(true)
      
      // Clear existing timeout
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      
      // Set isResizing to false after animation completes
      resizeTimeoutRef.current = setTimeout(() => {
        setIsResizing(false)
      }, 950) // Matching our spring duration
    }
  }, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const resizeObserver = new ResizeObserver(updateDimensions)
    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [updateDimensions])

  return { elementRef, dimensions, isResizing }
}

