<script setup>
defineProps({
  title: String,
  imageURL: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})
const onClickAdd = () => {
  alert('Добавлено в корзину')
}
const onClickFavorite = () => {
  alert('Добавлено в избранное')
}
</script>

<template>
  <div>
    <div
      class="bg--white relative border border-slate-200 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition ">
      <img
       :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="like 2" 
        class="absolute top-8 left-8" 
        @click="onClickFavorite"
        />
      <img :src="imageURL" alt="sneaker" />

      <p class="mt-2">{{ title }}</p>

      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-400">Цена :</span>
          <b>{{ price }} руб.</b>
        </div>

        <img @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="plus">

      </div>
    </div>
  </div>
</template>