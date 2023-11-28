import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("counter", () => {
  // state
  const modalController = ref(null);
  const modalTitle = ref(null);
  const currentComp = ref(null);
  const policyTitle = ref(null);

  // getters
  const getModalController = computed(() => modalController.value);
  const getModalTitle = computed(() => modalTitle.value);
  const getCurrentComp = computed(() => currentComp.value);
  const getPolicyTitle = computed(() => policyTitle.value);

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
  const setPolicyTitle = (str) => {
    policyTitle.value = str;
  };

  return {
    modalController,
    modalTitle,
    currentComp,
    policyTitle,
    getModalController,
    getModalTitle,
    getCurrentComp,
    getPolicyTitle,
    setModalController,
    setModalTitle,
    setCurrentComp,
    setPolicyTitle
  };
});
