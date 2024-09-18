<script setup lang="ts">
import { content } from '~/constants/home'
</script>

<template>
  <NuxtLayout>
    <VideoHeader
      :title="content.header.title"
      :subtitle="content.header.subtitle"
    />
    <ImageText
      :title="content.imageText.title"
      :text="content.imageText.text"
      :image="content.imageText.image"
      class="content-wrapper"
    />
    <ImageBanner :image="content.imageBanner.image" />
    <Faq
      :title="content.faq.title"
      :questions="content.faq.questions"
      class="content-wrapper"
    />
  </NuxtLayout>
</template>
