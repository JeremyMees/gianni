<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string
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
    class="relative"
    @click="isPlaying ? pauseVideo() : playVideo()"
  >
    <video
      ref="videoPlayer"
      src="/videos/placeholder.mp4"
      :autoplay="autoplay"
      :muted="muted"
      :loop="loop"
      :controls="controls"
      playsinline
      @playing="isPlaying = true"
      @ended="isPlaying = false"
      @pause="isPlaying = false"
    >
      Your browser does not support the video tag.
    </video>
    <div
      v-if="!isPlaying"
      class="absolute inset-0 bg-black/50"
    >
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <Icon
          name="lucide:play"
          class="w-6 h-6"
        />
      </div>
    </div>
  </div>
</template>
