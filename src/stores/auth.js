import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   const increment = () => {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useAuthStore = defineStore('auth', () => {
  const signup = async(payload) => {
    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

    const { data } = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]', payload)

    console.log(data)
  }

  return { signup }
})