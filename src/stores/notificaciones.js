import { ref, watch, watchEffect } from 'vue';
import { defineStore } from 'pinia';

export const useNotificacionStore = defineStore('notificacion', () => {
  const texto = ref('');
  const error = ref(false);
  const mostrar = ref(false);

  //   el watchEffect va obserbar cualquier cambio en los estados del store que esten adentro del watchEffect
  //   watchEffect(() => {
  //     if (mostrar.value) {
  //       setTimeout(() => {
  //         texto.value = '';
  //         error.value = false;
  //         mostrar.value = false;
  //       }, 3000);
  //     }
  //   });
  watch(mostrar, () => {
    if (mostrar.value) {
      setTimeout(() => {
        texto.value = '';
        error.value = false;
        mostrar.value = false;
      }, 3000);
    }
  });

  //   function $reset() {
  //     texto.value = '';
  //     error.value = false;
  //     mostrar.value = false;
  //   }

  //reset es una funcion de pinia para resetear el estado pero se tiene que crear

  return {
    texto,
    error,
    mostrar,
  };
});
