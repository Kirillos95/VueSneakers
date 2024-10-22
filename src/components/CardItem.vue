<script setup>

const props = defineProps({
  id: Number,
  title: String,
  imageURL: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})


</script>

<template>
  <div>
    <div
      class="bg--white relative border border-slate-400 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition ">
      <img
       v-if="onClickFavorite"
        :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="like 1" 
        class="absolute top-8 left-8" 
        @click="onClickFavorite"
        />
      <img
       :src="imageURL" alt="sneaker" />

      <p class="mt-2">{{ title }}</p>

      <div class="flex justify-between mt-4">
        <div class="flex flex-col">
          <span class="text-slate-400">Цена :</span>
          <b>{{ price }} руб.</b>
        </div>

        <img
        v-if="onClickAdd"
        @click="onClickAdd"
        :src="!isAdded ? '/plus.svg' : '/checked.svg'"
        alt="Plus"
        />

      </div>
    </div>
  </div>
</template>