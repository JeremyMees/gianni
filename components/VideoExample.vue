<script setup lang="ts">
defineProps<{
  video: string
  name: string
  text: string
  link?: string
  variant?: boolean
  last?: boolean
}>()
</script>

<template>
  <section
    :class="[
      variant || last ? 'md:bg-white md:text-black' : 'md:bg-black md:text-white',
    ]"
  >
    <div
      class="rounded-b-2xl pb-12 md:pt-12"
      :class="[
        variant ? 'md:bg-black md:text-white' : 'md:bg-white md:text-black',
      ]"
    >
      <div class="grid md:grid-cols-2 gap-x-10 content-wrapper">
        <div class="aspect-video overflow-hidden rounded-2xl shadow-lg">
          <VideoPlayer
            :path="video"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="py-4 flex flex-col justify-center gap-y-3">
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
