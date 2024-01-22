import { computed } from 'vue'
import { getPokemons } from '../helpers/get-pokemon'
import { useQuery } from '@tanstack/vue-query'
import { initialPokemons } from '../data/initial-pokemon';

const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    retry: 1,
    initialData: initialPokemons,
    
  })
  // const count = computed(() => pokemons.value?.length ?? 0)

  return {
    pokemons,
    isLoading,
    isError,
    error,

    count: computed(() => pokemons.value?.length ?? 0)
  }
}

export default usePokemons
