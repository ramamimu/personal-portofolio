<template>
  <div
    class="bg-[url(/assets/images/backgrounds/wave.svg)] bg-cover font-roboto"
  >
    <div class="grid grid-cols-8 bg-center h-screen overflow-hidden relative">
      <section
        class="col-span-8 md:col-span-3 bg-primary-dark/[80%] text-white flex justify-center items-center"
      >
        <div class="flex flex-col gap-7 max-w-[360px] relative">
          <div class="flex items-center space-x-4 mb-5">
            <img src="/assets/images/icons/github.svg" class="w-10" alt="" />
            <img src="/assets/images/icons/linkedin.svg" class="w-10" alt="" />
          </div>
          <h1 class="text-5xl tracking-wider font-semibold">
            Get to<br />know me!
          </h1>
          <div class="text-base flex flex-col space-y-4">
            <p>
              This work serves as documentation of my journey as a software
              engineer. It is my personal reward—a reminder of how far I've
              come.
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
            <div class="button button-light">
              <Icon
                name="material-symbols-download-2"
                class="text-primary-dark"
              />
              <p>cv</p>
            </div>
          </div>
          <div class="text-5xl font-light mt-20">NEXT</div>
        </div>
      </section>
      <section
        class="col-span-8 md:col-span-2 bg-primary-light/[80%] text-primary-dark text-xl font-semibold grid grid-rows-2 place-items-center"
      >
        <div class="quote-container">
          <div class="quote-box">
            <p>
              “Give glad tidings and do not repel people. Make things easy and
              do not make things difficult”
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
        class="col-span-8 flex items-center md:col-span-3 bg-primary-light/[80%]"
      >
        <img
          src="/assets/images/introduction/me.png"
          alt=""
          class="rounded-4xl w-[800] absolute"
        />
      </section>
    </div>
  </div>
</template>
