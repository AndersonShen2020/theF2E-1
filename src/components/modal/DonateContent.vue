<script setup>
import { ref } from "vue";

// Store
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
const { getModalController } = modalStore;

const donationPlans = [
  {
    title: "喵星人之友",
    donateMoney: 600,
    donateNumber: 9957
  },
  {
    title: "喵星大使",
    donateMoney: 6000,
    donateNumber: 2000
  },
  {
    title: "喵星傳奇",
    donateMoney: 60000,
    donateNumber: 999
  }
];

const totalDonatePrice = ref(987655873);
const donatePrice = ref(0);
const customDonatePrice = ref();
const isDonate = ref(false);

const selectedPlan = ref(null);

const init = () => {
  isDonate.value = true;
  donatePrice.value = 0;
  selectedPlan.value = null;
};

function selectPlan(title) {
  selectedPlan.value = title;
}

const addDonatePrice = () => {
  if (selectedPlan.value === "自訂贊助金額") {
    totalDonatePrice.value += customDonatePrice.value;
  } else {
    totalDonatePrice.value += donatePrice.value;
  }
  init();
};
</script>

<template>
  <div class="d-flex flex-lg-row flex-column gap-8 h-100">
    <div class="d-flex flex-lg-column flex-row donate-content-left p-lg-10 p-6 bg-theme-2 rounded-24 h-lg-100">
      <div>
        <h3 class="mb-4 fs-lg-1 fs-6 fw-bold lh-base text-primary ls-lg-nega">
          您的小筆捐款<br />
          是每隻毛孩未來的大大動力！
        </h3>
        <p class="mb-0">目前小額贊助總金額</p>
        <h3 class="mb-0 fs-lg-2 fs-5 fw-bold lh-base">{{ totalDonatePrice.toLocaleString("en-US") }}</h3>
      </div>
      <div class="d-flex justify-content-center align-items-center flex-grow-1 position-lg-static position-relative">
        <img
          class="modal-img-donate position-lg-static position-absolute"
          src="@/assets/images/pictures/image 11.webp"
          alt="donate"
        />
      </div>
    </div>
    <ul class="list-unstyled donate-content-right mb-0 d-flex flex-column gap-4" v-if="isDonate === false">
      <li><h2 class="mb-0 fs-5 fw-bold lh-base">捐款方案</h2></li>
      <li
        class="py-6 px-4 border border-2 rounded-4"
        :class="{ 'border-primary': selectedPlan === plan.title }"
        v-for="(plan, index) in donationPlans"
        :key="index"
        @click="selectPlan(plan.title), (donatePrice = plan.donateMoney)"
      >
        <div class="d-flex flex-lg-row flex-column align-items-lg-center gap-2">
          <h3 class="flex-grow-1 fs-5 fw-bold mb-0 text-primary">
            {{ plan.title }}
          </h3>
          <div class="d-flex align-items-center justify-content-end text-end">
            <p class="mb-0 flex-grow-1 d-flex align-items-center">
              <span>NT$</span>
              <span class="ms-2 fs-4 fw-bold">{{ plan.donateMoney.toLocaleString("en-US") }}</span>
            </p>
            <p class="mb-0 fs-14 text-slate-500 modal-content-donate-number">
              已有 {{ plan.donateNumber.toLocaleString("en-US") }} 人贊助
            </p>
          </div>
        </div>
      </li>
      <li
        class="py-6 px-4 border border-2 rounded-4"
        :class="{ 'border-primary': selectedPlan === '自訂贊助金額' }"
        @click="selectPlan('自訂贊助金額')"
      >
        <h3 class="flex-grow-1 fs-5 fw-bold text-primary">自訂贊助金額</h3>
        <div class="d-flex align-items-center bg-slate-100 rounded-3 modal-content-donate-number-custom">
          <input
            type="number"
            class="bg-slate-100 border-0 text-slate-500 flex-grow-1"
            placeholder="輸入金額"
            v-model="customDonatePrice"
          />
        </div>
      </li>
      <li>
        <button class="btn btn-primary rounded-pill text-white fw-semibold py-4 px-8 w-100" @click="addDonatePrice()">
          前往捐款
        </button>
      </li>
    </ul>
    <div
      class="donate-content-right d-flex flex-column justify-content-center align-items-center gap-8"
      v-if="isDonate === true"
    >
      <h3 class="fw-bold mb-0 lh-base">感謝您的捐款</h3>
      <img class="w-35" src="@/assets/images/pictures/Group 15.webp" alt="thanks" />
      <button
        class="btn btn-slate-100 px-24 py-4 rounded-pill"
        @click="getModalController.hideModal(), (isDonate = false)"
      >
        關閉
      </button>
    </div>
  </div>
</template>
