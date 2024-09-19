<script setup lang="ts">
defineProps<{ image: string }>()
</script>

<template>
  <div
    class="bg-black py-2 w-[500px] px-1"
  >
    <div class="pb-2 flex flex-items gap-2">
      <span
        v-for="i in 20"
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
      <span
        v-for="i in 20"
        :key="`top-film-${i}`"
        class="w-4 h-4 rounded bg-white"
      />
    </div>
  </div>
</template>
