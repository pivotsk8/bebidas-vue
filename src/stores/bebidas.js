import { ref, reactive, onMounted } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: '',
    categoria: '',
  });

  onMounted(async () => {
    const {
      data: { drinks },
    } = await axios(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list',
    );
    categorias.value = drinks;
  });

  function obtenerRecetas() {
    console.log('...Consultar API');
  }
  return {
    categorias,
    busqueda,
    obtenerRecetas,
  };
});
