<script setup>
import { useStore } from "~/stores/app";
import PrimaryBtn from "../elements/buttons/primary-btn.vue";
const store = useStore();
</script>

<template>
  <div v-if="store.isRightDrawerOpen" class="flex lg:block">
    <div
      @click="store.closeRightDrawer"
      class="lg:block absolute inset-0 bg-slate-600 dark:bg-slate-900 opacity-75"
    ></div>
    <aside
      class="flex flex-col items-center absolute top-0 ltr:right-0 rtl:left-0 bg-slate-100 dark:bg-slate-800 w-80 h-screen p-4 py-12"
    >
      <div class="flex flex-col items-center justify-center space-y-2">
        <IconsTable width="65" height="51" />
        <span class="text-sm font-light text-slate-400">
          There are no new notifications.
        </span>
        <PrimaryBtn @click="store.closeRightDrawer">Close</PrimaryBtn>
      </div>
    </aside>
  </div>
</template>
