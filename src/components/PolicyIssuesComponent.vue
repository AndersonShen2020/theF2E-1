<script setup>
import { ref, onMounted } from "vue";
import { register } from "swiper/element/bundle";
import { Pagination } from "swiper/modules";
import { getAssetsFile } from "@/util/DynamicImg.js";
import Modal from "@/components/PolicyIssuesModal.vue";

const policyData = [
  {
    img: "pictures/image 5.webp",
    tag: "喵的保障",
    title1: "為毛孩子謀福利！",
    title2: "推動寵物醫療保障方案"
  },
  {
    img: "pictures/image 9.webp",
    tag: "喵的教育",
    title1: "推廣寵物飼養教育，",
    title2: "讓愛更加專業"
  },
  {
    img: "pictures/image 6.webp",
    tag: "喵的福利",
    title1: "打造休閒天堂！",
    title2: "推廣寵物休閒與娛樂場所"
  },
  {
    img: "pictures/image 5.webp",
    tag: "喵的保障",
    title1: "為毛孩子謀福利！",
    title2: "推動寵物醫療保障方案"
  },
  {
    img: "pictures/image 9.webp",
    tag: "喵的教育",
    title1: "推廣寵物飼養教育，",
    title2: "讓愛更加專業"
  },
  {
    img: "pictures/image 6.webp",
    tag: "喵的福利",
    title1: "打造休閒天堂！",
    title2: "推廣寵物休閒與娛樂場所"
  }
];

// swiper
register();
onMounted(() => {
  const swiperEl = document.querySelector("swiper-container");
  const params = {
    modules: [Pagination],
    // inject modules styles to shadow DOM
    injectStylesUrls: ["path/to/pagination-element.min.css"],
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };

  Object.assign(swiperEl, params);
  swiperEl.initialize();
});

// Modal
const policyModal = ref(null);
function showModal() {
  policyModal?.value?.showModal();
}
</script>

<template>
  <section class="bg-theme-2" id="4">
    <div class="py-16">
      <div class="py-10">
        <div class="d-flex flex-column align-items-center">
          <p class="mb-0 fw-bold text-white bg-slate-700 py-2 px-3 rounded-3">POLICY ISSUES</p>
          <h2 class="font-mantou bg-primary-gradient text-clip display-3 fw-normal lh-base mb-0 sub-title">政策議題</h2>
        </div>
        <swiper-container
          class="mt-16"
          init="false"
          loop="true"
          navigation-next-el=".swiper-next-button"
          navigation-prev-el=".swiper-prev-button"
          effect="coverflow"
          grab-cursor="true"
          centered-slides="true"
          slides-per-view="auto"
          space-between="48"
          coverflow-effect-rotate="0"
          coverflow-effect-stretch="-30"
          coverflow-effect-depth="150"
          coverflow-effect-modifier="1"
          coverflow-effect-slide-shadows="false"
        >
          <swiper-slide v-for="(data, i) in policyData" :key="i + data.title1">
            <div class="p-md-8 p-4 bg-white rounded-5">
              <div class="d-flex flex-md-row flex-column gap-8">
                <img class="rounded-24" :src="getAssetsFile(data.img)" :alt="data.title1 + data.title2" />
                <div class="d-flex flex-column justify-content-center align-items-start">
                  <p class="mt-6 mb-0 py-1 px-3 rounded-pill policy-tag" :title="data.tag">{{ data.tag }}</p>
                  <h3 class="mt-4 mb-0 fs-4 fw-bold lh-base">{{ data.title1 }}<br />{{ data.title2 }}</h3>
                  <button
                    class="mt-10 py-4 px-6 btn bg-primary text-white rounded-pill fw-semibold lh-base align-baseline"
                    @click="showModal"
                  >
                    查看<svg
                      class="arrow-forward-icon ms-2 align-text-top"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 0.496948L21.6875 11.1844L11 21.8719L9.125 19.9969L16.5625 12.4969H0.3125V9.87195H16.5625L9.125 2.37195L11 0.496948Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <div class="d-flex justify-content-center align-items-center gap-4">
          <div class="swiper-prev-button"><img src="../assets/images/pictures/button-prev.svg" alt="" /></div>
          <div class="swiper-pagination d-flex gap-4"></div>
          <div class="swiper-next-button"><img src="../assets/images/pictures/button-next.svg" alt="" /></div>
        </div>
      </div>
    </div>
  </section>
  <Modal ref="policyModal" />
</template>

<style lang="scss">
@mixin bullet($opacity) {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 500px;
  background: #da7d4a;
  opacity: $opacity;
}

swiper-container {
  width: 100%;
  height: auto;
}

.swiper-pagination {
  &-bullet {
    @include bullet(0.4);
  }
  &-bullet-active {
    @include bullet(1);
  }
}

swiper-slide {
  padding-bottom: 40px;
}

.policy-tag {
  &[title="喵的保障"] {
    background-color: #f7ece1;
  }
  &[title="喵的教育"] {
    background-color: #fdd;
  }
  &[title="喵的福利"] {
    background-color: #beeadb;
  }
}
</style>
