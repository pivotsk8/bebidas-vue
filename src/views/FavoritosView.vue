<script setup>
import { useFavoritosStore } from '../stores/favoritos';
import Receta from '../components/Receta.vue';
import { storeToRefs } from 'pinia';

const favoritosStore = useFavoritosStore();
const { favoritos } = storeToRefs(favoritosStore);
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>

  <p v-if="favoritosStore.noFavoritos" class="my-10 text-center text-2xl">
    No hay Favoritos
  </p>

  <div
    v-elsef
    class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    <Receta
      v-for="receta in favoritos"
      :receta="receta"
      :key="receta.idDrink" />
  </div>
</template>
