<script setup lang="ts">
import { gsap } from 'gsap'

withDefaults(
  defineProps<{
    image: string
    title: string
    text: string
    imageRight?: boolean
  }>(), {
    imageRight: false,
  },
)

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
    :class="[
      imageRight ? 'md:bg-white md:text-black' : 'md:bg-black md:text-white',
    ]"
  >
    <div
      class="rounded-b-2xl pb-12 md:pt-12"
      :class="[
        imageRight ? 'md:bg-black md:text-white' : 'md:bg-white md:text-black',
      ]"
    >
      <div class="grid md:grid-cols-2 gap-x-10 content-wrapper">
        <div
          :id="`img-container-${id}`"
          class="aspect-[14/9] overflow-hidden rounded-2xl"
          :class="[imageRight ? 'md:order-2' : 'md:order-1']"
        >
          <img
            :id="`img-${id}`"
            :src="image"
            alt="Content image"
            class="scale-[1.05] w-full h-full object-cover"
          >
        </div>
        <div
          class="py-4 flex flex-col justify-center gap-y-3"
          :class="[imageRight ? 'md:order-1' : 'md:order-2']"
          :data-aos="imageRight ? 'fade-right' : 'fade-left'"
        >
          <h3 class="font-bold text-xl uppercase">
            {{ title }}
          </h3>
          <p>
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
