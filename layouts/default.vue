<script setup lang="ts">
</script>

<template>
  <div class="container-gradient"
    style="background: radial-gradient(600px at 1297px 211px, rgba(29, 78, 216, 0.15), transparent 80%);"></div>

  <div class="container">
    <div class="content">
      <header class="content-wrapper">
        <Header />
        <Skill />
      </header>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.container {
  @apply max-w-screen-xl;
  @apply min-h-screen;
  @apply px-6 py-12;
  @apply mx-auto;
  @apply font-sans;
  @apply md:px-12;
  @apply md:py-20;
  @apply lg:px-24;
  @apply lg:py-0;

  &-gradient {
    @apply fixed;
    @apply inset-0;
    @apply z-30;
    @apply transition;
    @apply duration-300;
    @apply pointer-events-none;
    @apply lg:absolute;
  }
}

.content {
  @apply lg:grid;
  @apply lg:grid-cols-2;
  @apply lg:gap-x-4;

  &-wrapper {
    @apply lg:sticky;
    @apply lg:top-0;
    @apply lg:flex;
    @apply lg:max-h-screen;
    @apply lg:flex-col;
    @apply lg:justify-between;
    @apply lg:py-24;
  }
}
</style>
