<script setup>
import CardItem from "./CardItem.vue";

defineProps({
  items: Array
})

const onClickAdd = () => {
  alert('Добавить')
}
const onClickFavorite = () => {
  alert('Добавлено')
}
</script>
<template>
  <div class="grid grid-cols-4 gap-5">
    <CardItem 
              v-for="item in items"
              :key="item.id"
              :title="item.title"
              :imageURL="item.imageUrl"
              :price="item.price"
              :onClickAdd = "onClickAdd"   
              />
  </div>
</template>