<script setup lang="ts">

const route = useRoute()

const loading = ref(true);
const { getDetail, getAll } = useApiProfile()
const { data, pending } = await getDetail(Number(route.params.id))

const { data: dataAll } = await getAll()

const toggleStatus = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

onMounted(() => {
  toggleStatus();
});

const router = useRouter()
const { locale } = useI18n()

const onNext = (id: number) => {
  const detailLength = dataAll.value?.data.projects.length ?? 0
  const detailIndex = dataAll.value?.data.projects.findIndex((project) => project.id === id)

  if (detailIndex !== undefined) {
    const nextIndex = detailIndex + 1

    if (nextIndex < detailLength) {
      router.push(`${locale.value === 'id' ? '/id' : ''}/project/${dataAll.value?.data.projects[nextIndex].id}`)
    } else {
      router.push(`${locale.value === 'id' ? '/id' : ''}/project/${dataAll.value?.data.projects[0].id}`)
    }
  }
}

const onBack = (id: number) => {
  const detailLength = dataAll.value?.data.projects.length ?? 0
  const detailIndex = dataAll.value?.data.projects.findIndex((project) => project.id === id)

  if (detailIndex !== undefined) {
    const nextIndex = detailIndex - 1

    if (nextIndex >= 0) {
      router.push(`${locale.value === 'id' ? '/id' : ''}/project/${dataAll.value?.data.projects[nextIndex].id}`)
    } else {
      router.push(`${locale.value === 'id' ? '/id' : ''}/project/${dataAll.value?.data.projects[detailLength - 1].id}`)
    }
  }
}
</script>

<template>
  <div v-if="!loading && !pending" class="container">
    <div class="detail">
      <div class="detail-content">
        <div class="detail-header">
          <div>
            <h1 class="detail-header-title">
              {{ data?.data.profile_detail.brand }} · {{ data?.data.profile_detail.title }}
            </h1>
            <h2 class="text-xs uppercase">{{ data?.data.profile_detail.type }}</h2>
          </div>
          <NuxtLink to="https://github.com/Derida23" target="_blank">
            <UTooltip text="Project" :popper="{ arrow: false, placement: 'bottom', offsetDistance: 10 }">
              <IconGithub class="detail-header-github" />
            </UTooltip>
          </NuxtLink>
        </div>

        <div v-if="locale === 'en'">
          <p class="mb-3">{{ data?.data.profile_detail.content.first_paragraph }}</p>
          <p class="mb-3">{{ data?.data.profile_detail.content.second_paragraph }}</p>
          <p class="mb-6 lg:mb-10">{{ data?.data.profile_detail.content.third_paragraph }}</p>
        </div>

        <div v-else>
          <p class="mb-3">{{ data?.data.profile_detail.content_id.first_paragraph }}</p>
          <p class="mb-3">{{ data?.data.profile_detail.content_id.second_paragraph }}</p>
          <p class="mb-6 lg:mb-10">{{ data?.data.profile_detail.content_id.third_paragraph }}</p>
        </div>

        <img :src="`/images/${data?.data.profile_detail.image}`" :alt="data?.data.profile_detail.image"
          class="rounded-2xl" />
      </div>
      <div class="mt-8 text-center block lg:hidden">
        <NuxtLink to="https://github.com/Derida23" target="_blank">
          <UTooltip text="Project" :popper="{ arrow: false, placement: 'bottom', offsetDistance: 10 }">
            <IconGithub class="detail-header-github-footer" />
            <span class="detail-header-text">Github Repository</span>
          </UTooltip>
        </NuxtLink>
      </div>
    </div>
    <div class="detail-navigation mt-10 ">
      <div class="detail-navigation-btn" @click="router.push(locale === 'id' ? '/id' : '/')">
        <div class="detail-navigation-wrapper">
          <UIcon name="i-heroicons-home-20-solid" />
          {{ $t('navigation.homepage') }}
        </div>
      </div>
      <div class="flex items-center gap-x-2">
        <div class="detail-navigation-btn" @click="onBack(Number(data?.data.profile_detail.id))">
          <div class="detail-navigation-wrapper">
            <UIcon name="i-heroicons-arrow-left-circle-16-solid" />
          </div>
        </div>
        <div class="detail-navigation-btn" @click="onNext(Number(data?.data.profile_detail.id))">
          <div class="detail-navigation-wrapper">
            <UIcon name="i-heroicons-arrow-right-circle-16-solid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="detail-wrapper">
    <div class="detail-loading"></div>
  </div>
</template>


<style scoped lang="postcss">
.container {
  @apply lg:w-full;
  @apply pb-10;
  @apply lg:pb-14;
  @apply xl:pb-24;
}

.detail {
  @apply pt-10;
  @apply md:pt-14;
  @apply xl:pt-24;

  &-loading {
    @apply animate-spin;
    @apply rounded-full;
    @apply h-32;
    @apply w-32;
    @apply border-t-2;
    @apply border-b-2;
    @apply border-emerald-800;
    @apply mt-24;
    @apply lg:mt-0
  }

  &-navigation {
    @apply flex;
    @apply items-center;
    @apply justify-between;

    &-btn {
      @apply px-4;
      @apply py-2;
      @apply bg-teal-500/10;
      @apply dark:bg-teal-400/10;
      @apply hover:bg-teal-500/20;
      @apply rounded-full;
      @apply cursor-pointer;
      @apply hover:text-teal-500;
      @apply dark:hover:text-teal-300;
    }

    &-wrapper {
      @apply flex;
      @apply items-center;
      @apply gap-x-1;
      @apply text-sm;
      @apply lg:text-base
    }
  }

  &-wrapper {
    @apply min-h-fit;
    @apply lg:min-h-screen;
    @apply flex items-center;
    @apply justify-center;
  }

  &-header {
    @apply mb-0;
    @apply lg:mb-5;
    @apply lg:flex;
    @apply items-center;
    @apply justify-between;

    &-title {
      @apply text-base;
      @apply lg:text-xl;
      @apply font-semibold;
      @apply text-slate-900;
      @apply dark:text-zinc-100;
    }

    &-github {
      @apply !mb-0;
      @apply text-2xl;
      @apply hover:text-teal-500;
      @apply dark:hover:text-teal-300;
      @apply mt-5;
      @apply lg:mt-0;
      @apply hidden;
      @apply lg:block;
    }

    &-github-footer {
      @apply !mb-0;
      @apply text-2xl;
      @apply hover:text-teal-500;
      @apply dark:hover:text-teal-300;
      @apply mt-5;
      @apply lg:mt-0;
    }

    &-text {
      @apply mt-5;
      @apply ml-2;
      @apply lg:mt-0;
    }
  }
}
</style>
