<script setup lang="ts">
const colorMode = useColorMode()
const { locale, setLocale } = useI18n()

</script>

<template>
  <div class="social">
    <div class="social-wrapper">
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
    <div class="lang invisible lg:visible">
      <div class="lang-wrapper" @click="setLocale('id')">
        <div :class="{ 'lang-active': locale === 'id' }">
          <p class="text-center">Bahasa</p>
        </div>
      </div>
      <div class="lang-wrapper" @click="setLocale('en')">
        <div :class="{ 'lang-active': locale === 'en' }">
          <p class="text-center">English</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.social {
  @apply flex;
  @apply items-end;
  @apply justify-between;

  &-wrapper {
    @apply flex;
    @apply flex-row;
    @apply gap-x-6;
  }

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

.lang {
  @apply pr-10;
  @apply text-sm;
  @apply flex gap-x-2;

  &-wrapper {
    @apply cursor-pointer;
    @apply w-[55px];
  }

  &-active {
    @apply border-teal-500;
    @apply text-teal-500;
    @apply dark:text-teal-400;
    @apply dark:border-white;
  }
}
</style>
