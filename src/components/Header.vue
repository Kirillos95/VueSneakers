<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="lgo" class="w-10">
        <div>
          <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <!-- ПРАВАЯ ЧАСТЬ ХЭДЕРА -->
    <ul class="flex items-center gap-10">
      <li @click="() => emit('openDrawer')" 
          class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/cart.svg" alt="cart">
        <b>{{ totalPrice }} руб.</b>
      </li>
   <router-link to="/favorites">
       <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
        <img src="/heart.svg" alt="heart">
        <span>Закладки</span>
      </li>
   </router-link>
   <router-link to="/login">
     <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
       <img src="/profile.svg" alt="profile">
       <span>Войти</span>
     </li>
   </router-link>
   <router-link to="/signup">
     <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
       <img src="/profile.svg" alt="profile">
       <span>Регистрация</span>
     </li>
   </router-link>
    </ul>
  </header>
</template>