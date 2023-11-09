<script setup></script>
<template>
  <header>
    <div class="container-fluid position-fixed bg-white z-3">
      <div class="px-lg-6 py-md-4">
        <nav class="d-flex justify-content-between align-items-center px-md-6 py-md-3 py-3">
          <h4 class="mb-0">
            <RouterLink to="/">
              <img src="../assets/images/logo.svg" alt="logo" />
              <span class="ms-2 fw-bold text-primary">喵立翰 Miao Li-Han</span>
            </RouterLink>
          </h4>
          <ul
            class="list-unstyled d-flex justify-content-lg-center justify-content-around gap-4 mb-0 position-lg-static position-fixed bottom-0 start-50 translate-middle-lg-0 translate-middle-x bg-white w-lg-auto w-100 header-navbar"
          >
            <li>
              <a class="p-lg-2 pt-3 pb-4 px-1 d-flex flex-lg-row flex-column align-items-center" href="#1">
                <img class="img-logo mb-1 d-lg-none d-inline" src="../assets/images/icons/icon-user.svg" alt="user" />
                候選人主張
              </a>
            </li>
            <li>
              <a class="p-lg-2 pt-3 pb-4 px-1 d-flex flex-lg-row flex-column align-items-center" href="#2">
                <img class="img-logo mb-1 d-lg-none d-inline" src="../assets/images/icons/icon-news.svg" alt="news" />
                最新活動
              </a>
            </li>
            <li>
              <a class="p-lg-2 pt-3 pb-4 px-1 d-flex flex-lg-row flex-column align-items-center" href="#3">
                <img
                  class="img-logo mb-1 d-lg-none d-inline"
                  src="../assets/images/icons/icon-policy.svg"
                  alt="policy"
                />
                政策議題
              </a>
            </li>
            <li>
              <a class="p-lg-2 pt-3 pb-4 px-1 d-flex flex-lg-row flex-column align-items-center" href="#4">
                <img
                  class="img-logo mb-1 d-lg-none d-inline"
                  src="../assets/images/icons/icon-donate.svg"
                  alt="donate"
                />
                小額捐款
              </a>
            </li>
            <li>
              <a class="p-lg-2 pt-3 pb-4 px-1 d-flex flex-lg-row flex-column align-items-center" href="#5">
                <img class="img-logo mb-1 d-lg-none d-inline" src="../assets/images/icons/icon-email.svg" alt="email" />
                <span class="d-lg-inline d-none">民眾</span>服務信箱
              </a>
            </li>
          </ul>
          <ul class="list-unstyled d-md-flex d-none gap-4 mb-0">
            <li>
              <a href="#"><img src="../assets/images/icons/icon-fb.svg" alt="fb" /></a>
            </li>
            <li>
              <a href="#"><img src="../assets/images/icons/icon-ig.svg" alt="ig" /></a>
            </li>
            <li>
              <a href="#"><img src="../assets/images/icons/icon-youtu.svg" alt="yt" /></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
