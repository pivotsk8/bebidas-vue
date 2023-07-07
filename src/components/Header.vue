<script setup></script>
<template>
  <header>
    <div class="mx-auto container px-5 py-16">
      <div></div>

      <form
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
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
            placeholder="Nombre o Ingredientes: ej. Vodka, Tequila, etc" />
        </div>

        <div class="space-y">
          <label
            class="block text-white uppercase font-extrabold text-lg"
            for="categoria">
            Categoria
          </label>
          <select
            id="categoria"
            class="p-3 w-full rounded-lg focus:outline-none">
            <option value="">-- Selecciona --</option>
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
