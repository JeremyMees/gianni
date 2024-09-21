<script setup lang="ts">
defineProps<{ image: string }>()
</script>

<template>
  <section class="h-[500px] w-full overflow-hidden my-[120px] rounded-2xl">
    <img
      :src="image"
      alt="Content image"
      class="w-full h-full object-cover"
    >
  </section>
</template>
