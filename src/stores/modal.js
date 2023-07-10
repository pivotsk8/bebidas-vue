import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const modal = ref(false);

  function handlerClickModal() {
    modal.value = !modal.value;
  }
  return {
    modal,
    handlerClickModal,
  };
});
