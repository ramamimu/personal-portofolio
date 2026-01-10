import { defineStore } from "pinia";

export const useProjectDetailStore = defineStore("projectDetail", {
  state: () => ({
    isActive: false,
    projectId: "",
  }),
  actions: {
    setProjectId(id: string) {
      this.projectId = id;
    },
    setIsActive(active: boolean) {
      this.isActive = active;
    },
  },
});
