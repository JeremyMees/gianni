<script setup lang="ts">
defineProps<{
  prices: {
    name: string
    price: number
    features: string[]
  }[]
}>()

const isSmall = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <section class="mt-[160px] mb-20 content-wrapper pb-10 grid lg:grid-cols-3 gap-8">
    <ClientOnly>
      <div
        v-for="({ price, name, features }, i) in prices"
        :key="name"
        class="p-10 pb-20 rounded-[32px] shadow-2xl flex flex-col relative"
        :class="{
          'bg-black text-white lg:top-8': i !== 1,
          'bg-white text-black': i === 1,
        }"
        data-aos="fade-up"
        :data-aos-delay="isSmall ? 0 : 500 * (i + 1)"
      >
        <div
          class="flex flex-col text-center border-b pb-4"
          :class="[i === 1 ? 'border-black/20' : 'border-white/20']"
        >
          <h2 class="text-4xl font-bold">
            {{ name }}
          </h2>
          <h3 class="text-[50px] font-bold">
            €{{ price }}
          </h3>
        </div>
        <ul class="list-disc ml-5 flex flex-col gap-2 pt-10">
          <li
            v-for="feature in features"
            :key="feature"
          >
            {{ feature }}
          </li>
        </ul>
      </div>
    </ClientOnly>
  </section>
</template>
