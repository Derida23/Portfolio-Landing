<script setup lang="ts">
const colorMode = useColorMode()

console.log(colorMode.value)
</script>

<template>
  <div class="social">
    <ClientOnly>
      <div v-if="colorMode.value === 'light'" @click="colorMode.preference = 'dark'">
        <IconLight class="social-icon social-icon-light cursor-pointer" />
      </div>
      <div v-else @click="colorMode.preference = 'light'">
        <IconMoon class="social-icon social-icon-dark cursor-pointer" />
      </div>
    </ClientOnly>
    <NuxtLink to="https://github.com/Derida23" target="_blank">
      <IconGithub class="social-icon social-icon-media" />
    </NuxtLink>
    <a href="mailto:arianderida@gmail.com">
      <IconGmail class="social-icon social-icon-media" />
    </a>
    <NuxtLink to="https://www.linkedin.com/in/arianderida/" target="_blank">
      <IconLinkedin class="social-icon social-icon-media" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="postcss">
.social {
  @apply flex;
  @apply flex-row;
  @apply gap-x-6;

  &-icon {
    @apply hover:text-gray-500;
    @apply dark:hover:text-white;
    @apply !mb-0;
    @apply text-2xl;

    &-media {
      @apply text-gray-700;
      @apply dark:text-gray-400;
    }

    &-light {
      @apply text-amber-500;
    }

    &-dark {
      @apply text-teal-300;
    }
  }

}
</style>
