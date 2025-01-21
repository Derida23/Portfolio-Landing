<script setup lang="ts">

const { locale } = useI18n()
const loading = ref(true);
const { getAll } = useApiProfile()
const { data, pending } = await getAll(locale.value)

const toggleStatus = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

onMounted(() => {
  toggleStatus();
});

</script>
<template>
  <div v-if="!loading && !pending" class="homepage-wrapper">
    <section id="about" class="homepage">
      <ContentAbout :abouts="data?.data.abouts" />
    </section>

    <section id="experience" class="homepage">
      <ContentExperience :experiences="data?.data.experiences" />
    </section>

    <section id="project" class="homepage">
      <ContentProject :projects="data?.data.projects" />
    </section>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="homepage-loading"></div>
  </div>
</template>

<style scoped lang="postcss">
.homepage {
  @apply pt-10;
  @apply md:pt-14;
  @apply xl:pt-24;

  &-wrapper {
    @apply lg:w-full;
    @apply pb-10;
    @apply lg:pb-14;
    @apply xl:pb-24;
  }

  &-loading {
    @apply animate-spin;
    @apply rounded-full;
    @apply h-32;
    @apply w-32;
    @apply border-t-2;
    @apply border-b-2;
    @apply border-emerald-800;
  }
}
</style>
