<script setup lang="ts">
</script>

<template>
  <div class="container-gradient"></div>
  <PartialNavbarMobile />

  <div class="container">
    <div class="content">
      <header class="content-wrapper">
        <div class="relative">
          <LayoutHeader />
          <LayoutSkill />
          <LayoutNavigation />
        </div>
        <div>
          <LayoutSocial />
        </div>
      </header>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.container {
  @apply max-w-screen-xl;
  @apply min-h-screen;
  @apply px-6;
  @apply pt-12;
  @apply mx-auto;
  @apply font-sans;
  @apply md:px-12;
  @apply md:pt-20;
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

    background: radial-gradient(600px at 1297px 211px, rgba(29, 78, 216, 0.15), transparent 80%);
  }
}

.content {
  @apply lg:grid;
  @apply lg:grid-cols-2;
  @apply lg:gap-x-4;
  @apply lg:min-h-screen;

  &-wrapper {
    @apply lg:sticky;
    @apply lg:top-0;
    @apply lg:flex;
    @apply lg:max-h-screen;
    @apply lg:flex-col;
    @apply lg:justify-between;
    @apply lg:py-14;
    @apply xl:py-24;
  }
}
</style>
