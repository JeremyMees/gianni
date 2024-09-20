<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  video: string
}>()
</script>

<template>
  <section class="relative overflow-hidden w-full h-[400px] lg:h-auto lg:aspect-[22/9]">
    <video
      ref="videoPlayer"
      :src="video"
      autoplay
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover"
    >
      Your browser does not support the video tag.
    </video>
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
