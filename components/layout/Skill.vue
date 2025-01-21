<script setup lang="ts">
import { skills } from '@/constants'
</script>

<template>
  <div class="skill">
    <h1 class="skill-title">{{ $t('header.skill') }}</h1>
    <div class="skill-wrapper">
      <div v-for="(skill, index) in skills" :key="index">
        <UTooltip :text="skill" :popper="{ arrow: false, placement: 'bottom-start', offsetDistance: 10 }">
          <component :is="`Icon${skill}`" :filled="skill !== 'Next' && skill !== 'Express'" class="skill-content" />
        </UTooltip>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.skill {
  @apply flex;
  @apply flex-col;
  @apply gap-y-3;
  @apply my-10;

  &-title {
    @apply m-0;
    @apply text-lg;
    @apply uppercase;
    @apply font-semibold;
    @apply text-slate-900;
    @apply dark:text-slate-200;
  }

  &-wrapper {
    @apply flex;
    @apply flex-row;
    @apply gap-4;
    @apply items-center;
  }

  &-content {
    @apply !mb-0;
    @apply text-slate-900;
    @apply dark:text-slate-200;
    @apply text-2xl;
    @apply sm:text-3xl;
  }
}
</style>
