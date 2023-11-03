<script setup></script>
<template>
  <header>
    <div class="container-fluid position-fixed bg-white">
      <div class="px-6 py-4">
        <nav class="d-flex justify-content-between align-items-center px-6 py-3">
          <h4 class="mb-0">
            <RouterLink to="/">
              <img src="../assets/images/logo.svg" alt="logo" />
              <span class="ms-2">喵立翰 Miao Li-Han</span>
            </RouterLink>
          </h4>
          <ul
            class="list-unstyled d-flex justify-content-center gap-4 mb-0 position-lg-static position-fixed bottom-0 start-50 translate-middle-lg-0 translate-middle-x bg-white w-lg-auto w-100"
          >
            <li><a href="#1">候選人主張</a></li>
            <li><a href="#2">最新活動</a></li>
            <li><a href="#3">政策議題</a></li>
            <li><a href="#4">小額捐款</a></li>
            <li>
              <a href="#5"><span class="d-md-static d-none">民眾</span>服務信箱</a>
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
