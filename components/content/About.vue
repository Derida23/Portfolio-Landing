<script setup lang="ts">
const { setNav } = useNav()
const about = ref(null)

useIntersectionObserver(
  about,
  ([{ isIntersecting }]) => {
    if (isIntersecting) setNav('about')
  },
)

interface IAbout {
  first_paragraph: string
  second_paragraph: string
  third_paragraph: string
}

const props = defineProps({
  abouts: Object as PropType<IAbout>,
})


const colorMode = useColorMode()

const firstParagraph = computed(() => {
  if (props.abouts?.first_paragraph) {
    const text = props.abouts.first_paragraph.replace('text-white', 'text-slate-900');

    if (colorMode.preference === 'light') {
      return text
    }
    else return props.abouts.first_paragraph
  }
})

</script>
<template>
  <div>
    <div ref="about"></div>
    <!-- <pre>{{ firstParagraph }}</pre> -->
    <div class="about-header">
      <h2 class="about-title">About</h2>
    </div>
    <div v-html="firstParagraph" />
    <p class="mb-4" ref="about">
      {{ abouts?.second_paragraph }}
    </p>
    <p class="mb-0 sm:mb-4" ref="about">
      {{ abouts?.third_paragraph }}
    </p>
  </div>
</template>

<style scoped lang="postcss">
.about-header {
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
}

.about-title {
  @apply text-sm;
  @apply font-bold;
  @apply tracking-widest;
  @apply uppercase;
  @apply text-slate-900;
  @apply dark:text-slate-200;
  @apply lg:sr-only;
}
</style>
