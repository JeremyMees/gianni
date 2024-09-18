<script setup lang="ts">
defineProps<{
  image: string
  title: string
  text: string
}>()
</script>

<template>
  <div class="grid md:grid-cols-2">
    <div class="md:pr-8 py-4 aspect-[14/9] overflow-hidden">
      <img
        :src="image"
        alt="Content image"
        class="w-full h-full object-cover"
      >
    </div>
    <div class="md:pl-8 py-4 md:border-l border-black flex flex-col justify-center gap-y-3">
      <h3 class="font-bold">
        {{ title }}
      </h3>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>
