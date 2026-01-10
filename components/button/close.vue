<template>
    <button
        type="button"
        class="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-xl font-semibold transition-colors hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 hover:scale-110 animation-transform animation-duration-300"
        aria-label="Close"
        @click="handleClose"
    >
        <span aria-hidden="true">&times;</span>
    </button>
</template>

<script lang="ts" setup>
const emits = defineEmits<{
    (e: "close"): void;
}>();

function handleClose() {
    emits("close");
}
</script>