<script setup lang="ts">
withDefaults(
  defineProps<{
    image: string
    title: string
    text: string
    imageRight?: boolean
  }>(), {
    imageRight: false,
  },
)
</script>

<template>
  <div
    :class="[
      imageRight ? 'md:bg-white md:text-black' : 'md:bg-black md:text-white',
    ]"
  >
    <div
      class="grid md:grid-cols-2 gap-x-10 content-wrapper rounded-b-2xl py-12"
      :class="[
        imageRight ? 'md:bg-black md:text-white' : 'md:bg-white md:text-black',
      ]"
    >
      <div
        class="py-4 aspect-[14/9] overflow-hidden"
        :class="[imageRight ? 'md:order-2' : 'md:order-1']"
      >
        <img
          :src="image"
          alt="Content image"
          class="w-full h-full object-cover rounded-2xl"
        >
      </div>
      <div
        class="py-4 flex flex-col justify-center gap-y-3"
        :class="[imageRight ? 'md:order-1' : 'md:order-2']"
      >
        <h3 class="font-bold text-lg uppercase">
          {{ title }}
        </h3>
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
