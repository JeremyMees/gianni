<script setup lang="ts">
defineProps<{ image: string }>()
</script>

<template>
  <div class="h-[300px] w-full overflow-hidden">
    <img
      :src="image"
      alt="Content image"
      class="w-full h-full object-cover"
    >
  </div>
</template>
