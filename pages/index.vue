<script setup lang="ts">
import { content } from '~/constants/home'
</script>

<template>
  <NuxtLayout>
    <VideoHeader
      :title="content.header.title"
      :subtitle="content.header.subtitle"
      :video="content.header.video"
    />
    <div class="bg-white pb-20 pt-4 rounded-t-2xl relative -top-4">
      <ImageText
        :title="content.ourApproach.title"
        :text="content.ourApproach.text"
        :image="content.ourApproach.image"
      />
      <ImageText
        :id="content.aboutUs.id"
        :title="content.aboutUs.title"
        :text="content.aboutUs.text"
        :image="content.aboutUs.image"
        image-right
      />
    </div>
    <Film :images="content.marquee.images" />
    <!-- <ImageBanner :image="content.imageBanner.image" /> -->
    <Faq
      :title="content.faq.title"
      :questions="content.faq.questions"
      class="mt-20"
    />
  </NuxtLayout>
</template>
