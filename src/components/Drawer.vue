<script setup>
import {ref, inject, computed} from 'vue';
import axios from "axios";

import DrawerHead from "./DrawerHead.vue";
import CartListItem from "./CartListItem.vue";
import InfoBlock from "./InfoBlock.vue";

const isCreatingOrder = ref(false)
const orderId = ref(null)

const props = defineProps({
  totalPrice: Number,
  vatPrice: Number,
})

const {cart} = inject('cart')
// создать заказ
const createOrder = async() => {
  try {
    isCreatingOrder.value = true
    const {data} = await axios.post(`https://06ed816abc72f69c.mokky.dev/orders`, 
    {
      items: cart.value,
      totalPrice: props.totalPrice.value
    })

    cart.value = []
    orderId.value = data.id
    
  } catch (err) {

    console.log(err)
  } finally {
    isCreatingOrder.value = false
  }
}
// Кнопка оформления заказа выключена после отправления заказа на сервер
const cartIsEmpty = computed(() => cart.value.length === 0)
const buttonDisabled = computed(() => cartIsEmpty.value || isCreatingOrder.value)
</script>

<template>
  <div>
    <!-- Маска страницы  -->
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <!-- Содержимое корзины -->
    <div class="bg-white w-96 h-full fixed top-0 right-0 z-20 p-8">
      <DrawerHead />

      <div v-if="!totalPrice || orderId" class="flex h-full items-center">
             <InfoBlock 
                   v-if="!totalPrice && !orderId"
                   title="Корзина пустая!"
                   description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
                   imageUrl="/package-icon.png"
                   />
             <InfoBlock 
                   v-if="orderId"
                   title="Заказ оформлен!"
                   :description="`Ваш заказ № ${orderId} скоро будет передан в службу доставки`"
                   imageUrl="/order-success-icon.png"
                   />
     
      </div>

      <div v-else>
         <CartListItem />
         <div class="flex flex-col mb-6">
           <!-- Нижняя часть корзины Итого -->
           <div class="flex gap-2 mt-7">
             <span>Итого:</span>
             <div class="flex-1 border-b border-dashed"></div>
             <b>{{ totalPrice }} руб.</b>
           </div>
           <!-- Нижняя часть корзины Налоги -->
           <div class="flex gap-2 mt-5">
             <span>Налог 5%</span>
             <div class="flex-1 border-b border-dashed"></div>
             <b>{{ vatPrice }} руб.</b>
           </div>
           <!-- Нижняя часть корзины Кнопка -->
           <button 
           :disabled="buttonDisabled"
           @click="createOrder" 
           class="mt-7 transition bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 disabled:bg-slate-300">
             Оформить заказ
           </button>
         </div>
       </div>
    </div>
  </div>


</template>