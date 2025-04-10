<template>
  <footer class="bg-slate-900 text-white">
    <div
      class="container mx-auto flex flex-col items-center justify-between gap-5 px-4 py-10 md:flex-row"
    >
      <div>
        <div class="flex flex-col gap-2">
          <h1 class="text-lv-1">Contact Me</h1>
          <p class="text-gray-400">
            If you have any questions or want to collaborate, feel free to
            contact me.
          </p>
        </div>
        <div class="flex flex-col gap-2 space-x-4 py-5">
          <div class="flex items-center gap-2">
            <a href="https://github.com/ramamimu" target="_blank">
              <img
                src="/assets/images/icons/github.svg"
                class="scale-110-animation w-8 cursor-pointer"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-ferdiansyah-ramadhani/"
              target="_blank"
            >
              <img
                src="/assets/images/icons/linkedin.svg"
                class="scale-110-animation w-8 cursor-pointer"
                alt=""
              />
            </a>
            <p>ahm.f.ramadhani@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <p class="text-sm text-gray-400">
          This website is built with Nuxt 3, Tailwind CSS, and TypeScript.
        </p>
        <h1 class="text-lv-1">Made with ❤️ by Rama</h1>
        <p class="text-sm text-gray-400">
          &copy; {{ new Date().getFullYear() }} Rama. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
