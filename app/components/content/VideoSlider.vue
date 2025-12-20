<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import VideoPlayer from '../VideoPlayer.vue'
import 'swiper/css'

defineProps<{
  title: string
  text: string
  items: { name: string, video: string, thumbnail: string }[]
}>()

const isSmall = useMediaQuery('(max-width: 768px)')

const swiperRef = ref<InstanceType<typeof Swiper>>()
const videos = ref<InstanceType<typeof VideoPlayer>[]>()

watch(() => swiperRef.value?.$el.swiper.activeIndex, (index, oldVal) => {
  if (oldVal === undefined) return

  if (videos.value && videos.value[index]) {
    videos.value[swiperRef.value?.$el.swiper.previousIndex].reset()
  }
})
</script>

<template>
  <section class="mb-20">
    <div class="content-wrapper text-center pb-10">
      <h2
        class="text-4xl font-bold uppercase pb-6"
        data-aos="fade-up"
      >
        {{ title }}
      </h2>
      <p
        class="max-w-prose mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {{ text }}
      </p>
    </div>
    <Swiper
      ref="swiperRef"
      slides-per-view="auto"
      grab-cursor
      centered-slides
      rewind
      :initial-slide="isSmall || items.length < 3 ? 0 : 1"
      :speed="1000"
    >
      <SwiperSlide
        v-for="item in items"
        :key="item.video"
        class="max-w-[80vw] md:max-w-[55vw] mx-5"
      >
        <VideoPlayer
          ref="videos"
          :path="item.video"
          :thumbnail="item.thumbnail"
          controls
        />
      </SwiperSlide>
    </Swiper>
    <div
      v-if="swiperRef"
      class="content-wrapper text-center mt-10 h-6 overflow-hidden"
    >
      <AnimationExpand>
        <template
          v-for="(item, i) in items"
          :key="item.name"
        >
          <p
            v-if="i === swiperRef.$el.swiper.activeIndex"
            class="font-black text-2xl uppercase"
          >
            {{ items[i].name }}
          </p>
        </template>
      </AnimationExpand>
    </div>
  </section>
</template>
