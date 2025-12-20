<script setup lang="ts">
import { gsap } from 'gsap'

defineProps<{ image: string }>()

const id = useId()

onMounted(() => {
  gsap.from(`#img-${id}`, {
    scrollTrigger: {
      trigger: `#img-container-${id}`,
      toggleActions: 'restart none none none',
      scrub: 1,
    },
    scale: 1.3,
    ease: 'power2.out',
  })
})
</script>

<template>
  <section
    :id="`img-container-${id}`"
    class="h-[300px] sm:h-[500px] w-full overflow-hidden my-[120px] rounded-2xl"
  >
    <NuxtImg
      :id="`img-${id}`"
      :src="image"
      alt="Content image"
      sizes="640px md:768px lg:1024px xl:1280px 2xl:1536px"
      class="w-full h-full object-cover object-left"
      loading="lazy"
    />
  </section>
</template>
