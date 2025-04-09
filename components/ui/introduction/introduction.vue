<script lang="ts" setup>
import ButtonLight from "~/components/button/button-light.vue";
import gsap from "gsap";

onMounted(() => {
  // the openingContainer disappear using clip-path circle
  const timeStaggers = 0.8;

  const openingContainerTl = gsap.timeline();
  openingContainerTl
    .from(".opening-container p", {
      y: 80,
      stagger: timeStaggers,
    })
    .to(".opening-container p", { stagger: timeStaggers, opacity: 100 }, "<")
    .to(".opening-container", {
      duration: 2,
      ease: "power2.out",
      clipPath: "circle(0%)",
    });

  const exclamationTl = gsap.timeline({
    repeat: -1,
    delay: 2.5,
    repeatDelay: 2,
  });
  exclamationTl
    .to(".exclamation", {
      duration: 1,
      rotate: 180,
      ease: "bounce.out",
      // i want to rotate the exclamation mark in the bottom
      transformOrigin: "50% 80%",
      y: 5,
    })
    .to(
      ".exclamation",
      {
        y: 0,
        rotate: 360,
        transformOrigin: "50% 80%",
        duration: 0.5,
        ease: "bounce.in",
      },
      "+=0.5",
    );
});
</script>

<template>
  <div class="relative grid min-h-screen grid-cols-8 overflow-hidden bg-center">
    <section
      class="bg-dark relative col-span-8 flex items-center justify-center px-3 text-white sm:px-0 md:col-span-4"
    >
      <div
        class="opening-container bg-primary-dark absolute z-10 flex h-full w-full flex-col items-center justify-center text-5xl"
        style="clip-path: circle(100%)"
      >
        <div>
          <p class="pb-3 opacity-0">Hi</p>
          <p class="opacity-0">I'm Rama</p>
        </div>
      </div>
      <div
        class="relative flex min-h-screen max-w-[360px] flex-col justify-center gap-7 md:h-screen lg:my-0"
      >
        <div class="flex space-x-4">
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
        </div>
        <h1
          class="relative text-3xl font-semibold tracking-wider md:text-4xl lg:text-5xl"
        >
          Get to<br />know me<span class="exclamation absolute">!</span>
        </h1>
        <div class="flex flex-col space-y-4 text-base">
          <p>
            This work serves as documentation of my journey as a software
            engineer. It is my personal reward—a reminder of how far I've come.
          </p>
          <p>
            In this project, you'll explore my experiences in front-end,
            back-end, and cloud development. I work with Vue, React, Go,
            Node.js, Python, and Google Cloud Platform (GCP), and this journey
            reflects my growth, challenges, and accomplishments in these
            technologies.
          </p>
          <!-- uncomment if there's another page exist -->
          <!-- <p>
            If you're short on time to enjoy the full details, feel free to
            download my CV below.
          </p> -->
        </div>
        <div class="w-20">
          <a href="/resume.pdf" download>
            <ButtonLight>
              <Icon
                name="material-symbols-download-2"
                class="text-primary-dark"
              />
              <p>cv</p>
            </ButtonLight>
          </a>
        </div>
      </div>
    </section>
    <section
      class="bg-primary-light/[50%] relative col-span-8 flex items-center justify-center py-24 md:col-span-4 md:flex-none md:py-0"
    >
      <img
        src="/assets/images/introduction/me.png"
        alt=""
        class="left-32 w-96 md:absolute md:w-[800px] md:rounded-4xl"
      />
    </section>
  </div>
</template>
