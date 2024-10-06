<script setup>
import { inject } from "vue";
import CartItem from "./CartItem.vue";

const { cart, removeFromCart } = inject('cart')

const onClickRemove = (item) => {
  removeFromCart(item)
}

</script>

<template>
  <div class="flex flex-1 flex-col gap-4" v-auto-animate>
    <CartItem  
      v-for="item in cart" 
      :key="item.id" 
      :item="item" 
      :title="item.title" 
      :price="item.price" 
      :imageURL="item.imageUrl"
      @on-click-remove="() => removeFromCart(item)"
      />
  </div>
</template>