<script setup>
const emit = defineEmits(['onClickRemove'])


defineProps({
  id: Number,
  title: String,
  imageURL: String,
  price: Number,
})

</script>

<template>
  <div class="flex items-center border border-slate-200 p-3 rounded-xl gap-3 hover:-translate-y-1 transition">
    <img class="w-14 h-14" :src="imageURL" :alt="title" />
    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2 flex-1">
        <b>{{ price }} руб.</b>
        <img @click="() => emit('onClickRemove')" 
             class="opacity-40 hover:opacity-100 cursor-pointer transition" 
             src="/close.svg"
             alt="close">
      </div>
    </div>
  </div>

</template>