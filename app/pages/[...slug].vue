<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogImage: page.value?.meta?.image as any,
  robots: 'index, follow',
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
  <div
    v-else
    class="grow flex flex-col items-center justify-center content-wrapper bg-black text-white"
  >
    <h1 class="text-3xl font-black drop-shadow-xl">
      Pagina niet gevonden
    </h1>
  </div>
</template>
