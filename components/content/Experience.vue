<script setup lang="ts">
import { svgPath } from '@/constants'
import type { IExperience } from '@/types';

const { setNav } = useNav()
const experience = ref(null)

useIntersectionObserver(
  experience,
  ([{ isIntersecting }]) => {
    if (isIntersecting) setNav('experience')
  },
)
const props = defineProps({
  experiences: {
    type: Array as PropType<IExperience[]>,
    default: () => []
  }
})

</script>

<template>
  <div>
    <div class="experience-header">
      <h2 class="experience-header-title">Experience</h2>
    </div>
    <ol class="group/list">
      <div v-for="experience, index in  experiences " :key="index" :ref="Number(index) >= 2 ? 'experience' : undefined"
        class="experience group lg:group-hover/list:opacity-50">
        <div class="experience-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148, 163, 184, 0.1)]"></div>

        <div class="experience-timeline experience-company">
          <img :src="`/images/${experience.image}`" :alt="experience.company" class="experience-company-avatar" />
        </div>
        <div class="experience-content">
          <div v-for="role, idxRole in experience.roles" :key="idxRole"
            :class="{ 'mb-10': experience.roles.length > 1 && idxRole === 0 }">
            <h3 class="experience-content-title">
              <div>
                <a class="experience-content-link  group/link" :href="experience.web" target="_blank" rel="noreferrer">
                  <span class="experience-content-position"></span>
                  <span class="inline-block">{{ role.position }} · {{ experience.company }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    class="experience-content-svg" aria-hidden="true">
                    <path fill-rule="evenodd" :d="`${svgPath}`" clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
              <p class="experience-timeline"> {{ role.date }}</p>
            </h3>
            <p class="experience-content-jobdesk">{{ role.description }}</p>
            <ul class="experience-content-tech">
              <li v-for=" technology, idxTech  in  role.technology " :key="idxTech" class="experience-content-tech-card">
                <div class="experience-content-tech-title">
                  {{ technology }}
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </ol>
  </div>
</template>

<style scoped lang="postcss">
.experience {
  @apply relative;
  @apply grid;
  @apply pb-1;
  @apply transition-all;
  @apply mb-12;
  @apply sm:grid-cols-8;
  @apply sm:gap-8;
  @apply md:gap-4;
  @apply lg:hover:opacity-100;

  &-header {
    @apply sticky;
    @apply top-0;
    @apply z-20;
    @apply w-screen;
    @apply px-6;
    @apply py-5;
    @apply mb-4;
    @apply -mx-6;
    @apply bg-slate-200/10;
    @apply dark:bg-slate-900/75;
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

    &-title {
      @apply text-sm;
      @apply font-bold;
      @apply tracking-widest;
      @apply uppercase;
      @apply text-slate-900;
      @apply dark:text-slate-200;
      @apply lg:sr-only;
    }
  }

  &-hover {
    @apply absolute;
    @apply -inset-x-4;
    @apply -inset-y-4;
    @apply z-0;
    @apply hidden;
    @apply rounded-xl;
    @apply transition;
    @apply motion-reduce:transition-none;
    @apply lg:-inset-x-6;
    @apply lg:block;
    @apply lg:group-hover:bg-slate-200/50;
    @apply dark:lg:group-hover:bg-slate-800/50;
    @apply lg:group-hover:drop-shadow-sm;
    @apply dark:lg:group-hover:drop-shadow-lg;
  }

  &-timeline {
    @apply z-10;
    @apply mt-1;
    @apply mb-2;
    @apply text-[9px];
    @apply font-bold;
    @apply tracking-wide;
    @apply uppercase;
    @apply text-slate-900;
    @apply dark:text-slate-500;
    @apply sm:col-span-2;
  }

  &-company {
    @apply hidden;
    @apply lg:flex;
    @apply lg:justify-center;
    @apply lg:items-center;
    @apply w-20;
    @apply h-20;
    @apply rounded-2xl;
    @apply bg-white;
    @apply border-[1px];
    @apply border-slate-200;
    @apply dark:border-0;

    &-avatar {
      @apply w-[78px];
      @apply h-[78px];
      @apply dark:w-20;
      @apply dark:h-20;
      @apply object-contain;
      @apply rounded-2xl;
    }
  }

  &-content {
    @apply z-10;
    @apply sm:col-span-6;

    &-title {
      @apply font-medium;
      @apply leading-snug;
      @apply text-slate-900;
      @apply dark:text-slate-200;
    }

    &-link {
      @apply inline-flex;
      @apply items-baseline;
      @apply text-base;
      @apply font-bold;
      @apply leading-tight;
      @apply text-slate-900;
      @apply dark:text-slate-200;
      @apply hover:text-teal-500;
      @apply dark:hover:text-teal-300;
      @apply focus-visible:text-teal-500;
      @apply dark:focus-visible:text-teal-300;
    }

    &-position {
      @apply absolute;
      @apply -inset-x-4;
      @apply -inset-y-2.5;
      @apply hidden;
      @apply rounded;
      @apply md:-inset-x-6;
      @apply md:-inset-y-4;
      @apply lg:block;
    }

    &-svg {
      @apply inline-block;
      @apply w-4;
      @apply h-4;
      @apply ml-1;
      @apply transition-transform;
      @apply translate-y-px;
      @apply shrink-0;
      @apply group-hover/link:-translate-y-1;
      @apply group-hover/link:translate-x-1;
      @apply group-focus-visible/link:-translate-y-1;
      @apply group-focus-visible/link:translate-x-1;
      @apply motion-reduce:transition-none;
    }

    &-jobdesk {
      @apply mt-2;
      @apply text-sm;
      @apply leading-normal;
    }

    &-tech {
      @apply flex;
      @apply flex-wrap;
      @apply mt-2;

      &-card {
        @apply mr-1.5;
        @apply mt-2;
        @apply capitalize;
      }

      &-title {
        @apply flex;
        @apply items-center;
        @apply px-3;
        @apply py-1;
        @apply text-xs;
        @apply font-medium;
        @apply leading-5;
        @apply text-teal-500;
        @apply dark:text-teal-300;
        @apply rounded-full;
        @apply bg-teal-500/10;
        @apply dark:bg-teal-400/10;
      }
    }
  }
}
</style>
