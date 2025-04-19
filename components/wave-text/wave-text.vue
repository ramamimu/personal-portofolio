<script lang="ts" setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  attributeName: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${props.attributeName}`,
      start: "top 80%",
      end: "top 20%",
      // play every time the title is in the viewport
      toggleActions: "restart none restart none",
    },
    yoyoEase: "power2.inOut",
  });

  tl.to(`.${props.attributeName} span`, {
    y: -20,
    stagger: {
      each: 0.1,
      amount: 0.5,
    },
  }).to(
    `.${props.attributeName} span`,
    {
      y: 0,
      stagger: {
        each: 0.1,
        amount: 0.5,
      },
    },
    "-=0.4",
  );
});
</script>

<template>
  <span v-for="(i, index) in text" :key="index" class="inline-block">
    {{ i }}
  </span>
</template>
