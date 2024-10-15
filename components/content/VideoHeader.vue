<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  video: string
}>()
</script>

<template>
  <section class="relative z-0 overflow-hidden w-full h-[600px] lg:h-auto lg:aspect-[40/17]">
    <video
      ref="videoPlayer"
      :src="video"
      autoplay
      muted
      loop
      class="absolute z-[1] inset-0 w-full h-full object-cover"
    >
      Your browser does not support the video tag.
    </video>
    <div class="absolute z-[2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8 text-white w-full px-5 md:px-20">
      <SvgoTextLogo class="min-w-full min-h-[100px] md:min-w-[600px] md:min-h-[100px] text-white" />
      <span class="text-xl font-bold text-center drop-shadow-xl">
        {{ subtitle }}
      </span>
    </div>
    <h1 class="absolute">
      {{ title }}
    </h1>
  </section>
</template>
