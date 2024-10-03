<template>
  <NuxtLink
    to="#contact"
    class="group flex w-fit"
    data-aos="fade-left"
    aria-label="Scroll to Contact"
  >
    <div class="relative flex items-center uppercase text-lg bg-white text-black font-semibold px-7 py-3 rounded-full group-hover:rounded-r-none group-hover:pr-0 transition-all duration-300">
      Contact
    </div>

    <div class="flex items-center justify-center w-[52px] h-[52px] transition-all duration-300 bg-white rounded-full group-hover:rounded-l-none">
      <Icon
        name="lucide:arrow-right"
        class="w-6 h-8 transition-all duration-300 -rotate-45 group-hover:rotate-0"
      />
    </div>
  </NuxtLink>
</template>
