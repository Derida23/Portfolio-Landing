<template>
  <div>
    <div class="about-header">
      <h2 class="about-title">About</h2>
    </div>
    <p class="mb-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus eius repellendus, odit recusandae nemo
      minus vitae nam nostrum qui explicabo rerum numquam molestias esse facere corrupti aut eum placeat! Lorem, ipsum
      dolor sit amet consectetur adipisicing elit.
    </p>
    <p class="mb-4">
      Vero harum! Minus laudantium id natus atque ipsam? lorem ipsum dolor sit amet consectetur adipisicing elit.
      Distinctio molestiae eum nostrum explicabo optio, quam cupiditate ad blanditiis eius architecto adipisci earum
    </p>
    <p class="mb-4">
      Consectetur adipisicing elit lorem ipsum dolor sit amet . Harum, tenetur natus? Fuga, sequi?
    </p>
  </div>
</template>

<style scoped lang="postcss">
.about-header {
  @apply sticky;
  @apply top-0;
  @apply z-20;
  @apply w-screen;
  @apply px-6;
  @apply py-5;
  @apply mb-4;
  @apply -mx-6;
  @apply bg-slate-900/75;
  @apply backdrop-blur;
  @apply md:-mx-12;
  @apply md:px-12;
  @apply lg:sr-only;
  @apply lg:relative;
  @apply lg:top-auto;
  @apply lg:mx-auto;
  @apply lg:w-full;
  @apply lg:px-0;
  @apply lg:py-0;
  @apply lg:opacity-0;
}

.about-title {
  @apply text-sm;
  @apply font-bold;
  @apply tracking-widest;
  @apply uppercase;
  @apply text-slate-200;
  @apply lg:sr-only;
}
</style>
