<script lang="ts" setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ref, type VNodeRef } from "vue";

gsap.registerPlugin(ScrollTrigger);
const storylineContainer = ref<VNodeRef | null>(null);
</script>

<template>
  <!-- only scroll y -->
  <div
    ref="storylineContainer"
    class="relative grid h-screen grid-cols-8 overflow-hidden bg-center"
  >
    <section
      class="bg-dark col-span-8 flex items-start justify-center border pt-56 text-white md:col-span-3"
    >
      <div class="border">
        <!-- 2022 -->
        <div class="relative">
          <svg
            width="2"
            height="1000"
            class="absolute left-9 h-[500px] w-7xl"
            style="outline: none"
          >
            <line
              style="transform: scaleY(0.1); transform-origin: top"
              :transition="{ duration: 2 }"
              x1="1"
              y1="0"
              x2="1"
              :y2="1000"
              stroke="white"
              stroke-width="10"
            />
          </svg>
        </div>
        <!-- {{ scrollY }} -->

        <!-- 2022 -->
        <div class="flex items-center gap-5">
          <div class="bg-primary-light h-20 w-20 rounded-full"></div>
          <h2 class="text-5xl font-semibold">2022</h2>
        </div>
        <div class="relative flex items-center gap-5">
          <div class="bg-primary-light ml-[21px] h-10 w-10 rounded-full"></div>
          <div class="h-20 w-20 rounded-lg border">test</div>
        </div>
        <!-- 2023 -->
        <div class="flex items-center gap-5">
          <div class="bg-primary-light h-20 w-20 rounded-full"></div>
          <h2 class="text-5xl font-semibold">2023</h2>
        </div>
        <!-- 2024 -->
        <div class="flex items-center gap-5">
          <div class="bg-primary-light h-20 w-20 rounded-full"></div>
          <h2 class="text-5xl font-semibold">2024</h2>
        </div>
        <!-- 2025 -->
        <div class="flex items-center gap-5">
          <div class="bg-primary-light h-20 w-20 rounded-full"></div>
          <h2 class="text-5xl font-semibold">2025</h2>
        </div>
      </div>
    </section>
    <section
      class="bg-light text-primary-dark col-span-8 place-items-center text-xl font-semibold md:col-span-5"
    ></section>
  </div>
</template>
