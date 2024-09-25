<script setup lang="ts">
import { VideoShowcase, LazyVideoShowcase } from '#components'

defineProps<{
  teaser: string
  items: {
    video: string
    name: string
    text: string
    link?: string
  }[]
}>()
</script>

<template>
  <div class="bg-white pb-20 pt-4 rounded-t-2xl relative -top-4">
    <InfoCard>
      {{ teaser }}
    </InfoCard>
    <component
      :is="i < 2 ? VideoShowcase: LazyVideoShowcase"
      v-for="(item, i) in items"
      :key="item.name"
      :name="item.name"
      :text="item.text"
      :video="item.video"
      :link="item.link"
      :variant="(i + 1) % 2 === 0"
      :last="i === items.length - 1"
      :class="i === 0 ? 'mt-[100px] md:mt-0' : ''"
    />
  </div>
</template>
