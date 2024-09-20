<script setup lang="ts">
import { links } from '~/constants/navigation'

const mobileNavOpen = ref<boolean>(false)
const mobileNav = ref<HTMLElement>()

onClickOutside(mobileNav, () => mobileNavOpen.value = false)
</script>

<template>
  <header
    ref="mobileNav"
    class="transition-all duration-500 ease-in-out absolute left-0 right-0 z-10"
  >
    <div class="content-wrapper flex items-center justify-between py-6 relative z-10">
      <NuxtLink
        class="py-4"
        to="/"
      >
        <span class="uppercase text-white text-2xl font-bold">
          Kamino Media
        </span>
      </NuxtLink>

      <nav
        class="hidden lg:block"
        role="navigation"
        aria-label="Main menu"
      >
        <ul class="flex items-center gap-6 bg-white/40 backdrop-blur-sm px-8 h-[52px] rounded-full text-black shadow-lg">
          <li
            v-for="{ link, label } in links"
            :key="label"
            class="border-r last:border-none border-white/40 pr-6 last:pr-0 font-medium"
          >
            <NuxtLink
              :to="link"
              class="whitespace-nowrap uppercase"
            >
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <NuxtLink
        to="#contact"
        class="hidden lg:flex group"
      >
        <div class="relative flex items-center uppercase text-lg bg-white text-black font-semibold px-7 py-3 rounded-full group-hover:rounded-r-none group-hover:pr-0 transition-all duration-300">
          Contact
        </div>

        <div class="flex items-center justify-center w-[52px] h-[52px] transition-all duration-300 bg-white rounded-full group-hover:rounded-l-none">
          <Icon
            name="ic:baseline-east"
            class="w-6 h-8 transition-all duration-300 -rotate-45 group-hover:rotate-0"
          />
        </div>
      </NuxtLink>

      <button
        class="flex items-center justify-center w-[52px] h-[52px] lg:hidden bg-white/40 backdrop-blur-sm text-gray-200 rounded-lg"
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

    <AnimationSlideIn>
      <nav
        v-if="mobileNavOpen"
        class="lg:hidden bg-black rounded-b-[100px] absolute top-0 left-0 right-0 pt-20"
        role="navigation"
        aria-label="Main menu"
      >
        <ul class="flex flex-col items-center justify-center p-8">
          <li
            v-for="{ link, label } in links"
            :key="label"
          >
            <NuxtLink
              :to="link"
              class="inline-block py-4 whitespace-nowrap uppercase text-white"
              @click="mobileNavOpen = false"
            >
              {{ label }}
            </NuxtLink>
          </li>
          <NuxtLink
            to="#contact"
            @click="mobileNavOpen = false"
          >
            <div class="flex items-center uppercase text-lg bg-white text-black font-semibold rounded-full px-7 py-3">
              Contact
            </div>
          </NuxtLink>
        </ul>
      </nav>
    </AnimationSlideIn>
  </header>
</template>
