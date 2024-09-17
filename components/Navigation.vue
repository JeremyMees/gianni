<script setup lang="ts">
import { links } from '~/constants/navigation'

const mobileNavOpen = ref<boolean>(false)
const mobileNav = ref<HTMLElement>()

onClickOutside(mobileNav, () => mobileNavOpen.value = false)
</script>

<template>
  <header
    ref="mobileNav"
    class="bg-black text-white transition-all duration-300 ease-in-out"
    :class="{
      'shadow-xl': mobileNavOpen,
    }"
  >
    <div class="content-wrapper flex items-center justify-between space-x-16">
      <NuxtLink
        class="py-4"
        to="/"
      >
        <span class="uppercase">
          Kamino Media
        </span>
      </NuxtLink>

      <nav
        class="hidden lg:block"
        role="navigation"
        aria-label="Main menu"
      >
        <ul class="flex flex-wrap space-x-10">
          <li
            v-for="{ link, label } in links"
            :key="label"
          >
            <NuxtLink
              :to="link"
              class="inline-block py-4 whitespace-nowrap uppercase"
            >
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <button
        class="p-4 lg:hidden"
        aria-label="Toggle navigation"
        role="button"
        @click="mobileNavOpen = !mobileNavOpen"
      >
        <Icon
          v-if="!mobileNavOpen"
          name="heroicons:bars-3-solid"
          class="w-8 h-8"
        />

        <Icon
          v-else
          name="heroicons:x-mark-solid"
          class="w-8 h-8"
        />
      </button>
    </div>

    <AnimationsSlideIn>
      <nav
        v-if="mobileNavOpen"
        class="lg:hidden min-h-full"
        role="navigation"
        aria-label="Main menu"
      >
        <hr class="w-full mx-auto border-white">
        <ul class="flex flex-col items-center justify-center p-8">
          <li
            v-for="{ link, label } in links"
            :key="label"
          >
            <NuxtLink
              :to="link"
              class="inline-block py-4 whitespace-nowrap uppercase"
              @click="mobileNavOpen = false"
            >
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </AnimationsSlideIn>
  </header>
</template>
