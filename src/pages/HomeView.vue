<script setup>
import {inject} from 'vue'
import {reactive, watch, ref, onMounted} from 'vue'
import axios from 'axios'
import debounce from 'lodash.debounce'

import CardList from '../components/CardList.vue'

const {cart, addToCart, removeFromCart} = inject('cart')
const items = ref([])

// Фильтры (State реактивный)
const filters = reactive({
  searchQuery: '',
  sortBy: 'title'
})
// Добавление в избранное
const addToFavorite = async (item) => {

    try {

     if (!item.isFavorite) {
       const obj = {
        item_id: item.id
      }
      
      item.isFavorite = true
      const { data } = await axios.post(`https://06ed816abc72f69c.mokky.dev/favorites`, obj)
      item.favoriteId = data.id

    }
    else {
      item.isFavorite = false
      await axios.delete(`https://06ed816abc72f69c.mokky.dev/favorites/${item.favoriteId}`)

      item.favoriteId = null
    }
     }
    catch (error) {
      console.log('error addToFavorite', error)
    }
  }
// Добавление в корзину и удаление из корзины
const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}
// Сортировка товаров в селекте тега HTML
const onChangeSelect= (event) => {
  filters.sortBy = event.target.value
}
// Поиск товаров в инпуте
const onChangeSearchInput = debounce((event) => {
    filters.searchQuery = event.target.value
}, 300)

// Отображение избранных товаров
const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://06ed816abc72f69c.mokky.dev/favorites`)

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }

      return { 
        ...item,
        isFavorite: true,
        favoriteId : favorite.id
      }
    })

  } catch (error) {
    console.log('error fetchFavorites', error)
  }
}

// Запрос на сервер при каждом изменении filters или при первом рендере
const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://06ed816abc72f69c.mokky.dev/items`,
    {
      params
    })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      isAdded: false,
      favoriteId: null,

    }))
  } catch (error) {
    console.log('error fetchItems', error)
  }
}

// следит за изменением значения sortBy и сортирует товары
watch(filters, fetchItems)

// При загрузке страницы идет запрос на сервер и монтируются карточки товара
onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []

  await fetchItems(),
  await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id),
  }))

}) 

// следит за изменением значения cart.value и убирает добавленные в корзину карточки
watch(cart, () => {
items.value = items.value.map((item) => ({
  ...item,
  isAdded: false
}))
})

</script>
<template>
  <div>
       <div class="flex justify-between items-center">
          <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>
          <!--  -->
          <div class="flex gap-4">
            <!-- Select -->
            <select @change="onChangeSelect" class="border bg-transparent rounded-md py-2.5 px-3 outline-none">
              <option value="name">По названию</option>
              <option value="price">По цене(сначала дешевле)</option>
              <option value="-price">По цене(сначала дороже)</option>
            </select>
            <!-- Поиск -->
            <div class="relative">
              <img class="absolute left-3 top-3" src="/search.svg" alt="search" />
              <input @input="onChangeSearchInput"
                class="border border-slate-200 rounded-md py-2 pl-11 pr-5 w-80 outline-none focus:border-lime-400 hover:border-gray-400 transition"
                placeholder="Поиск..." type="text">
            </div>
          </div>
        </div>
        <div class="mt-10">
          <!-- Список товаров -->
          <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus"/>
        </div>
  </div>
</template>