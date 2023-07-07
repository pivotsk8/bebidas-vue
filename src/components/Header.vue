<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useBebidasStore } from '../stores/bebidas';
import { storeToRefs } from 'pinia';

const route = useRoute();
const store = useBebidasStore();
const { categorias, busqueda } = storeToRefs(store);

const paginaInicio = computed(() => route.name === 'inicio');
const handleSubmit = () => {
  store.obtenerRecetas();
};
</script>

<template>
  <header class="bg-slate-800" :class="{ header: paginaInicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }">
            <img src="/img/logo.svg" alt="Logotipo" class="w-32" />
          </RouterLink>
        </div>

        <nav class="flex gap-4">
          <RouterLink
            :to="{ name: 'inicio' }"
            class="text-white uppercase font-bold"
            active-class="text-orange-500">
            Inicio
          </RouterLink>

          <RouterLink
            :to="{ name: 'favoritos' }"
            class="text-white uppercase font-bold"
            active-class="text-orange-500">
            Favoritos
          </RouterLink>
        </nav>
      </div>

      <form
        v-if="paginaInicio"
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        @submit.prevent="handleSubmit">
        <div class="space-y">
          <label
            class="block text-white uppercase font-extrabold text-lg"
            for="ingredientes">
            Nombre o Ingrediente
          </label>
          <input
            id="ingrediente"
            type="text"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o Ingredientes: ej. Vodka, Tequila, etc"
            v-model="busqueda.nombre" />
        </div>

        <div class="space-y">
          <label
            class="block text-white uppercase font-extrabold text-lg"
            for="categoria">
            Categoria
          </label>
          <select
            id="categoria"
            class="p-3 w-full rounded-lg focus:outline-none"
            v-model="busqueda.categoria">
            <option value="">-- Selecciona --</option>
            <option
              v-for="categoria in categorias"
              :value="categoria.strCategory"
              :key="categoria.strCategory">
              {{ categoria.strCategory }}
            </option>
          </select>
        </div>

        <input
          type="submit"
          value="Buscar Recetas"
          class="bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase" />
      </form>
    </div>
  </header>
</template>

<style>
.header {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
