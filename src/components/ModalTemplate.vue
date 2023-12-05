<script setup>
import PolicyIssuesContent from "@/components/modal/PolicyIssuesContent.vue";
import LatestEventsContent from "@/components/modal/LatestEventsContent.vue";
import DonateContent from "@/components/modal/DonateContent.vue";
import EmailContent from "@/components/modal/EmailContent.vue";
import { ref, onMounted } from "vue";
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
  LatestEventsContent,
  DonateContent,
  EmailContent
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
      <div class="modal-content h-100">
        <div class="modal-header py-lg-6 px-lg-12 pt-4 pb-2 px-4 border-0">
          <h5 class="modal-title fs-2 fw-bold">{{ getModalTitle }}</h5>
          <button type="button" class="btn-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pt-2 pb-lg-12 pb-4 px-lg-12 px-4">
          <component :is="selectComp[getCurrentComp]"></component>
        </div>
      </div>
    </div>
  </div>
</template>
