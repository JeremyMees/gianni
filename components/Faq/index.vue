<script setup lang="ts">
defineProps<{
  title: string
  questions: { question: string, answer: string }[]
}>()
</script>

<template>
  <div class="space-y-6">
    <h2 class="text-center uppercase">
      {{ title }}
    </h2>
    <div class="max-w-[800px] flex flex-col">
      <FaqItem
        v-for="(item, i) in questions"
        :key="item.question"
        :question="item.question"
        :answer="item.answer"
        :first="i === 0"
        :last="i === questions.length - 1"
      />
    </div>
  </div>
</template>
