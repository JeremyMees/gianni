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
    class="h-[500px] w-full overflow-hidden my-[120px] rounded-2xl"
  >
    <img
      :id="`img-${id}`"
      :src="image"
      alt="Content image"
      class="w-full h-full object-cover"
    >
  </section>
</template>
