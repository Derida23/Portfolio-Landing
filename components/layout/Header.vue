<template>
  <h1 class="header-name">
    <LayoutName />
  </h1>
  <h2 class="header-position">
    Frontend Engineer
  </h2>
  <p class="header-description">Lorem Ipsum is simply dummy text of the printing and typesetting
    industry.</p>
</template>

<style scoped lang="postcss">
.header {
  @apply lg:grid;
  @apply lg:grid-cols-2;
  @apply lg:gap-x-4;

  &-name {
    @apply sm:text-5xl;
    @apply text-[44px];
    @apply font-bold;
    @apply tracking-tight;
    @apply text-slate-200;
  }

  &-position {
    @apply mt-3;
    @apply text-lg;
    @apply font-medium;
    @apply tracking-tight;
    @apply text-slate-200;
    @apply sm:text-xl
  }

  &-description {
    @apply max-w-xs;
    @apply mt-4;
    @apply leading-normal
  }
}
</style>
