import { ref, watch, onMounted } from 'vue';
import { defineStore } from 'pinia';
import { useBebidasStore } from './bebidas';

export const useFavoritosStore = defineStore('favoritos', () => {
  const bebidas = useBebidasStore();
  const favoritos = ref([]);

  watch(
    favoritos,
    () => {
      sincronizarLocalStorage();
    },
    { deep: true },
  );

  const sincronizarLocalStorage = () => {
    localStorage.setItem('favorito', JSON.stringify(favoritos.value));
  };

  const handlerClickFavoritos = () => {
    favoritos.value.push(bebidas.receta);
  };

  return {
    favoritos,
    handlerClickFavoritos,
  };
});
