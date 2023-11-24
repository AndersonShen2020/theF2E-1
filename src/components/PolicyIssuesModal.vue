<script setup>
import { onMounted } from "vue";
import { Modal } from "bootstrap";

let modal = null;

onMounted(() => {
  modal = new Modal("#modal");
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
  <div id="modal" class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-xxl">
      <div class="modal-content">
        <div class="modal-header py-6 px-12 border-0">
          <h5 class="modal-title fs-2 fw-bold">政策議題</h5>
          <button type="button" class="btn-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body pt-2 pb-12 px-12">
          <div class="d-flex g-8"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
