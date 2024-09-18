<script setup lang="ts">
defineProps<{
  question: string
  answer: string
}>()

const isOpen = ref<boolean>(false)
</script>

<template>
  <div class="w-full flex flex-col">
    <button
      class="px-3 sm:px-7 pb-3 pt-3 flex justify-between items-center border-b border-black uppercase transition-colors delay-200 duration-500 text-left"
      :class="{
        'border-transparent pb-2': isOpen,
      }"
      @click="isOpen = !isOpen"
    >
      {{ question }}
    </button>
    <AnimationExpand>
      <div
        v-if="isOpen"
        class="border-b border-black"
        @click="isOpen = false"
      >
        <p class="px-3 sm:px-7 pb-3">
          -> {{ answer }}
        </p>
      </div>
    </AnimationExpand>
  </div>
</template>
