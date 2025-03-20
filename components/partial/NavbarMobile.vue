<script lang="ts" setup>
const colorMode = useColorMode()
const { locale, setLocale } = useI18n()
const language = ['id', 'en']

const onLanguage = (value: string) => {
  setLocale(value)
}

</script>

<template>
  <div class="absolute top-3 right-3">
    <div class="flex items-center gap-x-4">
      <ClientOnly>
        <div class="block lg:hidden ">
          <div v-if="colorMode.value === 'light'" @click="colorMode.preference = 'dark'">
            <IconLight class="mode-icon mode-icon-light cursor-pointer" />
          </div>
          <div v-else @click="colorMode.preference = 'light'">
            <IconMoon class="mode-icon mode-icon-dark cursor-pointer" />
          </div>
        </div>
      </ClientOnly>

      <USelectMenu v-model="locale" @update:modelValue="onLanguage" :options="language"
        selected-icon="i-heroicons-check-badge"
        :ui-menu="{ option: { selectedIcon: { base: '!h-10 w-5 text-amber-500 dark:text-teal-300 flex-shrink-0' } } }">

        <template #label>
          <div class="uppercase">{{ locale }}</div>
        </template>

        <template #option="{ option }">
          <span class="uppercase">{{ option }}</span>
        </template>
      </USelectMenu>

    </div>
  </div>
</template>

<style lang="postcss" scoped>
.mode-icon {
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
</style>
