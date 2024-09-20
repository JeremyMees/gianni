<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import VideoPlayer from './VideoPlayer.vue'
import 'swiper/css'

defineProps<{
  title: string
  text: string
  items: { name: string, video: string }[]
}>()

const swiperRef = ref<InstanceType<typeof Swiper>>()
const videos = ref<InstanceType<typeof VideoPlayer>[]>()

watch(() => swiperRef.value?.$el.swiper.activeIndex, (index, oldVal) => {
  if (oldVal === undefined) return

  if (videos.value && videos.value[index]) {
    videos.value[index].play()
    videos.value[swiperRef.value?.$el.swiper.previousIndex].pause()
  }
})
</script>

<template>
  <section class="mb-20">
    <div class="content-wrapper text-center pb-10">
      <h2 class="text-4xl font-bold uppercase pb-6">
        {{ title }}
      </h2>
      <p>
        {{ text }}
      </p>
    </div>
    <Swiper
      ref="swiperRef"
      slides-per-view="auto"
      grab-cursor
      centered-slides
      rewind
      :initial-slide="1"
      :speed="1000"
    >
      <SwiperSlide
        v-for="item in items"
        :key="item.video"
        class="max-w-[80vw] md:max-w-[55vw] mx-5"
      >
        <VideoPlayer
          :id="item.video"
          ref="videos"
          alt="Carousel image"
          class="rounded-xl h-full md:w-full object-cover overflow-hidden"
        />
      </SwiperSlide>
    </Swiper>
    <div
      v-if="swiperRef"
      class="content-wrapper text-center pt-10"
    >
      <AnimationExpand>
        <template
          v-for="(item, i) in items"
          :key="item.name"
        >
          <p
            v-if="i === swiperRef.$el.swiper.activeIndex"
            class="font-bold text-lg uppercase"
          >
            {{ items[i].name }}
          </p>
        </template>
      </AnimationExpand>
    </div>
  </section>
</template>
