<script setup lang="ts">
import { links } from '~/constants/navigation'

const mobileNavOpen = ref<boolean>(false)
const mobileNav = ref<HTMLElement>()

onClickOutside(mobileNav, () => mobileNavOpen.value = false)
</script>

<template>
  <header
    ref="mobileNav"
    class="transition-all duration-300 ease-in-out absolute left-0 right-0 z-10"
  >
    <div class="content-wrapper flex items-center justify-between lg:grid lg:grid-cols-12 relative z-10">
      <NuxtLink
        class="py-4 col-span-3"
        to="/"
        data-aos="fade-right"
        aria-label="Link to Home"
      >
        <SvgoFullLogo class="min-w-[200px] min-h-[100px] text-white" />
      </NuxtLink>

      <nav
        class="hidden lg:flex justify-center col-span-6"
        role="navigation"
        aria-label="Main menu"
        data-aos="fade-down"
      >
        <ul class="flex items-center gap-6 bg-white/40 backdrop-blur-sm px-8 h-[52px] rounded-full text-black shadow-lg">
          <li
            v-for="{ link, label } in links"
            :key="label"
            class="border-r last:border-none border-white/40 pr-6 last:pr-0 font-bold"
          >
            <NuxtLink
              :to="link"
              class="whitespace-nowrap uppercase"
              :aria-label="`Link to ${label}`"
            >
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="hidden lg:flex col-span-3 justify-end">
        <ContactButton />
      </div>

      <button
        class="flex items-center justify-center w-[52px] h-[52px] lg:hidden bg-white/40 backdrop-blur-sm text-gray-200 rounded-lg"
        aria-label="Toggle navigation"
        role="button"
        data-aos="fade-left"
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
        class="lg:hidden bg-black rounded-b-[32px] absolute top-0 left-0 right-0 pt-[100px]"
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
              :aria-label="`Link to ${label}`"
              @click="mobileNavOpen = false"
            >
              {{ label }}
            </NuxtLink>
          </li>
          <ContactButton @click="mobileNavOpen = false" />
        </ul>
      </nav>
    </AnimationSlideIn>
  </header>
</template>
