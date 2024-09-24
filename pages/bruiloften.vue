<script setup lang="ts">
import { content } from '~/constants/bruiloften'
import { VideoShowcase, LazyVideoShowcase } from '#components'
</script>

<template>
  <NuxtLayout>
    <ImageHeader
      :title="content.header.title"
      :subtitle="content.header.subtitle"
      :image="content.header.image"
    />
    <div class="bg-white pb-20 pt-4 rounded-t-2xl relative -top-4">
      <component
        :is="i < 2 ? VideoShowcase: LazyVideoShowcase"
        v-for="(item, i) in content.weddings"
        :key="item.name"
        :name="item.name"
        :text="item.text"
        :video="item.video"
        :link="item.link"
        :variant="(i + 1) % 2 === 0"
        :last="i === content.weddings.length - 1"
      />
    </div>
  </NuxtLayout>
</template>
