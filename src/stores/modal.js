import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("counter", () => {
  // state
  const modalController = ref(null);
  const modalTitle = ref(null);
  const currentComp = ref(null);

  // getters
  const getModalController = computed(() => modalController.value);
  const getModalTitle = computed(() => modalTitle.value);
  const getCurrentComp = computed(() => currentComp.value);

  // actions
  const setModalController = (str) => {
    modalController.value = str;
  };
  const setModalTitle = (str) => {
    modalTitle.value = str;
  };
  const setCurrentComp = (str) => {
    currentComp.value = str;
  };

  return {
    modalController,
    modalTitle,
    currentComp,
    getModalController,
    getModalTitle,
    getCurrentComp,
    setModalController,
    setModalTitle,
    setCurrentComp
  };
});
