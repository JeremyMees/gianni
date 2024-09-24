<script setup lang="ts">
defineProps<{
  video: string
  name: string
  text: string
  link?: string
  variant?: boolean
  last?: boolean
}>()

const { $refreshHardAos } = useNuxtApp()
const isSmall = useMediaQuery('(max-width: 768px)')

const sectionContainer = ref<HTMLTableSectionElement>()
const videoContainer = ref<HTMLDivElement>()
const textContainer = ref<HTMLDivElement>()

onMounted(() => {
  if (isSmall.value) {
    videoContainer.value?.removeAttribute('data-aos')
    textContainer.value?.removeAttribute('data-aos')
  }
  else {
    sectionContainer.value?.removeAttribute('data-aos')
  }

  $refreshHardAos()
})
</script>

<template>
  <section
    ref="sectionContainer"
    :class="[
      variant || last ? 'md:bg-white md:text-black' : 'md:bg-black md:text-white',
    ]"
    data-aos="fade-up"
  >
    <div
      class="rounded-b-2xl pb-12 md:pt-12"
      :class="[
        variant ? 'md:bg-black md:text-white' : 'md:bg-white md:text-black',
      ]"
    >
      <div class="grid md:grid-cols-2 gap-x-10 content-wrapper">
        <div
          ref="videoContainer"
          class="aspect-video overflow-hidden rounded-2xl shadow-lg"
          data-aos="fade-right"
        >
          <VideoPlayer
            :path="video"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          ref="textContainer"
          class="py-4 flex flex-col justify-center gap-y-3"
          data-aos="fade-left"
        >
          <h3 class="font-bold text-xl uppercase">
            {{ name }}
          </h3>
          <p>
            {{ text }}
          </p>
          <a
            v-if="link"
            :href="link"
            target="_blank"
            class="flex items-center gap-2 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg w-fit mt-6 bg-black text-white"
            :class="variant ? 'md:bg-white md:text-black' : 'md:bg-black md:text-white'"
            aria-label="Watch full video"
          >
            <Icon
              name="lucide:youtube"
              class="w-5 h-5"
            />
            <span class="ml-2">Bekijk volledige video</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
