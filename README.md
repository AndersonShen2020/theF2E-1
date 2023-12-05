# The F2E 2023 - 立委競選官網

## 作品參考來源

The F2E 2023 - Mission 1 立委競選官網

喵立翰 Miao Li-Han 台灣的明天 喵先鋪路

- 作者：jhen
- 連結：[The F2E 2023 - 立委競選官網](https://2023.thef2e.com/users/12061579704041679194)
- 設計稿：[Figma 連結](https://www.figma.com/file/DCnuTZQ00D5VHiDkBLhxQ3/2023-The-F2E-%E7%AB%8B%E5%A7%94%E7%AB%B6%E9%81%B8%E5%AE%98%E7%B6%B2?type=design&node-id=3888%3A1152&mode=design&t=yNxuPbcvPFxtc0il-1)

## 專案說明

### Node.js 版本

v18.18.0

### 專案指令

專案安裝

```shell
npm ci
```

專案啟動

```shell
npm run dev
```

專案打包

```shell
npm run build
```

### 專案資料夾說明

```
├── src
|  ├── assets
|  |  ├── fonts                         // 字型檔案
|  |  ├── images
|  |  |  ├── icons                      // Icon
|  |  |  ├── logo.svg                   // Logo
|  |  |  └── pictures                   // 圖片檔案
|  |  └── stylesheets
|  |     ├── all.scss                   // SCSS 整合檔案
|  |     ├── bases
|  |     |  ├── _base.scss              // 基礎樣式
|  |     |  └── _font-style.scss        // 字型樣式
|  |     ├── components
|  |     |  ├── _btn.scss               // Button 自訂樣式
|  |     |  ├── _input.scss             // Input 自訂樣式
|  |     |  └── _modal.scss             // Modal 自訂樣式
|  |     ├── helpers
|  |     |  ├── _utilities.scss         // Bootstrap utilities 自訂樣式
|  |     |  └── _variables.scss         // Bootstrap variables 自訂樣式
|  |     ├── layouts
|  |     |  ├── _footer.scss            // Footer 樣式
|  |     |  └── _header.scss            // Header 樣式
|  |     ├── pages
|  |     |  └── _index.scss             // Index 樣式
|  |     └── utils
|  |        └── _custom-colors.scss     // Bootstrap 自定義顏色
|  ├── components
|  |  ├── modal                         // Modal 的內容
|  |  |  ├── DonateContent.vue
|  |  |  ├── EmailContent.vue
|  |  |  ├── LatestEventsContent.vue
|  |  |  └── PolicyIssuesContent.vue
|  |  ├── FooterComponent.vue           // Footer 元件
|  |  ├── HeaderComponent.vue           // Header 元件
|  |  ├── ModalTemplate.vue             // Modal 元件
|  |  └── PolicyIssuesComponent.vue     // 政策議題元件
|  ├── router
|  |  └── index.js
|  ├── stores
|  |  ├── counter.js
|  |  └── modal.js                      // Modal 的跨元件操作
|  ├── util
|  |  └── DynamicImg.js                 // 動態載入圖片
|  ├── views
|  |  └── IndexView.vue
|  ├── App.vue
|  └── main.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### 使用技術

- Vue
  - [Pinia](https://pinia.vuejs.org/)
- CSS
  - [Bootstrap](https://getbootstrap.com/)
- 動畫
  - [Swiper](https://swiperjs.com/)
- 其他
  - [ESLint](https://eslint.org/)
  - [Stylelint](https://stylelint.io/)
  - [Prettier](https://prettier.io/)
  - [tree-cli](https://github.com/MrRaindrop/tree-cli) - 製作資料夾目錄
  - [Mobile simulator - responsive testing tool](https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk?pli=1) - chrome 的 RWD 模擬工具
