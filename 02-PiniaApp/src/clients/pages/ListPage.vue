<script setup lang="ts">
import ClientList from "../components/ClientList.vue";
import PaginationNumbersVue from "../components/PaginationNumbers.vue";
import useClients from "../composables/useClients";
import LoadingModal from "../../share/components/LoadingModal.vue";
const { isLoading, clients, currentPage,totalPages, getPage} = useClients();
</script>

<template>
  <div>
    <h1>Listado de clientes</h1>

    <!-- Client list  -->
    <ClientList :clients="clients" />
    <!-- PaginationNumbers -->
    <PaginationNumbersVue
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-changed="getPage"
    />
    <!-- LoadingModal -->
    <LoadingModal v-if="isLoading" />
  </div>
</template>
<style scoped></style>
