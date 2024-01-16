<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import { pokemonRoute } from '../router/index'
import type { RouterLink } from '../../router/list-routers'

const routeLinks: RouterLink[] =
  pokemonRoute.children?.map(({ name, path, props }) => {
    return {
      name: name?.toString() ?? '',
      path: path,
      title: (props as { title: string }).title
    }
  }) || []
</script>

<template>
  <div>
    <NavBar :links="routeLinks" is-secondary />
    <h4>Pokemon Layout</h4>
    <RouterView />
  </div>
</template>
