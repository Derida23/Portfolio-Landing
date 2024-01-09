<script setup lang="ts">
const route = useRoute()
const navigation = reactive(['about', 'experience', 'projects'])

</script>

<template>
  <nav>
    <ul class="nav">
      <li v-for="nav, index in navigation" :key="index">
        <a :href="`#${nav}`" class="nav-link group ">
          <span class="nav-line"
            :class="{ 'nav-line-active': route.hash === `#${nav}` || route.hash === `` && nav === 'about' }"></span>
          <span class="nav-title"
            :class="{ 'nav-title-active': route.hash === `#${nav}` || route.hash === `` && nav === 'about' }">
            {{ nav }}
          </span>
        </a>
      </li>
      <!-- <li>
        <a href="#experience" class="nav-link group">
          <span class=" nav-line "></span>
          <span class="nav-title">
            experience
          </span>
        </a>
      </li>
      <li>
        <a href="#projects" class="nav-link group">
          <span class=" nav-line "></span>
          <span class="nav-title">
            projects
          </span>
        </a>
      </li> -->
    </ul>
  </nav>
</template>

<style scoped lang="postcss">
.nav {
  @apply mt-16;
  @apply w-max;

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
    @apply group-hover:w-16 group-hover:bg-slate-200;
    @apply group-focus-visible:w-16 group-focus-visible:bg-slate-200;
    @apply motion-reduce:transition-none;

    &-active {
      @apply w-16;
      @apply bg-slate-200;
    }
  }

  &-title {
    @apply text-xs;
    @apply font-bold;
    @apply tracking-widest;
    @apply uppercase;
    @apply text-slate-500;
    @apply group-hover:text-slate-200 group-focus-visible:text-slate-200;

    &-active {
      @apply text-slate-200;
    }
  }
}
</style>
