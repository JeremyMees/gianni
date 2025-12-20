<script setup lang="ts">
defineProps<{
  items: {
    title: string
    text: string
    image: string
    id?: string
  }[]
}>()
</script>

<template>
  <div class="bg-white pb-20 pt-4 rounded-t-2xl relative -top-4">
    <ImageText
      v-for="(item, i) in items"
      :id="item.id"
      :key="i"
      :title="item.title"
      :text="item.text"
      :image="item.image"
      :image-right="(i + 1) % 2 === 0"
    />
  </div>
</template>
