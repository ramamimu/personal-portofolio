<script lang="ts" setup>
import Button from "./button.vue";
</script>
<template>
  <Button>
    <div class="button button-light">
      <slot></slot>
    </div>
  </Button>
</template>
