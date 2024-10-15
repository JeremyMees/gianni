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
  reset: resetVideo,
})

const videoPlayer = ref<HTMLVideoElement>()
const isPlaying = ref<boolean>(false)
const firstPlay = ref<boolean>(true)

function playVideo(): void {
  if (firstPlay.value) firstPlay.value = false

  videoPlayer.value?.play()
}

function pauseVideo(): void {
  videoPlayer.value?.pause()
}

function resetVideo(): void {
  isPlaying.value = false
  firstPlay.value = true
  videoPlayer.value?.pause()
}
</script>

<template>
  <div class="relative aspect-video flex flex-col justify-center bg-black rounded-xl overflow-hidden">
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
      @ended="() => {
        isPlaying = false
        firstPlay = true
      }"
      @pause="isPlaying = false"
    >
      Your browser does not support the video tag.
    </video>
    <div
      v-if="firstPlay && !isPlaying"
      class="absolute inset-0"
      :class="{ 'bg-black/50': !thumbnail }"
    >
      <button
        class="absolute z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
        @click="isPlaying ? pauseVideo() : playVideo()"
      >
        <Icon
          name="lucide:play"
          class="w-6 h-6"
        />
      </button>
      <NuxtImg
        :src="thumbnail"
        alt="Video thumbnail"
        width="320"
        height="180"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </div>
</template>
