<script setup lang="ts">

const loading = ref(true);
const { getAll } = useApiProfile()
const { data, pending } = await getAll()

// Function to toggle the status after a delay
const toggleStatus = () => {
  setTimeout(() => {
    loading.value = false;
  }, 2000); // 3000 milliseconds (3 seconds)
};

// Call the function when the component is mounted
onMounted(() => {
  toggleStatus();
});

</script>
<template>
  <div v-if="!loading && !pending" class="lg:w-full pb-10 lg:pb-14 xl:pb-24">
    <section id="about" class="pt-10 md:pt-14 xl:pt-24">
      <ContentAbout :abouts="data.data.abouts" />
    </section>

    <section id="experience" class="pt-10 md:pt-14 xl:pt-24">
      <ContentExperience :experiences="data.data.experiences" />
    </section>

    <section id="project" class="pt-10 md:pt-14 xl:pt-24">
      <ContentProject :projects="data.data.projects" />
    </section>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-800"></div>
  </div>
</template>

<style scoped lang="postcss">
</style>
