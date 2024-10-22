<script setup>

import CardItem from "./CardItem.vue";

defineProps({
  items: Array,
  isFavorites: Boolean
})
// Эмит для прокидывания ФУНКЦИЙ в родителя , а пропс для передачи данных
const emit = defineEmits(['addToFavorite', 'addToCart' ])

</script>


<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <CardItem 
              v-for="item in items"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :imageURL="item.imageUrl"
              :price="item.price"     
              :onClickFavorite ="isFavorites ? null : () => emit('addToFavorite', item)"
              :onClickAdd ="isFavorites ? null : () => emit('addToCart', item)"
              :isFavorite="item.isFavorite" 
              :isAdded="item.isAdded" 
              />
  </div>
</template>