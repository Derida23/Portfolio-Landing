<script setup lang="ts">
import type { IProject } from '@/types'

const props = defineProps({
  project: {
    type: Object as PropType<IProject>,
    default: () => ({}),
  }
})
</script>

<template>
  <img :src="project.image" :alt="project.image" />
</template>

<style scoped lang="postcss">
</style>
