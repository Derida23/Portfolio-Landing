<script setup lang="ts">
import type { IProject } from '@/types'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Object as PropType<IProject>,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false
  }
})


const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
const model = useVModel(props, 'modelValue', emits)

</script>

<template>
  <div class="modal">
    <div class="modal-close">
      <div class="font-semibold">
        {{ project.brand }} · {{ project.title }}
      </div>
      <div class="modal-close-btn" @click="model = false">
        <UIcon name="i-heroicons-x-mark-solid" />
      </div>
    </div>
    <div v-if="loading" class="modal-wrapper">
      <div class="modal-loading">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-800"></div>
      </div>
    </div>
    <div v-else>
      <div class="rounded-xl ">
        <img :src="`/images/${project.image}`" :alt="project.image" class="rounded-xl" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.modal {
  @apply p-4;

  &-close {
    @apply flex;
    @apply items-center;
    @apply justify-between;
    @apply pb-5;

    &-btn {
      @apply w-7;
      @apply h-7;
      @apply flex;
      @apply items-center;
      @apply justify-center;
      @apply cursor-pointer;
      @apply rounded-md;
      @apply hover:bg-slate-700;
    }
  }

  &-wrapper {
    @apply h-fit;
  }

  &-loading {
    @apply w-full;
    @apply h-full;
    @apply flex;
    @apply items-center;
    @apply justify-center;
  }

}
</style>
