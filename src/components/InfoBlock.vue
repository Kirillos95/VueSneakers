<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String
})
</script>

<template>
  <div class="flex flex-col items-center text-center gap-4">
    <img width="100" height="100" :src="imageUrl" alt="image">
    <h2 class="text-2xl mt-4 font-medium">{{ title }}</h2>
    <p class="text-gray-400">{{ description }}</p>
  </div>
</template>