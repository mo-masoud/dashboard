import { defineStore } from "pinia";

export const useStore = defineStore("app", () => {
  const isDrawerOpen = ref(false);

  const openDropdown = () => {
    isDrawerOpen.value = true;
  };
  const closeDropdown = () => {
    isDrawerOpen.value = false;
  };

  return { isDrawerOpen, openDropdown, closeDropdown };
});
