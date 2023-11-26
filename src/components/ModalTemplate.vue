<script setup>
import PolicyIssuesContent from "@/components/modal/PolicyIssuesContent.vue";
import LatestEventsContent from "@/components/modal/LatestEventsContent.vue";
import { ref, onMounted, onUpdated } from "vue";
import { Modal } from "bootstrap";

// 驅動 Store 的方法
import { storeToRefs } from "pinia";

// Store
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
const { getModalTitle, getCurrentComp } = storeToRefs(modalStore);

const modalRef = ref(null);
let modal;

const selectComp = {
  PolicyIssuesContent,
  LatestEventsContent
};

onMounted(() => {
  modal = new Modal(modalRef.value, {});
});

function showModal() {
  modal.show();
}

function hideModal() {
  modal.hide();
}

defineExpose({
  showModal,
  hideModal
});
</script>

<template>
  <div id="templateModal" class="modal" tabindex="-1" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-xxl">
      <div class="modal-content">
        <div class="modal-header py-6 px-12 border-0">
          <h5 class="modal-title fs-2 fw-bold">{{ getModalTitle }}</h5>
          <button type="button" class="btn-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pt-2 pb-12 px-12">
          <component :is="selectComp[getCurrentComp]"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
