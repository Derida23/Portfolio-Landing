<script setup lang="ts">

const loading = ref(true);
const { getAll } = useApiProfile()
const { data, pending } = await getAll()

const toggleStatus = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1500); // 1500 milliseconds (1.5 seconds)
};

onMounted(() => {
  toggleStatus();
});

</script>
<template>
  <div v-if="!loading && !pending" class="lg:w-full pb-10 lg:pb-14 xl:pb-24">
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
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-800"></div>
  </div>
</template>

<style scoped lang="postcss">
.homepage {
  @apply pt-10;
  @apply md:pt-14;
  @apply xl:pt-24;
}
</style>
