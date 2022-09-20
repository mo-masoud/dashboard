<script setup lang="ts">
import ChangeTheme from "../navbar-items/change-theme.vue";
import AdminMenu from "../navbar-items/admin-menu.vue";
import IconBtn from "../elements/buttons/icon-btn.vue";

import { useStore } from "~/stores/app";
import Notifications from "../navbar-items/notifications.vue";
import ChangeLang from "../navbar-items/change-lang.vue";

const store = useStore();
</script>

<template>
  <header
    class="bg-white dark:bg-slate-800 flex items-center justify-between px-2 lg:px-4 py-2 w-full"
  >
    <div class="flex items-center gap-8">
      <Logo class="hidden md:block" />
      <IconBtn
        @click="store.openDrawer"
        class="block lg:hidden order-first text-slate-800 dark:text-slate-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </IconBtn>
    </div>

    <div class="flex items-center gap-2">
      <ChangeLang />
      <ChangeTheme />
      <Notifications />
      <AdminMenu />
    </div>
  </header>
</template>
