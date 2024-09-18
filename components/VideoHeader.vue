<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="relative overflow-hidden w-full h-[300px] bg-slate-200 flex flex-col items-center justify-center gap-8">
    <h1 class="uppercase">
      {{ title }}
    </h1>
    <span>
      {{ subtitle }}
    </span>
  </div>
</template>
