<script setup lang="ts">

const skills = reactive<string[]>(['Typescript', 'Vue', 'Nuxt', 'React', 'Next', 'Express', 'Figma'])
</script>

<template>
  <div class="skill">
    <h1 class="skill-title">SKILL</h1>
    <div class="skill-wrapper">
      <div v-for="(skill, index) in skills" :key="index">
        <UTooltip :text="skill" :popper="{ arrow: true, placement: 'bottom-start', offsetDistance: 10 }">
          <component :is="`Icon${skill}`" :filled="skill !== 'Next' && skill !== 'Express'"
            class="!mb-0 text-white text-3xl" />
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
  @apply mt-10;

  &-title {
    @apply m-0;
    @apply text-lg;
    @apply uppercase;
    @apply text-slate-200;
  }

  &-wrapper {
    @apply flex;
    @apply gap-4;
    @apply flex-row;
    @apply items-center;
  }
}
</style>
