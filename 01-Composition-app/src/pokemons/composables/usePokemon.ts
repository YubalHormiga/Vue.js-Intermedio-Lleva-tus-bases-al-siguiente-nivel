import { useQuery } from '@tanstack/vue-query'
import { getPokemonById } from '../helpers/get-pokemon-id';

export const usePokemon = (id: string) => {
  const {
    isLoading,
    data: pokemon,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn:()=> getPokemonById(id),
    retry: 1
  })

  return {
    isLoading,
    isError,
    pokemon,
    errorMessage: error
  }
}

export default usePokemon
