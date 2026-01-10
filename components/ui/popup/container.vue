<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
// when open, prevent body scroll
onMounted(() => {
    document.body.style.overflow = "hidden";
});

onUnmounted(() => {
    document.body.style.overflow = "";
});
</script>