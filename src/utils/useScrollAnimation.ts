import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(threshold = 0.1) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '0px 0px -50px 0px',
  })

  return { ref, inView }
}
