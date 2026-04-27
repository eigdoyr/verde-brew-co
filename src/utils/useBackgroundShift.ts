import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function useBackgroundShift(className: string, threshold = 0.6) {
  const { ref, inView } = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      document.body.classList.add(className)
    } else {
      document.body.classList.remove(className)
    }

    return () => {
      document.body.classList.remove(className)
    }
  }, [inView, className])

  return { ref }
}
