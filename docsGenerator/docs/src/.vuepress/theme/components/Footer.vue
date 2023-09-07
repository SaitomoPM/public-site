<template>
  <footer class="footer-container" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <a href="/../"
          ><img
            class="h-12 magnetic-item"
            :src="withBase('/images/elephant-light.png')"
            alt="ar.io Logo"
            style="background-color: #0a0b09"
        /></a>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-bold leading-6 text-white">USE</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    href="/../arns"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >ArNS (Beta)</a
                  >
                </li>
                <li>
                  <a
                    href="https://viewblock.io/arweave"
                    target="_blank"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Viewblock <i class="fa-solid fa-location-arrow"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="/../wallet"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Wallet</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-bold leading-6 text-white">DEVELOP</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    href="https://github.com/ar-io"
                    target="_blank"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >ar.io GitHub <i class="fa-solid fa-location-arrow"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="https://cookbook.ar-io.dev"
                    target="_blank"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Arweave Cookbook <i class="fa-solid fa-location-arrow"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="/gateways/#overview"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Gateways Operating Manual</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-bold leading-6 text-white">ENGAGE</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    href="https://ardrive.io/arcast/episodes-21-30/"
                    target="_blank"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >ArCast <i class="fa-solid fa-location-arrow"></i
                  ></a>
                </li>
                <li>
                  <a
                    href="/../brand-kit"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Brand Kit</a
                  >
                </li>
                <li>
                  <a
                    href="/../live"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Live</a
                  >
                </li>
                <li>
                  <a
                    href="https://ar-io-store.myshopify.com/"
                    target="_blank"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Merch <i class="fa-solid fa-location-arrow"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-sm font-bold leading-6 text-white">LEARN</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <a
                    href="/../articles"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Articles</a
                  >
                </li>

                <li>
                  <a
                    href="/"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Docs</a
                  >
                </li>

                <li>
                  <a
                    href="/../story"
                    class="text-sm leading-6 text-gray-300 hover:text-white"
                    style="font-weight: 500"
                    >Story</a
                  >
                </li>

                <li>
                  <div
                    href="#"
                    class="text-sm leading-6 text-gray-300"
                    style="font-weight: 500"
                  >
                    White Paper <span class="text-gray-500">(Soon)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between"
      >
        <div>
          <h3 class="text-sm font-bold leading-6 text-gray-300">
            Subscribe to our newsletter
          </h3>
          <p class="mt-2 mb-4 text-sm leading-6 text-gray-400">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
        </div>
        <button
          data-tf-slider="bfozRHd0"
          data-tf-position="right"
          data-tf-opacity="100"
          data-tf-iframe-props="title=Newsletter"
          data-tf-auto-close="1000"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          onMouseOver="this.style.background='#fff', this.style.color='#121212'"
          onMouseOut="this.style.background='#121212', this.style.color='#fff'"
          style="
            all: unset;
            display: inline-block;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #fafafa;
            font-size: 20px;
            border: 1px solid #fafafa;
            border-radius: 0px;
            padding: 0 33px;
            font-weight: bold;
            height: 50px;
            cursor: pointer;
            line-height: 25px;
            text-align: center;
            margin: 0;
            text-decoration: none;
          "
        >
          Subscribe
        </button>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </div>
      <div
        class="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-6 md:order-2">
          <a
            href="https://github.com/ar-io"
            class="magnetic-item"
            target="_blank"
            rel="noopener"
            ><i class="fab fa-github" style="color: #fafafa"></i
          ></a>

          <a
            href="https://discord.gg/NTcTc3DQ"
            class="magnetic-item"
            target="_blank"
            rel="noopener"
            ><i class="fab fa-discord" style="color: #fafafa"></i
          ></a>

          <a
            href="https://twitter.com/ar_io_team"
            class="magnetic-item"
            target="_blank"
            rel="noopener"
            ><i class="fab fa-twitter" style="color: #fafafa"></i
          ></a>

          <a
            href="https://www.linkedin.com/company/68614891"
            class="magnetic-item"
            target="_blank"
            rel="noopener"
            ><i class="fab fa-linkedin" style="color: #fafafa"></i
          ></a>
        </div>
        <p class="mt-8 text-xs leading-6 text-gray-400 md:order-1 md:mt-0">
          <strong>ar.io</strong> | v. 1.984
        </p>
        <h3 class="text-sm font-bold leading-6 text-white">
          <a
            href="/../terms-and-conditions"
            target="_blank"
            rel="noopener"
            style="
              text-decoration: none !important;
              font-style: normal !important;
            "
            >Terms and Conditions</a
          >
        </h3>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      // Your data here
    };
  },
  methods: {
    withBase(path) {
      return this.$withBase(path);
    },
  },
  mounted() {
    console.log("Footer has been mounted");
  },
};
</script>

<style scoped>
/* ------------------------------------------------------------- *
	* Footer
	/* ------------------------------------------------------------- */

.audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle;
}

.border-t {
  border-top-width: 1px !important;
}

.border-white\/10 {
  border-color: rgb(255 255 255 / 0.1);
}

.fa-sr-only,
.fa-sr-only-focusable:not(:focus),
.sr-only,
.sr-only-focusable:not(:focus) {
  clip: rect(0, 0, 0, 0);
  border-width: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.flex {
  display: flex;
}

.footer-col {
  flex: 1;
  margin: 0 5px;
  padding: 0 15px;
}

.footer-col-inner {
}

.footer-col:last-child {
  margin-right: 0;
  padding-right: 0;
}

.footer-col.order-m-1 {
  order: 1;
}

.footer-col.order-m-10 {
  order: 10;
}

.footer-col.order-m-2 {
  order: 2;
}

.footer-col.order-m-3 {
  order: 3;
}

.footer-col.order-m-4 {
  order: 4;
}

.footer-col.order-m-5 {
  order: 5;
}

.footer-col.order-m-6 {
  order: 6;
}

.footer-col.order-m-7 {
  order: 7;
}

.footer-col.order-m-8 {
  order: 8;
}

.footer-col.order-m-9 {
  order: 9;
}

.footer-col.order-m-first {
  order: -1;
}

.footer-col.order-m-last {
  order: 10;
}

.footer-col.tt-align-bottom {
  align-items: flex-end;
  display: flex;
}

.footer-col.tt-align-bottom-center {
  align-items: flex-end;
  display: flex;
  justify-content: center;
}

.footer-col.tt-align-bottom-right {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
}

.footer-col.tt-align-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.footer-col.tt-align-center-left {
  align-items: center;
  display: flex;
}

.footer-col.tt-align-center-right {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

.footer-col.tt-align-top-center {
  display: flex;
  justify-content: center;
}

.footer-col.tt-align-top-right {
  display: flex;
  justify-content: flex-end;
}

.footer-col:first-child {
  margin-left: 0;
  padding-left: 0;
}

.footer-container {
  /* background: linear-gradient(45deg, #1f1f1f, #171717, #121212, #2c2c2c);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite; */
  background-color: var(--BackgroundColor);
  height: 50px !important;
}
.gap-8 {
  gap: 2rem;
}

.grid {
  display: grid;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.h-12 {
  height: 3rem;
}

.img,
video {
  height: auto;
  max-width: 100%;
}

.lg\:flex {
  display: flex;
}

.lg\:items-center {
  align-items: center;
}

.lg\:justify-between {
  justify-content: space-between;
}

.lg\:mt-24 {
  margin-top: 6rem;
}

.lg\:px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.lg\:pt-32 {
  padding-top: 8rem;
}

.leading-6 {
  line-height: 1.5rem;
}

.magnetic-wrap {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
}

.menu,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.pt-8 {
  padding-top: 2rem;
}

.scrollbar-thumb {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  height: 8px;
  left: 0;
  position: absolute;
  top: 0;
  width: 8px;
}

.scrollbar-thumb {
  background: #ddd !important;
  opacity: 0.25;
  transition: opacity 0.2s ease-in-out;
}

.scrollbar-track {
  background: rgba(222, 222, 222, 0.75);
  opacity: 0;
  position: absolute;
  user-select: none;
  z-index: 1;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
  -webkit-user-select: none;
  transition: opacity 0.5s 0.5s ease-out;
}

.scrollbar-track {
  background: transparent !important;
  z-index: 99999 !important;
}

.scrollbar-track.show,
.scrollbar-track:hover {
  -webkit-transition-delay: 0s;
  opacity: 1;
  transition-delay: 0s;
}

.scrollbar-track-y {
  height: 100%;
  right: 0;
  top: 0;
  width: 8px;
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  /* color: rgb(209 213 219 / var(--tw-text-opacity)); */
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

#tt-footer {
  font-size: 14px;
  height: 10vh;
  position: relative;
  width: 100%;
  z-index: 2;
}

#tt-footer a {
  color: #fff;
  font-size: 14px;
}

#tt-footer .footer-social {
  color: #fff;
  height: 50px;
  line-height: 50px;
  pointer-events: auto;
  position: relative;
}

#tt-footer .footer-social .footer-social-text {
  cursor: pointer;
  display: block;
  font-size: 15px;
  opacity: 1;
  text-align: right;
  visibility: visible;
}

#tt-footer .footer-social .footer-social-text > span {
  margin-right: 13px;
}

#tt-footer .footer-social .social-buttons {
  opacity: 0;
  transform: translate3d(0, -50%, 0);
  visibility: hidden;
}

#tt-footer .footer-social:before {
  bottom: -30px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

#tt-footer .tt-btn {
  margin-bottom: 3px;
  margin-top: 3px;
}

#tt-footer .tt-copyright {
  color: #888;
}

#tt-footer .tt-copyright a {
  color: #888;
}

#tt-footer .tt-copyright a:hover {
}

#tt-footer .tt-copyright.text-gray .tt-btn-link > * {
  color: #ccc;
}

#tt-footer .tt-copyright.text-gray:hover .tt-btn-link .tt-btn-icon {
}

#tt-footer .tt-copyright.text-gray .tt-btn-link {
  font-weight: normal;
}

.tt-footer-inner {
  padding-left: 3.5%;
  padding-right: 3.5%;
  position: relative;
}

body:not(.tt-boxed) .tt-footer-inner,
.tt-footer-inner:not(.tt-wrap) {
  padding-left: 3.5%;
  padding-right: 3.5%;
}

body.tt-light-bg-on #tt-footer,
body.tt-light-bg-on #tt-footer a,
body.tt-light-bg-on #tt-footer .footer-social,
body.tt-light-bg-on #tt-footer .tt-btn-link > *,
body.tt-light-bg-on #tt-footer .tt-btn-link > *::after,
body.tt-light-bg-on #tt-footer .tt-btn-link::after,
body.tt-light-bg-on #tt-footer .tt-copyright.text-gray .tt-btn-link > *,
body.tt-light-bg-on #tt-footer .tt-btn-line {
  background-color: #111;
  color: #111;
}

.bold,
.font-bold,
.font-strong {
  font-weight: bold !important;
}

footer {
  display: block;
  color: var(--TextColor) !important;
}

footer a {
  color: var(--LinkColor) !important;
}

footer a:hover {
  color: var(--AccentColor) !important;
}

@media (max-width: 1024px) {
  #tt-footer {
    height: auto;
    padding: 60px 0;
  }
  .footer-col {
    display: block;
    margin-bottom: 50px;
    text-align: center;
  }
  .footer-col.order-m-10 {
    order: 10;
  }
  .footer-col.order-m-1 {
    order: 1;
  }
  .footer-col.order-m-2 {
    order: 2;
  }
  .footer-col.order-m-3 {
    order: 3;
  }
  .footer-col.order-m-4 {
    order: 4;
  }
  .footer-col.order-m-5 {
    order: 5;
  }
  .footer-col.order-m-6 {
    order: 6;
  }
  .footer-col.order-m-7 {
    order: 7;
  }
  .footer-col.order-m-8 {
    order: 8;
  }
  .footer-col.order-m-9 {
    order: 9;
  }
  .footer-col.order-m-first {
    order: -1;
  }
  .footer-col.order-m-last {
    order: 10;
  }
  .tt-footer-inner {
    display: flex;
    flex-direction: column;
  }
  #tt-footer .footer-social {
    margin-bottom: 10px;
  }
  #tt-footer .footer-social .footer-social-text {
    display: none;
  }
  #tt-footer .social-buttons > ul > li a {
    height: 34px;
    width: 34px;
  }
  #tt-footer .tt-copyright .tt-btn-link {
    height: auto;
  }
}

@media (min-width: 1024px) {
  #tt-footer {
    padding: 30px 0;
  }
  #tt-footer.footer-absolute {
    bottom: 30px;
    left: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
  }
  #tt-footer.footer-absolute a {
    pointer-events: initial;
  }
  .tt-footer-inner {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  #tt-footer .footer-social .footer-social-text,
  #tt-footer .footer-social .social-buttons {
    transition: all 0.3s ease;
  }
  #tt-footer .footer-social:hover .footer-social-text {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
    visibility: hidden;
  }
  #tt-footer .footer-social:hover .social-buttons {
    opacity: 1;
    transform: translateY(-100%);
    visibility: visible;
  }
}
</style>
