<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Pokemon } from '../interfaces/pokemon'
import { useQueryClient } from '@tanstack/vue-query'
import { getPokemonById } from '../helpers/get-pokemon-id'

interface Props {
  pokemon: Pokemon
}

const props = defineProps<Props>()

const router = useRouter()

const queryClient = useQueryClient()

const goTo = () => {
  router.push({ name: 'pokemon-list', params: { id: props.pokemon.id } })
}

const prefechPokemon = async () => {
  const id = props.pokemon.id.toString()
  await queryClient.prefetchQuery({
    queryKey: ['pokemons', id],
    queryFn: () => getPokemonById(id)
  })
}
</script>

<template>
  <div class="pokemon-card" @click="goTo" @mouseenter="prefechPokemon">
    <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>
<style scoped>
.pokemon-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>
