<script lang="ts" setup>
import ButtonLight from "~/components/button/button-light.vue";
</script>

<template>
  <div class="relative grid h-screen grid-cols-8 overflow-hidden bg-center">
    <section
      class="bg-dark col-span-8 flex items-center justify-center text-white md:col-span-3"
    >
      <div class="relative flex max-w-[360px] flex-col gap-7">
        <div class="flex items-center space-x-4">
          <img src="/assets/images/icons/github.svg" class="w-8" alt="" />
          <img src="/assets/images/icons/linkedin.svg" class="w-8" alt="" />
        </div>
        <h1 class="text-5xl font-semibold tracking-wider">
          Get to<br />know me!
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
          <p>
            If you're short on time to enjoy the full details, feel free to
            download my CV below.
          </p>
        </div>
        <div class="w-20">
          <ButtonLight>
            <Icon
              name="material-symbols-download-2"
              class="text-primary-dark"
            />
            <p>cv</p>
          </ButtonLight>
        </div>
      </div>
    </section>
    <section
      class="bg-light text-primary-dark col-span-8 grid grid-rows-2 place-items-center text-xl font-semibold md:col-span-2"
    >
      <div class="quote-container">
        <div class="quote-box">
          <p>
            “Give glad tidings and do not repel people. Make things easy and do
            not make things difficult”
          </p>
          <p class="quote-writer">Sahih al-Bukhari, 3559</p>
        </div>
      </div>
      <div class="quote-container">
        <div class="quote-box">
          <p>"A man who stands for nothing will fall for anything"</p>
          <p class="quote-writer">Malcolm X</p>
        </div>
      </div>
    </section>
    <section
      class="bg-primary-light/[50%] col-span-8 flex items-center md:col-span-3"
    >
      <img
        src="/assets/images/introduction/me.png"
        alt=""
        class="absolute w-[800] rounded-4xl"
      />
    </section>
  </div>
</template>
