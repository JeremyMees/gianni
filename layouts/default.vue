<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <Navigation />

    <main class="relative grow pb-[140px] flex flex-col">
      <slot />
    </main>

    <Footer />
  </div>
</template>
