<script setup lang="ts">
const colorMode = useColorMode()
const { locale, setLocale } = useI18n()
const language = ['id', 'en']

const onLanguage = (value: string) => {
  setLocale(value)
}
</script>

<template>
  <div class="social">
    <div class="social-wrapper">
      <ClientOnly>
        <div class="hidden lg:block ">
          <div v-if="colorMode.value === 'light'" @click="colorMode.preference = 'dark'">
            <IconLight class="social-icon social-icon-light cursor-pointer" />
          </div>
          <div v-else @click="colorMode.preference = 'light'">
            <IconMoon class="social-icon social-icon-dark cursor-pointer" />
          </div>
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
      <NuxtLink
        to="https://docs.google.com/document/d/1PdL_Jx2d44g9zHnY_mdRYw68LBDnhMA5Al4OczdPXaw/edit?tab=t.0#heading=h.y0ojq6k2gcqu"
        target="_blank">
        <IconResume2 class="social-icon social-icon-media" />
      </NuxtLink>

    </div>
    <div class="lang invisible lg:visible">
      <USelectMenu v-model="locale" @update:modelValue="onLanguage" :options="language" :popper="{ placement: 'top' }"
        selected-icon="i-heroicons-check-badge"
        :ui-menu="{ option: { selectedIcon: { base: '!h-10 w-5 text-amber-500 dark:text-teal-300 flex-shrink-0' } } }">

        <template #label>
          <div class="uppercase">{{ locale }}</div>
        </template>

        <template #option="{ option }">
          <span class="uppercase">{{ option }}</span>
        </template>
      </USelectMenu>

      <!-- This section will be comment, maybe in the future i will uncomment this section -->
      <!-- 
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
      -->

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
