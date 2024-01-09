<!-- components/TypingEffect.vue -->
<template>
  <div>
    <p class="flex items-center gap-x-1">
      <span>{{ typedText }}</span>
      <span class="cursor !pb-1"> |</span>
    </p>
  </div>
</template>

<script setup>
const textToType = ref("Arian Derida Hamami"); // Replace with your desired text
const typedText = ref("");

onMounted(() => {
  startTyping();
});

const startTyping = async () => {
  for (let i = 0; i < textToType.value.length; i++) {
    typedText.value += textToType.value[i];
    await delay(200); // Adjust the delay as needed
  }
  // You can choose to continue some other action here after typing is complete
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
</script>

<style scoped>
.cursor {
  animation: blink 0.8s infinite;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
