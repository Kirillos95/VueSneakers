<script setup>
import { onMounted, ref, reactive,provide, watch } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'

// Хранилище товаров (State)
const items = ref([])
// Фильтры (State реактивный)
const filters = reactive({
  searchQuery: '',
  sortBy: 'title'
})

// Сортировка товаров в селекте тега HTML
const onChangeSelect= (event) => {
  filters.sortBy = event.target.value
}
// Поиск товаров
const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://06ed816abc72f69c.mokky.dev/favorites`)

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.parentId === item.id)

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

const addToFavorite = async (item) => {

    try {

     if (!item.isFavorite) {
       const obj = {
        parentId: item.id,
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

// Запрос на сервер при каждом изменении filters или при первом рендере
const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://06ed816abc72f69c.mokky.dev/itemssneakers`,
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
// fetch('https://604781a0efa572c1.mokky.dev/items')
// .then(res=>res.json())
// .then(data => {
  // })
  
  
// При загрузке страницы идет запрос на сервер и монтируются карточки товара
onMounted(async () => {
  await fetchItems(),
  await fetchFavorites()

}) 
// следит за изменением значения sortBy и сортирует товары
watch(filters, fetchItems)
provide('addToFavorite', addToFavorite)
</script>

<template>
  <!-- <Drawer /> -->
  <div class="bg-white w-4/5 m-auto  rounded-xl shadow-xl mt-14">
    <Header />
    <div class="p-10">
      <!-- Заголовок -->
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
        <CardList :items="items" @addToFavorite="addToFavorite"/>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>
