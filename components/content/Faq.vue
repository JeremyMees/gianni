<script setup lang="ts">
defineProps<{
  title: string
  questions: { question: string, answer: string }[]
}>()

const isOpen = ref<number | null>()

function toggleOpen(index: number): void {
  isOpen.value = isOpen.value === index ? null : index
}
</script>

<template>
  <section class="max-w-[800px] w-full mx-auto flex flex-col bg-gray-100 py-10 rounded-[32px] shadow-lg">
    <h2 class="text-4xl font-bold uppercase px-3 sm:px-10 pb-6">
      {{ title }}
    </h2>
    <div class="w-full flex flex-col">
      <div
        v-for="(item, i) in questions"
        :key="item.question"
        class="border-b border-white last:border-none"
      >
        <button
          class="px-3 sm:px-10 py-3 flex justify-between items-center uppercase text-left"
          @click="toggleOpen(i)"
        >
          {{ item.question }}
        </button>
        <AnimationExpand>
          <div
            v-if="isOpen === i"
            @click="isOpen = null"
          >
            <div class="px-3 sm:px-10 pb-3 flex items-center gap-2">
              <Icon
                name="lucide:arrow-right"
                class="min-w-5 min-h-5"
              />
              <p>
                {{ item.answer }}
              </p>
            </div>
          </div>
        </AnimationExpand>
      </div>
    </div>
  </section>
</template>
