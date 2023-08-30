<template>
  <footer
    class=""
    aria-labelledby="footer-heading"
    style="
      background: linear-gradient(45deg, #1f1f1f, #171717, #121212, #2c2c2c);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
    "
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <a href="/../"
          ><img
            class="h-12 magnetic-item"
            :src="withBase('/images/elephant-light.png')"
            alt="ar.io Logo"
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

footer {
  display: block;
}

.fa-sr-only, .fa-sr-only-focusable:not(:focus), .sr-only, .sr-only-focusable:not(:focus) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border-width: 0;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.h-12 {
    height: 3rem;
}

img, video {
    max-width: 100%;
    height: auto;
}

audio, canvas, embed, iframe, img, object, svg, video {
    display: block;
    vertical-align: middle;
}

.gap-8 {
    gap: 2rem;
}

.grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid {
    display: grid;
}

.mt-6 {
    margin-top: 1.5rem;
}

.mt-16 {
    margin-top: 4rem;
}

.leading-6 {
    line-height: 1.5rem;
}

.text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

menu, ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.text-gray-300 {
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity));
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.mt-10 {
    margin-top: 2.5rem;
}

.pt-8 {
    padding-top: 2rem;
}

.border-white\/10 {
    border-color: rgb(255 255 255 / 0.1);
}

.border-t {
    border-top-width: 1px;
}

.mt-16 {
    margin-top: 4rem;
}

.flex {
    display: flex;
}

.magnetic-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
}

.mt-8 {
    margin-top: 2rem;
}

.scrollbar-track.show, .scrollbar-track:hover {
    opacity: 1;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}

.scrollbar-track-y {
    top: 0;
    right: 0;
    width: 8px;
    height: 100%;
}

.scrollbar-track {
    position: absolute;
    opacity: 0;
    z-index: 1;
    background: rgba(222, 222, 222, .75);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: opacity 0.5s 0.5s ease-out;
    transition: opacity 0.5s 0.5s ease-out;
}

.scrollbar-track {
    background: transparent !important;
    z-index: 99999 !important;
    /* transition: background 0.2s ease-in-out; */
}

.scrollbar-thumb {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, .5);
    border-radius: 4px;
}

.scrollbar-thumb {
    background: #DDD !important;
    opacity: .25;
    transition: opacity 0.2s ease-in-out;
}



@media (min-width: 1024px){

.lg\:pt-32 {
    padding-top: 8rem;
}

.lg\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
}

.lg\:flex {
    display: flex;
}

.lg\:mt-24 {
    margin-top: 6rem;
}

.lg\:items-center {
    align-items: center;
}

.lg\:justify-between {
    justify-content: space-between;
}


}



.font-bold,
.font-strong,
.bold {
  font-weight: bold !important;
}

</style>
