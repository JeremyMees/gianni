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
      <div class="absolute -top-10 right-0 left-0 flex justify-center">
        <p class="text-sm text-center max-w-[600px] p-5 bg-gray-100 rounded-[32px] shadow-lg">
          {{ content.teaser }}
        </p>
      </div>
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
        :class="i === 0 ? 'mt-[100px] md:mt-0' : ''"
      />
    </div>
  </NuxtLayout>
</template>
