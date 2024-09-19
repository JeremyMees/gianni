<script setup lang="ts">
defineProps<{ image: string }>()
</script>

<template>
  <div
    class="bg-black py-2 w-[300px] xl:w-[500px] 2xl:w-[700px] px-1 shadow-lg"
  >
    <div class="pb-2 flex gap-2 space-between">
      <span
        v-for="i in 8"
        :key="`top-film-${i}`"
        class="min-w-6 grow h-4 rounded bg-white shadow-inner"
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
    <div class="pt-2 flex gap-2 space-between">
      <span
        v-for="i in 8"
        :key="`bottom-film-${i}`"
        class="min-w-6 grow h-4 rounded bg-white shadow-inner"
      />
    </div>
  </div>
</template>
