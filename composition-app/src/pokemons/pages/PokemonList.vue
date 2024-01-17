<script setup lang="ts">
import usePokemons from '../composables/UsePokemons'
import PokemonCardList from '../components/PokemonCardList.vue'
const { count, isLoading, pokemons, isError, error } = usePokemons()
</script>

<template>
  <h1 v-if="isLoading">Cargando....</h1>
  <div v-else-if="isError">{{ error }}</div>
  <div v-else>
    <h1>Pokemon List {{ count }}</h1>
    <PokemonCardList :pokemons="pokemons ?? []" />
  </div>
</template>
