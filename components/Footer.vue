<script setup lang="ts">
const { links } = useAppConfig().footer
</script>

<template>
  <footer
    id="contact"
    class="bg-black text-white rounded-t-2xl lg:rounded-t-[100px]"
  >
    <div class="content-wrapper flex flex-wrap flex-col md:flex-row lg:grid lg:grid-cols-4 gap-y-8 gap-x-16 justify-between lg:gap-x-6 py-14 lg:pt-20">
      <NuxtLink
        to="/"
        data-aos="fade-right"
        aria-label="Link to Home"
      >
        <SvgoLogo class="min-w-[200px] min-h-[100px] text-white" />
      </NuxtLink>
      <div
        v-for="(column, i) in links"
        :key="column.title"
        class="space-y-4"
        data-aos="fade-up"
        :data-aos-delay="100 * (i + 1)"
      >
        <span class="uppercase font-bold">
          {{ column.title }}
        </span>
        <ul class="flex flex-col gap-3">
          <li
            v-for="item in column.links"
            :key="item.label"
          >
            <NuxtLink
              :to="item.link"
              class="flex items-center gap-2 overflow-hidden"
              target="_blank"
              :aria-label="`Link to ${item.label}`"
            >
              <Icon
                v-if="'icon' in item"
                :name="item.icon"
                class="min-w-5 min-h-5"
              />
              <span
                v-if="item.label"
                class="break-words"
              >
                {{ item.label }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-wrapper py-4 text-gray-400">
      &copy;{{ new Date().getFullYear() }} Kamino Media
    </div>
  </footer>
</template>
