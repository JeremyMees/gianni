<script setup lang="ts">
import { gsap } from 'gsap'

const props = defineProps<{ images: string[] }>()

const splitImages = computed<string[][]> (() => {
  const result: string[][] = []

  for (let i = 0; i < 2; i++) {
    result.push(props.images.filter((_, index) => index % 2 === i))
  }

  return result
})

onMounted(() => {
  const filmRow1 = document.querySelector('[film-row1]')
  const filmRow2 = document.querySelector('[film-row2]')

  gsap.timeline({
    scrollTrigger: {
      trigger: filmRow1,
      toggleActions: 'restart none none none',
      start: 'top 95%',
      scrub: 1,
    },
  }).fromTo(filmRow1, { x: 0 }, { x: '-25%' })

  gsap.timeline({
    scrollTrigger: {
      trigger: filmRow2,
      toggleActions: 'restart none none none',
      start: 'top 95%',
      scrub: 1,
    },
  }).fromTo(filmRow2, { x: '-25%' }, { x: 0 })
})
</script>

<template>
  <div class="flex flex-col gap-6 py-4 overflow-hidden">
    <div
      v-if="splitImages[0].length"
      film-row1
      class="flex w-screen rotate-1 shadow-lg"
    >
      <div
        v-for="image in splitImages[0]"
        :key="image"
        class="bg-black py-2 w-[500px] px-1"
      >
        <div class="pb-2 flex flex-items gap-2">
          <div
            v-for="i in 13"
            :key="`top-film-${i}`"
            class="w-4 h-4 rounded bg-white"
          />
        </div>
        <div class="flex gap-2 px-1">
          <div class="aspect-video overflow-hidden rounded-2xl">
            <img
              :src="image"
              alt="image"
              class="w-full h-full object-cover"
              loading="eager"
            >
          </div>
        </div>
        <div class="pt-2 flex flex-items gap-2">
          <div
            v-for="i in 13"
            :key="`top-film-${i}`"
            class="w-4 h-4 rounded bg-white"
          />
        </div>
      </div>
    </div>
    <div
      v-if="splitImages[1].length"
      film-row2
      class="flex w-screen -rotate-1 shadow-lg"
    >
      <div
        v-for="image in splitImages[1]"
        :key="image"
        class="bg-black py-2 w-[500px] px-1"
      >
        <div class="pb-2 flex flex-items gap-2">
          <div
            v-for="i in 13"
            :key="`top-film-${i}`"
            class="w-4 h-4 rounded bg-white"
          />
        </div>
        <div class="flex gap-2 px-1">
          <div class="aspect-video overflow-hidden rounded-2xl">
            <img
              :src="image"
              alt="image"
              class="w-full h-full object-cover"
              loading="eager"
            >
          </div>
        </div>
        <div class="pt-2 flex flex-items gap-2">
          <div
            v-for="i in 13"
            :key="`top-film-${i}`"
            class="w-4 h-4 rounded bg-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>
