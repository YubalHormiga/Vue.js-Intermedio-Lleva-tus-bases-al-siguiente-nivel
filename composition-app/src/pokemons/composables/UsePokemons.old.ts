import { ref, computed, onMounted } from 'vue'
import { getPokemons } from '../helpers/get-pokemon'
import type { Pokemon } from '../interfaces/pokemon'

const pokemons = ref<Pokemon[]>([])
const isLoading = ref(true)

const usePokemons = () => {
  onMounted(async () => {
    const data = await getPokemons()
    pokemons.value = data
    isLoading.value = false
  })

  return {
    pokemons,
    isLoading,

    count: computed(() => pokemons.value.length)
  }
}

export default usePokemons
