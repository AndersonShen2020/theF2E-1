<script setup>
import { ref } from "vue";

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

const selectedPlan = ref(null);
function selectPlan(title) {
  selectedPlan.value = title;
}
const getLocalNumber = (money) => {
  return money.toLocaleString("en-US");
};
</script>

<template>
  <div class="d-flex flex-lg-row flex-column gap-8 h-100">
    <div class="d-flex flex-column donate-content-left p-10 bg-theme-2 rounded-24 h-100">
      <h3 class="mb-4 fs-1 fw-bold lh-base text-primary ls-nega">
        您的小筆捐款<br />
        是每隻毛孩未來的大大動力！
      </h3>
      <p class="mb-0">目前小額贊助總金額</p>
      <h3 class="mb-0 fs-2 fw-bold lh-base">987,655,873</h3>
      <div class="d-flex justify-content-center align-items-center flex-grow-1">
        <img class="modal-img-donate" src="@/assets/images/pictures/image 11.webp" alt="donate" />
      </div>
    </div>
    <ul class="list-unstyled donate-content-right mb-0 d-flex flex-column gap-4">
      <li><h2 class="mb-0 fs-5 fw-bold lh-base">捐款方案</h2></li>
      <li
        class="py-6 px-4 border border-2 rounded-4"
        :class="{ 'border-primary': selectedPlan === plan.title }"
        v-for="(plan, index) in donationPlans"
        :key="index"
        @click="selectPlan(plan.title)"
      >
        <div class="d-flex align-items-center">
          <h3 class="flex-grow-1 fs-5 fw-bold mb-0 text-primary">
            {{ plan.title }}
          </h3>
          <div class="d-flex align-items-center justify-content-end text-end">
            <p class="mb-0 flex-grow-1 d-flex align-items-center">
              <span>NT$</span>
              <span class="ms-2 fs-4 fw-bold">{{ getLocalNumber(plan.donateMoney) }}</span>
            </p>
            <p class="mb-0 fs-14 text-slate-500 modal-content-donate-number">
              已有 {{ getLocalNumber(plan.donateNumber) }} 人贊助
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
          <input type="number" class="bg-slate-100 border-0 text-slate-500 flex-grow-1" placeholder="輸入金額" />
        </div>
      </li>
      <li>
        <button class="btn btn-primary rounded-pill text-white fw-semibold py-4 px-8 w-100">前往捐款</button>
      </li>
    </ul>
  </div>
</template>
