<script setup>
import { ref, provide, watch, computed } from 'vue'

import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'
/** Корзина **/
const cart = ref([])
// Суммарная стоимость корзины Стоимость НДС
const totalPrice = computed(() =>  cart.value.reduce((acc, item) =>  acc + item.price, 0))
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

// Открытие и закрытие корзины
const drawerOpen = ref(false)
const closeDrawer= () => {
  drawerOpen.value = false
}
const openDrawer= () => {
  drawerOpen.value = true
}
/////// login modal
const loginModal = ref(false)
const openLoginModal = () => {
  loginModal.value = true
}
const closeLoginModal = () => {
  loginModal.value = false
}
// добавить в корзину
const addToCart = (item) => {
  
    cart.value.push(item)
    item.isAdded = true
 
  }
// убрать из корзины
const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

// любое изменение в корзине сохраняется в localStorage
watch(cart, () => {
  localStorage.setItem('cart', JSON.stringify(cart.value))
}, {
  deep: true})

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart,
})

provide('loginModal', {
  loginModal,
  openLoginModal,
  closeLoginModal
})

</script>

<template>
  <div>
    <!-- Корзина -->
    <Drawer 
      v-if="drawerOpen" 
      :total-price="totalPrice" 
      :vat-price="vatPrice" 
      />
    <div class="bg-white w-4/5 m-auto  rounded-xl shadow-xl mt-14">
      <!-- Шапка корзины-->
      <Header @open-drawer="openDrawer" :total-price="totalPrice"/>
      <div class="p-10">
        <!-- Основная страница -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

