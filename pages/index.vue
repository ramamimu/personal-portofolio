<script lang="ts" setup>
import Introduction from "~/components/ui/introduction/introduction.vue";
import Project from "~/components/ui/project/project.vue";
import Footer from "~/components/ui/footer/footer.vue";
import ProjectDetail from "~/components/ui/project/detail.vue";
</script>

<template>  
  <main class="font-roboto bg-[url('/assets/images/backgrounds/texture.svg')]">
    <ProjectDetail/>
    <Introduction />
    <Project />
    <Footer />
  </main>
</template>
