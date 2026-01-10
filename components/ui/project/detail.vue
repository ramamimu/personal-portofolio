<script lang="ts" setup>
import PopupContainer from "~/components/ui/popup/container.vue";
import { projects } from "~/contents/projects";

import type { Project } from "@/types/projects";
import Close from "~/components/button/close.vue";
import { useProjectDetailStore } from "~/stores/projectDetail";

const projectDetailStore = useProjectDetailStore();

const project = computed<Project | null>(() => {
    return projects.find((p) => p.id === projectDetailStore.projectId) ?? null;
});

const close = () => {
    projectDetailStore.setIsActive(false);
};
</script>
<template>
    <PopupContainer v-if="projectDetailStore.isActive">
        <div
            class="flex w-full max-w-5xl flex-col overflow-hidden rounded-md bg-slate-100 p-5 shadow-2xl sm:p-8 max-h-[calc(100vh-2rem)]"
        >
            <div v-if="project" class="flex min-h-0 flex-col gap-6">
                <div>
                    <div class="flex items-start justify-between">
                        <h1 class="text-2xl font-bold tracking-wide text-gray-800 sm:text-3xl">
                            {{ project.title }}
                        </h1>
                        <Close @close="close" />
                    </div>
                    <div class="mt-3 flex items-center gap-3">
                        <div class="w-12 rounded-full bg-slate-600/20 p-2">
                            <img
                                :src="project.company.logo"
                                :alt="`${project.company.associated} logo`"
                            />
                        </div>
                        <p class="text-sm font-light tracking-wider text-gray-700">
                            associated with
                            <span class="font-medium">{{ project.company.associated }}</span>
                        </p>
                    </div>
                </div>

                <div class="flex-1 min-h-0 lg:grid gap-6 lg:grid-cols-2 lg:overflow-hidden overflow-auto scrollbar-custom-1">
                    <div class="overflow-y-auto px-1 scrollbar-custom-1">
                        <div class="space-y-4">
                            <div class="overflow-hidden rounded-md bg-white/30 shadow-lg">
                                <img
                                    :src="project.documentations.image.link"
                                    :alt="project.documentations.image.title"
                                    class="h-auto w-full object-cover"
                                />
                            </div>
                            <p class="text-center text-xs text-gray-600">
                                {{ project.documentations.image.title }}
                            </p>

                            <div v-if="project.documentations.links.length > 0">
                                <h3 class="text-lv-3">Documentations</h3>
                                <div class="mt-2 flex flex-wrap gap-2">
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
                            </div>

                            <div>
                                <h3 class="text-lv-3">Tools</h3>
                                <div class="mt-2 flex flex-wrap gap-2">
                                    <p
                                        v-for="tool in project.tools"
                                        :key="tool"
                                        class="inline-block rounded-lg border border-slate-400/40 bg-white/20 px-2 py-1 text-xs text-gray-800"
                                    >
                                        {{ tool }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex min-h-0 flex-col overflow-hidden">
                        <h3 class="text-lv-3 flex-shrink-0">Description</h3>
                        <div class="mt-2 flex-1 overflow-y-auto rounded-md bg-slate-50 p-2 text-gray-700 shadow-inner scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-slate-400 hover:scrollbar-thumb-slate-500 scrollbar-thumb-rounded-full">
                            <p class="whitespace-pre-line leading-relaxed">
                                {{ project.description || "No description yet." }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="flex h-full items-center justify-center">
                <p class="text-sm tracking-wider text-gray-700">Project not found.</p>
            </div>
        </div>
    </PopupContainer>
</template>
