<script setup lang="ts">
import type { Testimonial } from '~/types'

const props = defineProps<{
  title: string
  text: string
  items: Testimonial[]
}>()

const isSmall = useMediaQuery('(max-width: 768px)')
const isLarge = useMediaQuery('(min-width: 1440px)')

const testimonials = computed<Testimonial[][]>(() => {
  const amount = isSmall.value ? 1 : isLarge.value ? 3 : 2

  return splitArray<Testimonial>(props.items, amount)
})
</script>

<template>
  <section class="my-20">
    <div class="content-wrapper text-center pb-10">
      <h2 class="text-4xl font-bold uppercase pb-6">
        {{ title }}
      </h2>
      <p class="max-w-prose mx-auto">
        {{ text }}
      </p>
    </div>
    <div
      v-if="testimonials"
      class="grid gap-8 content-wrapper"
      :style="{
        gridTemplateColumns: `repeat(${testimonials.length}, minmax(0, 1fr))`,
      }"
    >
      <div
        v-for="(column, i) in testimonials"
        :key="i"
        class="flex flex-col gap-8"
      >
        <div
          v-for="item in column"
          :key="item.name"
          class="bg-gray-100 p-6 rounded-[32px] shadow"
        >
          <div class="flex items-center gap-4">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-10 h-10 rounded-full"
            >
            <h4 class="font-bold">
              {{ item.name }}
            </h4>
          </div>
          <p class="mt-2">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
