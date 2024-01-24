<script setup lang="ts">
const navigations = reactive(['about', 'experience', 'project'])

const store = useNav()
const { navigation } = storeToRefs(store)
const { setNav } = store

const route = useRoute()
console.log('navigation -> ', navigation.value)

</script>

<template>
  <nav>
    <ul v-if="!route.params.id" class="nav">
      <li v-for="nav, index in navigations" :key="index">
        <a :href="`#${nav}`" class="nav-link group" @click="setNav(nav)">
          <span class="nav-line"
            :class="{ 'nav-line-active': navigation === nav || navigation === '' && nav === 'about' }"></span>
          <span class="nav-title"
            :class="{ 'nav-title-active': navigation === nav || navigation === '' && nav === 'about' }">
            {{ nav }}
          </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="postcss">
.nav {
  @apply mt-16;
  @apply w-max;
  @apply hidden;
  @apply lg:block;

  &-link {
    @apply flex;
    @apply items-center;
    @apply py-3;
  }

  &-line {
    @apply w-8;
    @apply h-px;
    @apply mr-4;
    @apply transition-all;
    @apply bg-slate-600;
    @apply group-hover:w-16 group-hover:bg-slate-900 dark:group-hover:bg-slate-200;
    @apply group-focus-visible:w-16 group-focus-visible:bg-slate-900 dark:group-focus-visible:bg-slate-200;
    @apply motion-reduce:transition-none;

    &-active {
      @apply w-16;
      @apply bg-slate-900;
      @apply dark:bg-slate-200;
    }
  }

  &-title {
    @apply text-xs;
    @apply font-bold;
    @apply tracking-widest;
    @apply uppercase;
    @apply text-slate-500;
    @apply group-hover:text-slate-900 dark:group-hover:text-slate-200 group-focus-visible:text-slate-900 dark:group-focus-visible:text-slate-200;

    &-active {
      @apply text-slate-900;
      @apply dark:text-slate-200;
    }
  }
}
</style>
