<script setup>
import PolicyIssues from "@/components/PolicyIssuesComponent.vue";
import Modal from "@/components/ModalTemplate.vue";
import { ref, watch, onMounted } from "vue";

// AOS.js
import AOS from "aos";
import "aos/dist/aos.css";

// Store
import { useModalStore } from "@/stores/modal";
const modalStore = useModalStore();
const { setModalController, setModalTitle, setCurrentComp } = modalStore;

// AOS.js
onMounted(() => {
  AOS.init({
    duration: 1500,
    once: true,
    delay: 300,
    easing: "ease"
  });
});

// Modal
const modalComp = ref(null);
watch(modalComp, (newVal) => {
  setModalController(newVal);
});
function showModal() {
  modalComp?.value?.showModal();
}
</script>

<template>
  <!-- 台灣的明天 喵先鋪路 -->
  <div class="container">
    <div class="banner" id="1">
      <div class="d-flex flex-column justify-content-center">
        <h3
          data-aos="fade-up"
          data-aos-duration="1500"
          class="bg-primary-gradient text-center font-mantou text-clip pt-lg-24 pt-8 mlh-slogan lh-105"
        >
          台灣的明天 <br class="d-lg-none d-inline" />
          喵先鋪路
        </h3>
        <div
          data-aos="fade-up"
          data-aos-duration="1600"
          class="d-flex flex-md-row flex-column justify-content-center align-items-center mt-4"
        >
          <h3 class="lh-1 py-3 px-4 me-4 mb-0 border rounded-4 text-white fw-bold bg-slate-700 mlh-job">
            2024 立委參選人
          </h3>
          <h1 class="lh-base mb-0 d-flex align-items-center logo-primary py-3 px-4">
            <span
              class="align-items-center bg-primary-gradient d-inline-flex justify-content-center rounded-circle text-white logo-number fs-2 me-4"
            >
              3
            </span>
            <p class="mb-0 text-primary fw-bold mlh-mainchar">喵立翰 Miao Li-Han</p>
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1700" class="mt-lg-6 mt-4">
          <div class="d-flex justify-content-center">
            <img class="w-75" src="@/assets/images/pictures/image 12.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 為喵星人，護台灣！ 從喵的眼中，看見台灣 喵的未來，人的希望 -->
  <div class="bg-primary overflow-hidden">
    <ul class="list-unstyled lh-105 text-white font-mantou marquee d-flex gap-6 text-nowrap mb-0 position-relative">
      <li>為喵星人，護台灣！</li>
      <li>從喵的眼中，看見台灣</li>
      <li>喵的未來，人的希望</li>
    </ul>
  </div>
  <!-- 候選人主張 -->
  <div class="bg-theme-2" id="2">
    <div class="py-16">
      <div class="py-10">
        <div class="container">
          <div class="bg-white d-flex flex-lg-row flex-column gap-lg-6 rounded-5">
            <div
              data-aos="zoom-out-right"
              class="rounded-start-5 py-lg-16 px-lg-10 py-10 px-6 d-flex flex-column gap-8"
            >
              <div class="d-flex flex-column align-items-center">
                <p class="mb-0 fw-bold text-white bg-slate-700 py-2 px-3 rounded-3">ADVOCATE</p>
                <h2 class="font-mantou bg-primary-gradient text-clip display-3 fw-normal lh-base mb-0 sub-title">
                  候選人主張
                </h2>
              </div>
              <h3 class="fw-bold lh-base mb-0 advocate-subtitle">
                我堅信 ! 藉由推動更完善的<span class="text-primary">貓咪福利</span>和相關政策，更是間接地投資於<span
                  class="text-primary"
                  >台灣的未來</span
                >。
              </h3>
              <p class="advocate-text mb-0">
                畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP
                經濟帶來巨大效益。
                <br />
                因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
              </p>
            </div>
            <img
              data-aos="zoom-out-left"
              class="img-fluid object-fit-cover rounded-end-lg-5 rounded-bottom-5 w-lg-50 w-auto"
              src="@/assets/images/pictures/image 8.webp"
              alt="advocate"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 最新活動 -->
  <div class="py-16" id="3">
    <div class="py-lg-10 py-0">
      <div class="container">
        <div class="d-flex flex-column align-items-center">
          <p class="mb-0 fw-bold text-white bg-slate-700 py-2 px-3 rounded-3">LATEST EVENTS</p>
          <h2 class="font-mantou bg-primary-gradient text-clip display-3 fw-normal lh-base mb-0 sub-title">最新活動</h2>
        </div>
        <div class="d-flex flex-lg-row flex-column gap-6 mt-lg-16 mt-10">
          <div data-aos="fade-right" class="w-lg-50 w-100">
            <div class="card border-0">
              <img
                class="img-fluid object-fit-cover rounded-4 img-event"
                src="@/assets/images/pictures/event-1.webp"
                alt="參與台北寵物論壇，爭取貓咪友善環境"
              />
              <div class="card-body p-0">
                <p class="mb-0 mt-4 text-slate-400 event-date">2023/12/26</p>
                <h3 class="mb-0 mt-2 fs-5 fw-bold lh-base">參與台北寵物論壇，爭取貓咪友善環境</h3>
                <p class="mb-0 mt-2">
                  炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                  VIP 休憩空間。
                </p>
              </div>
            </div>
          </div>
          <div class="w-lg-50 w-100">
            <ul class="list-unstyled mb-0">
              <li data-aos="fade-up" class="mb-6">
                <div class="d-flex flex-row border-0">
                  <img
                    class="me-4 img-fluid object-fit-cover rounded-4 img-event-list"
                    src="@/assets/images/pictures/event-2.webp"
                    alt="掃街模式開啟！帶著你的貓耳，來和我一起走！"
                  />
                  <div class="p-0 event-box">
                    <p class="mb-0 text-slate-400 event-date">2023/12/24</p>
                    <h3 class="mb-0 mt-2 fs-6 fw-bold lh-base">掃街模式開啟！帶著你的貓耳，來和我一起走！</h3>
                    <p class="mb-0 mt-2 event-box-text">
                      街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！
                    </p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" class="mb-6">
                <div class="d-flex flex-row border-0">
                  <img
                    class="me-4 img-fluid object-fit-cover rounded-4 img-event-list"
                    src="@/assets/images/pictures/event-3.webp"
                    alt="收容所模特兒大比拼！"
                  />
                  <div class="p-0 event-box">
                    <p class="mb-0 text-slate-400 event-date">2023/12/20</p>
                    <h3 class="mb-0 mt-2 fs-6 fw-bold lh-base">收容所模特兒大比拼！</h3>
                    <p class="mb-0 mt-2 event-box-text">
                      今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                    </p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" class="mb-6">
                <div class="d-flex flex-row border-0">
                  <img
                    class="me-4 img-fluid object-fit-cover rounded-4 img-event-list"
                    src="@/assets/images/pictures/event-1.webp"
                    alt="參與台北寵物論壇，爭取貓咪友善環境"
                  />
                  <div class="p-0 event-box">
                    <p class="mb-0 text-slate-400 event-date">2023/12/26</p>
                    <h3 class="mb-0 mt-2 fs-6 fw-bold lh-base">參與台北寵物論壇，爭取貓咪友善環境</h3>
                    <p class="mb-0 mt-2 event-box-text">
                      炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                      VIP 休憩空間。
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <button
              class="py-4 px-6 btn bg-slate-100 rounded-pill fw-semibold lh-base"
              @click="showModal(), setModalTitle('最新活動'), setCurrentComp('LatestEventsContent')"
            >
              查看更多
              <img class="ms-2 fs-2" src="@/assets/images/pictures/arrow_forward.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 政策議題 -->
  <PolicyIssues />
  <!-- 小額支持喵喵 & 民眾服務信箱 -->
  <div class="py-lg-16 py-md-15 py-16" id="5">
    <div class="py-lg-10 py-0">
      <div class="container">
        <div class="row g-6">
          <div data-aos="fade-right" class="col-md-6 col-12">
            <div class="p-lg-24 py-10 px-6 rounded-5 bg-primary d-flex flex-column">
              <h2 class="mb-0 font-mantou second-title text-white">小額支持喵喵</h2>
              <p class="mb-0 fw-semibold fs-lg-5 fs-6 text-white">您的小筆捐款，是每隻毛孩未來的大大動力！</p>
              <div class="d-flex justify-content-between align-items-center mt-6">
                <button
                  class="py-4 px-6 btn bg-white rounded-pill fw-semibold lh-base align-baseline"
                  @click="showModal(), setModalTitle('小額捐款'), setCurrentComp('DonateContent')"
                >
                  小額捐款<svg
                    class="donate-arrow-forward-icon ms-2 align-text-top"
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
                <img class="img-donate" src="@/assets/images/pictures/image 11.webp" alt="donate" />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" class="col-md-6 col-12">
            <div class="p-lg-24 py-10 px-6 rounded-5 bg-slate-700 d-flex flex-column h-100">
              <h2 class="mb-0 font-mantou second-title text-white">民眾服務信箱</h2>
              <p class="mb-0 fw-semibold fs-lg-5 fs-6 text-white">
                親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
              </p>
              <div class="d-flex flex-fill justify-content-between align-items-center mt-6">
                <button
                  class="py-4 px-6 btn bg-white rounded-pill fw-semibold lh-base align-baseline"
                  @click="showModal(), setModalTitle('民眾服務信箱'), setCurrentComp('EmailContent')"
                >
                  填寫表單<svg
                    class="donate-arrow-forward-icon ms-2 align-text-top"
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
                <img class="img-email" src="@/assets/images/pictures/image 15.svg" alt="email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 尾部立委標語 -->
  <div class="py-16">
    <div class="py-10">
      <h3 class="mb-0 bg-primary-gradient text-center font-mantou text-clip pt-lg-24 mlh-slogan lh-105">
        台灣的明天 <br class="d-lg-none d-inline" />
        喵先鋪路
      </h3>
      <div class="d-flex justify-content-center">
        <h2 class="lh-base mb-0 d-flex align-items-center logo-primary py-3 px-4 mt-4">
          <span
            class="align-items-center bg-primary-gradient d-inline-flex justify-content-center rounded-circle text-white logo-number fs-2 me-4"
          >
            3
          </span>
          <p class="mb-0 text-primary fw-bold mlh-mainchar">喵立翰 Miao Li-Han</p>
        </h2>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <Modal ref="modalComp" />
</template>
