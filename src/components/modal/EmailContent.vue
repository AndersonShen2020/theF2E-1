<script setup>
import { ref } from "vue";

// Store
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
const { getModalController } = modalStore;

const isEmail = ref(false);
</script>

<template>
  <div class="d-flex flex-lg-row flex-column gap-8 h-100">
    <div
      class="d-flex flex-lg-column flex-row donate-content-left py-lg-16 px-lg-10 p-6 bg-email rounded-24 h-lg-100 position-relative"
    >
      <div>
        <h3 class="mb-4 fs-lg-1 fs-6 fw-bold lh-base text-primary ls-lg-nega">
          分享您的想法<br />
          一同為我們的未來打造更美好！
        </h3>
      </div>
      <div class="d-flex justify-content-center align-items-end flex-grow-1">
        <img class="w-100 position-absolute bottom-0" src="@/assets/images/pictures/image 10.webp" alt="email" />
      </div>
    </div>
    <form class="donate-content-right mb-0 d-flex flex-column gap-6" v-if="isEmail === false">
      <div>
        <label for="name" class="form-label fs-5 fw-bold">您的姓名</label>
        <input type="text" class="form-control bg-slate-100 fs-18" id="name" placeholder="姓名" />
      </div>
      <div>
        <label for="email" class="form-label fs-5 fw-bold">Email</label>
        <input type="email" class="form-control bg-slate-100 fs-18" id="email" placeholder="email" />
      </div>
      <div>
        <label for="phone" class="form-label fs-5 fw-bold">手機</label>
        <input type="phone" class="form-control bg-slate-100 fs-18" id="phone" placeholder="手機號碼" />
      </div>
      <div>
        <label for="suggestions" class="form-label fs-5 fw-bold">您的建言</label>
        <textarea
          type="suggestions"
          class="form-control bg-slate-100 fs-18"
          id="suggestions"
          rows="6"
          placeholder="輸入內容"
        ></textarea>
      </div>
      <button class="btn btn-primary rounded-pill text-white fw-semibold py-4 px-8 w-100" @click="isEmail = true">
        送出意見
      </button>
    </form>
    <div
      class="donate-content-right d-flex flex-column justify-content-center align-items-center gap-8"
      v-if="isEmail === true"
    >
      <h3 class="fw-bold mb-0 lh-base">感謝您的意見</h3>
      <img class="w-35" src="@/assets/images/pictures/Group 15.webp" alt="thanks" />
      <button
        class="btn btn-slate-100 px-24 py-4 rounded-pill"
        @click="getModalController.hideModal(), (isEmail = false)"
      >
        關閉
      </button>
    </div>
  </div>
</template>
