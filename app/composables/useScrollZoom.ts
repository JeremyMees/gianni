export function useScrollZoom(imageSelector: string, triggerSelector: string) {
  let kill: (() => void) | undefined

  onMounted(async () => {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ])
    gsap.registerPlugin(ScrollTrigger)

    const tween = gsap.from(imageSelector, {
      scrollTrigger: {
        trigger: triggerSelector,
        toggleActions: 'restart none none none',
        scrub: 1,
      },
      scale: 1.3,
      ease: 'power2.out',
    })

    kill = () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  })

  onBeforeUnmount(() => kill?.())
}
