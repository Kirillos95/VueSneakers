<script setup>
import DrawerHead from "./DrawerHead.vue";
import CartListItem from "./CartListItem.vue";
</script>

<template>
  <div>
    <!-- Маска страницы  -->
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <!-- Содержимое корзины -->
    <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8">
      <DrawerHead />
      <CartListItem />

      <div class="flex flex-col mb-6">
        <!-- Нижняя часть корзины Итого -->
        <div class="flex gap-2 mt-7">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>199000 руб.</b>
        </div>
        <!-- Нижняя часть корзины Налоги -->
        <div class="flex gap-2 mt-5">
          <span>Налог 5%</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>1990 руб.</b>
        </div>
        <!-- Нижняя часть корзины Кнопка -->
        <button class="mt-7 transition bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 ">
          Оформить заказ
        </button>
      </div>
    </div>
  </div>


</template>