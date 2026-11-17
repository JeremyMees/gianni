<script setup lang="ts">
import type { Testimonial } from '@/types'

const props = defineProps<{
  title: string
  text: string
  items: Testimonial[]
}>()

const AMOUNT = 6

const testimonials = useState<Testimonial[]>('testimonials', () =>
  randomArrayItems([...props.items], AMOUNT),
)

onMounted(() => {
  testimonials.value = randomArrayItems([...props.items], AMOUNT)
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
      class="content-wrapper columns-1 md:columns-2 min-[1440px]:columns-3 gap-8"
    >
      <div
        v-for="(item, i) in testimonials"
        :key="item.name"
        class="bg-gray-100 p-6 rounded-[32px] shadow break-inside-avoid mb-8"
        :class="{ 'hidden md:block': i >= 3 }"
        data-aos="fade-up"
        :data-aos-delay="100 * ((i % 3) + 1)"
      >
        <div class="flex items-center gap-4">
          <NuxtImg
            v-if="item.image"
            :src="item.image"
            :alt="item.name"
            width="40"
            height="40"
            loading="lazy"
            class="rounded-full aspect-square w-10 h-10"
          />
          <div
            v-else
            class="w-10 h-10 rounded-full bg-white flex flex-col items-center justify-center"
          >
            <Icon name="lucide:user" class="w-6 h-6" />
          </div>
          <p class="font-bold">
            {{ item.name }}
          </p>
        </div>
        <p class="mt-2">
          {{ item.text }}
        </p>
      </div>
    </div>
  </section>
</template>
