import type { Client } from "../interfaces/client";
import clientsApi from "../../api/clients-api";
import { useQuery } from "@tanstack/vue-query";
import { useClientsStore } from "../../store/clients";
import { storeToRefs } from "pinia";
import { watch} from "vue";

const getClients = async (page:number): Promise<Client[]> => {

  //Para poder retrasar lo obteción de datos y ver el Loading
//   await new Promise( resolve => {
//     setTimeout( () => resolve(true), 1500 )
// });

  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { clients, currentPage, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery({
    queryKey: ["clients?page=", currentPage],
    queryFn: () => getClients(currentPage.value),
    
  });
  watch(data, (clients) => {
    if (clients) store.setClients(clients);
  });

  return {
    clients,
    currentPage,
    isLoading,
    totalPages,
    //Methods
    getPage(page: number) {
      store.setPage(page);
    },

    // Getters [1,2,3,4,5],
    // totalPageNumbers: computed(() =>
    //   [...new Array(totalPages.value)].map((v, i) => i + 1)
    // ),
  };
};

export default useClients;
