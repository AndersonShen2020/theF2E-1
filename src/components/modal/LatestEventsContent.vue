<script setup>
import { ref, onMounted, watch } from "vue";
import { getAssetsFile } from "@/util/DynamicImg.js";
const eventData = [
  {
    title: "參與台北寵物論壇，爭取貓咪友善環境",
    date: "2023/12/26",
    img: "pictures/event-1.webp",
    content:
      "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。"
  },
  {
    title: "掃街模式開啟！帶著你的貓耳，來和我一起走！",
    date: "2023/12/24",
    img: "pictures/event-2.webp",
    content: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！"
  },
  {
    title: "收容所模特兒大比拼！",
    date: "2023/12/20",
    img: "pictures/event-3.webp",
    content: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！"
  }
];

const mainTitle = ref("參與台北寵物論壇，爭取貓咪友善環境");
const contentMain = ref({});
const contentSecond = ref([]);

watch(mainTitle, (newVal) => {
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
  filterContent(mainTitle.value);
});
</script>

<template>
  <div class="d-flex flex-lg-row flex-column gap-8">
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
    <div class="d-flex flex-column">
      <h2 class="mb-2 fw-bold lh-base text-primary">{{ contentMain.title }}</h2>
      <p class="mb-10 fs-14 text-slate-500">{{ contentMain.date }}</p>
      <div class="mb-16">
        <div class="mb-8">
          {{ contentMain.content }}
        </div>
      </div>
      <div class="p-4 bg-slate-50 rounded-12">
        <h3 class="mb-4 fs-6 fw-semibold">更多活動</h3>
        <ul class="list-unstyled row gx-4">
          <li class="col-lg-4 col-6" v-for="event in contentSecond" :key="event.title" @click="mainTitle = event.title">
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
