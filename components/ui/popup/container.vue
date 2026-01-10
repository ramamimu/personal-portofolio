<script lang="ts" setup>
const emits = defineEmits<{
    (e: "close"): void;
}>();

onMounted(() => {
    document.body.style.overflow = "hidden";
});

onUnmounted(() => {
    document.body.style.overflow = "";
});
</script>

<template>
    <div 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 md:p-4 backdrop-blur-sm"
        @click="emits('close')"
    >
        <slot></slot>
    </div>
</template>