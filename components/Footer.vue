<script setup lang="ts">
import { links } from '~/constants/footer'
</script>

<template>
  <footer
    id="contact"
    class="bg-black text-white rounded-t-2xl lg:rounded-t-[100px]"
  >
    <div class="content-wrapper grid lg:grid-cols-4 gap-y-8 py-14 lg:pt-20">
      <NuxtLink to="/">
        Kamino Media
      </NuxtLink>
      <div
        v-for="column in links"
        :key="column.title"
        class="space-y-4"
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
              class="flex items-center gap-2"
            >
              <Icon
                v-if="'icon' in item"
                :name="item.icon"
                class="w-5 h-5"
              />
              <span v-if="item.label">
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
