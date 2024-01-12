<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const about = ref(null)
const experience = ref(null)
const projects = ref(null)

const { setNav } = useNav()

useIntersectionObserver(
  about,
  ([{ isIntersecting }]) => {
    if (isIntersecting) setNav('about')
  },
)

useIntersectionObserver(
  projects,
  ([{ isIntersecting }]) => {
    if (isIntersecting) setNav('projects')
  },
)
</script>
<template>
  <div class="lg:w-full pb-10 lg:pb-14 xl:pb-24 ">
    <section id="about" ref="about" class="pt-10 md:pt-14 xl:pt-24">
      <ContentAbout />
    </section>

    <section id="experience" class="pt-10 md:pt-14 xl:pt-24">
      <ContentExperience />
    </section>

    <section id="projects" ref="projects" class="pt-10 md:pt-14 xl:pt-24">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor
      incididunt ut
      labore et dolore
      magna
      aliqua. Volutpat lacus laoreet non curabitur. Scelerisque purus semper eget duis at tellus at. Accumsan tortor
      posuere
      ac ut consequat. Morbi tincidunt augue interdum velit euismod. Quam viverra orci sagittis eu volutpat. Elit
      ullamcorper dignissim cras tincidunt lobortis. Vitae suscipit tellus mauris a diam maecenas. Eget gravida cum sociis
      natoque. Donec massa sapien faucibus et molestie ac feugiat sed. Risus sed vulputate odio ut enim. Sed odio morbi
      quis
      commodo odio aenean sed adipiscing diam. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.
      In
      vitae turpis massa sed elementum tempus.

      Nulla at volutpat diam ut venenatis tellus in metus. Arcu vitae elementum curabitur vitae nunc sed velit dignissim
      sodales. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Nunc mattis enim ut tellus elementum
      sagittis vitae et. Tincidunt praesent semper feugiat nibh. Amet aliquam id diam maecenas ultricies mi eget mauris
      pharetra. In aliquam sem fringilla ut morbi tincidunt augue. Aenean pharetra magna ac placerat vestibulum lectus
      mauris ultrices. Lobortis feugiat vivamus at augue eget arcu dictum. Mauris in aliquam sem fringilla. Faucibus vitae
      aliquet nec ullamcorper. Habitasse platea dictumst quisque sagittis purus sit amet. Massa tempor nec feugiat nisl
      pretium fusce id velit ut. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Massa ultricies mi quis
      hendrerit dolor magna eget est lorem.
    </section>
  </div>
</template>

<style scoped lang="postcss">
</style>
