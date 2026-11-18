<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  // TODO: throw createError({ statusCode: 404 }) once a custom error page exists
  useRobotsRule('noindex, nofollow')
}

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
  ogType: 'website',
  ogLocale: 'nl_BE',
  ogImage: () => page.value?.image,
  twitterCard: 'summary_large_image',
  twitterImage: () => page.value?.image,
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <div
    v-else
    class="grow flex flex-col items-center justify-center content-wrapper bg-black text-white"
  >
    <h1 class="text-3xl font-black drop-shadow-xl">Pagina niet gevonden</h1>
  </div>
</template>
