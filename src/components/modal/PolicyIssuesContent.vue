<script setup>
import { ref, onMounted, watch } from "vue";
import { getAssetsFile } from "@/util/DynamicImg.js";

// 驅動 Store 的方法
import { storeToRefs } from "pinia";

// Store
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
const { setPolicyTitle } = modalStore;
const { getPolicyTitle } = storeToRefs(modalStore);

const eventData = [
  {
    title: "為毛孩子謀福利！推動寵物醫療保障方案",
    img: "pictures/image 5.webp",
    policys: [
      {
        title: "設立寵物醫療基金",
        content: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用"
      },
      {
        title: "提供醫療補助",
        content: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力"
      },
      {
        title: "合作動物醫院",
        content: "目前已有和超過 200 家動物醫院進行初步的合作討論"
      }
    ]
  },
  {
    title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
    img: "pictures/image 6.webp",
    policys: [
      {
        title: "建立寵物友善公園",
        content: "在各地區打造寵物友善的休憩場所，提供適合寵物活動和休憩的環境，鼓勵飼主與寵物共享時光"
      },
      {
        title: "支持寵物友善商家",
        content: "鼓勵商家設立寵物友善政策，提供適合寵物進入的空間，例如咖啡廳、餐廳和商場"
      },
      {
        title: "舉辦寵物聚會活動",
        content: "定期舉辦寵物社區活動，如寵物遊行、比賽或教育性活動，增進飼主間的交流，提升寵物社群意識"
      }
    ]
  },
  {
    title: "推廣寵物飼養教育，讓愛更加專業",
    img: "pictures/image 9.webp",
    policys: [
      {
        title: "開展寵物飼養知識課程",
        content: "提供免費或低價的寵物飼養知識課程，包括照顧、訓練和健康管理等方面，讓飼主更了解負責的寵物飼養方式"
      },
      {
        title: "建立寵物認證制度",
        content: "推動建立寵物飼主的認證制度，鼓勵飼主參與課程並通過測試，提升飼主的飼養專業水平"
      },
      {
        title: "推廣寵物認領意識",
        content: "提倡寵物認領而非購買，鼓勵領養收容所或救援中心的動物，推廣動物保護與愛護的觀念"
      }
    ]
  }
];

const contentMain = ref({});
const contentSecond = ref([]);

watch(getPolicyTitle, (newVal) => {
  filterContent(newVal);
});

const filterContent = (str) => {
  eventData
    .filter((i) => i.title === str)
    .forEach((n) => {
      contentMain.value = n;
    });
  contentSecond.value = eventData.filter((i) => i.title !== str);
};

onMounted(() => {
  filterContent(getPolicyTitle.value);
});
</script>

<template>
  <div class="d-flex flex-lg-row flex-column gap-8 h-100">
    <div class="d-flex flex-column">
      <img
        class="content-main-img object-fit-cover rounded-24 mb-4"
        :src="getAssetsFile(contentMain.img)"
        alt="contentMain.title"
      />
      <p class="mb-2 fs-14">{{ contentMain.title }}</p>
      <ul class="list-unstyled d-flex align-items-center gap-4">
        <li>分享</li>
        <li>
          <a href="#"><img src="@/assets/images/icons/icon-fb.svg" alt="fb" /></a>
        </li>
        <li>
          <a href="#"><img src="@/assets/images/icons/icon-ig.svg" alt="instagram" /></a>
        </li>
        <li>
          <a href="#"><img src="@/assets/images/icons/icon-line.svg" alt="line" /></a>
        </li>
        <li>
          <a href="#"><img src="@/assets/images/icons/icon-twitter.svg" alt="twitter" /></a>
        </li>
      </ul>
    </div>
    <div class="d-flex flex-column w-100">
      <h2 class="mb-8 fw-bold lh-base text-primary">{{ contentMain.title }}</h2>
      <div class="flex-grow-1">
        <div class="mb-8">
          <ul class="list-unstyled mb-0 d-flex flex-column gap-6">
            <li v-for="policy in contentMain.policys" :key="policy.title">
              <h5 class="lh-base fw-bold">{{ policy.title }}</h5>
              <p class="fs-18">{{ policy.content }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-4 bg-slate-50 rounded-12">
        <h3 class="mb-4 fs-6 fw-semibold">更多活動</h3>
        <ul class="list-unstyled row gx-4">
          <li
            class="col-lg-4 col-6"
            v-for="event in contentSecond"
            :key="event.title"
            @click="setPolicyTitle(event.title)"
          >
            <img
              class="content-second-img mb-3 object-fit-cover w-100 rounded-3"
              :src="getAssetsFile(event.img)"
              alt="event.title"
            />
            <p class="mb-0">{{ event.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
