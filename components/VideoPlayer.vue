<script setup lang="ts">
withDefaults(
  defineProps<{
    path: string
    thumbnail: string
    autoplay?: boolean
    controls?: boolean
    muted?: boolean
    loop?: boolean
  }>(),
  {
    autoplay: false,
    controls: false,
    muted: false,
    loop: false,
  },
)

defineExpose({
  play: playVideo,
  pause: pauseVideo,
})

const videoPlayer = ref<HTMLVideoElement>()
const isPlaying = ref<boolean>(false)

function playVideo(): void {
  videoPlayer.value?.play()
}

function pauseVideo(): void {
  videoPlayer.value?.pause()
}
</script>

<template>
  <div
    class="relative aspect-video flex flex-col justify-center bg-black rounded-xl overflow-hidden"
  >
    <video
      ref="videoPlayer"
      :src="path"
      :autoplay="autoplay"
      :muted="muted"
      :loop="loop"
      :controls="controls"
      playsinline
      class="w-full"
      @playing="isPlaying = true"
      @ended="isPlaying = false"
      @pause="isPlaying = false"
    >
      Your browser does not support the video tag.
    </video>
    <div
      v-if="!isPlaying"
      class="absolute inset-0"
    >
      <button
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
        @click="isPlaying ? pauseVideo() : playVideo()"
      >
        <Icon
          name="lucide:play"
          class="w-6 h-6"
        />
      </button>
      <NuxtImg
        v-if="thumbnail"
        :src="thumbnail"
        alt="Video thumbnail"
        width="320"
        height="180"
        class="absolute inset-0 z-10"
      />
    </div>
  </div>
</template>
