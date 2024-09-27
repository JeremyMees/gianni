<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle: string
    image: string
    rounded?: boolean
  }>(), {
    rounded: false,
  },
)
</script>

<template>
  <section
    class="relative overflow-hidden w-full h-[600px] lg:h-auto lg:aspect-[40/17]"
    :class="{ 'rounded-b-2xl': rounded }"
  >
    <NuxtImg
      :src="image"
      :alt="title"
      sizes="xs:320px sm:640px md:768px lg:1024px xl:1280px 2xl:1536px"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8 text-white">
      <h1 class="uppercase text-3xl md:text-[50px] lg:text-[70px] font-black drop-shadow-xl">
        {{ title }}
      </h1>
      <span class="text-xl font-bold text-center drop-shadow-xl">
        {{ subtitle }}
      </span>
    </div>
  </section>
</template>
