<script lang="ts" setup>
import { projects } from "~/contents/projects";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WaveText from "~/components/wave-text/wave-text.vue";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

onMounted(() => {
  const projectTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".gsap-project-box-container",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
  projectTl.to(".gsap-project-box", {
    opacity: "100%",
    stagger: {
      each: 0.2,
    },
  });
});
</script>

<template>
  <div class="container mx-auto min-h-screen py-20">
    <div class="max-w-[700px] px-4 py-32 md:px-32 md:py-72">
      <h1 class="gsap-project-title text-lv-1 tracking-wide text-gray-800">
        <WaveText text="Projects" attributeName="gsap-project-title" />
      </h1>
      <p class="mt-4 text-gray-600">
        Through these projects, i’m not just building something but also
        building potentials. Every challenge is an opportunity to sharpen skills
        and unlock new possibilities which showing on some of the projects that
        showcase below.
      </p>
    </div>
    <div
      class="gsap-project-box-container flex flex-wrap justify-center gap-10"
    >
      <div
        v-for="project in projects"
        :key="project.title"
        class="gsap-project-box h-auto rounded-md bg-white/20 p-5 opacity-0 shadow-lg transition-all duration-500 ease-in-out hover:bg-white/50 sm:p-24 md:hover:shadow-2xl lg:w-96 lg:p-5"
      >
        <h2 class="pt-5 text-xl font-medium">
          {{ project.title }}
        </h2>
        <div class="flex items-center gap-2 py-2">
          <div class="w-10 rounded-full bg-slate-600/20 p-2">
            <img :src="project.company.logo" alt="" />
          </div>
          <p class="text-sm font-light tracking-wider">
            associated with {{ project.company.associated }}
          </p>
        </div>
        <img :src="project.documentations.image.link" alt="" />
        <p class="pt-1 text-center text-xs">
          {{ project.documentations.image.title }}
        </p>
        <h3 v-if="project.documentations.links.length > 0" class="text-lv-3">
          Documentations
        </h3>
        <div class="flex flex-wrap gap-2">
          <a
            v-for="doc in project.documentations.links"
            :key="doc.name"
            :href="doc.link"
            target="_blank"
            class="rounded-sm border bg-slate-600 p-1 text-xs tracking-wider text-white transition-all duration-300 hover:bg-slate-100 hover:text-slate-800"
          >
            {{ doc.name }}
          </a>
        </div>
        <h3 class="text-lv-3">Tools</h3>
        <div class="flex flex-wrap gap-2">
          <p
            v-for="tool in project.tools"
            :key="tool"
            class="inline-block rounded-lg border p-1 text-xs"
          >
            {{ tool }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
