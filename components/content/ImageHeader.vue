<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  image: string
}>()
</script>

<template>
  <section class="relative overflow-hidden w-full h-[600px] lg:h-auto lg:aspect-[40/17]">
    <img
      :src="image"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover"
    >
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8 text-white">
      <h1 class="uppercase text-3xl md:text-[50px] lg:text-[70px] font-black">
        {{ title }}
      </h1>
      <span class="text-xl font-bold text-center">
        {{ subtitle }}
      </span>
    </div>
  </section>
</template>
