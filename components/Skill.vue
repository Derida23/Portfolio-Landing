<script setup lang="ts">

const skills = reactive<string[]>(['Typescript', 'Vue', 'Nuxt', 'React', 'Next', 'Express', 'Figma'])
</script>

<template>
  <div class="skill">
    <h1 class="m-0 text-lg uppercase text-slate-200">SKILL</h1>
    <div class="flex gap-4 flex-row-items-center">
      <div v-for="(skill, index) in skills" :key="index">
        <component :is="`Icon${skill}`" :filled="skill !== 'Next' && skill !== 'Express'"
          class="!mb-0 text-white text-3xl" />
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
}
</style>