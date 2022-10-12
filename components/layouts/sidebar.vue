<script setup lang="ts">
import { useStore } from "~/stores/app";
import AdminMenu from "../navbar-items/admin-menu.vue";
import ChangeTheme from "../navbar-items/change-theme.vue";
import SidebarLink from "../elements/links/sidebar-link.vue";
const store = useStore();
</script>

<template>
  <div class="flex lg:block z-40 lg:z-0">
    <div
      class="lg:block absolute lg:relative inset-0 lg:w-60 bg-slate-600 lg:bg-inherit dark:bg-slate-900 opacity-75"
      :class="[!store.isDrawerOpen ? 'hidden' : 'block']"
      @click="store.closeDrawer"
    >
      <button
        @click="store.closeDrawer"
        class="lg:hidden absolute ltr:left-60 ltr:ml-4 rtl:right-60 rtl:mr-4 mt-4 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <aside
      class="flex lg:block flex-col absolute lg:relative top-0 bg-white dark:bg-slate-800 lg:bg-inherit dark:lg:bg-inherit w-60 h-[107.5vh]"
      :class="[!store.isDrawerOpen ? 'hidden' : 'block']"
    >
      <div
        class="lg:hidden py-2 border-b border-slate-200 dark:border-slate-600"
      >
        <Logo />
      </div>
      <div
        class="relative flex flex-col overflow-hidden lg:overflow-auto hover:overflow-auto space-y-4 pt-4 px-2 pb-2"
      >
        <SidebarLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span>{{ $t("home") }}</span>
        </SidebarLink>
        <SidebarLink to="/admins">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
          <span>{{ $t("admins") }}</span>
        </SidebarLink>
      </div>

      <div class="relative block md:hidden w-full space-y-4 px-3 mt-4">
        <ChangeTheme />
        <AdminMenu />
      </div>
    </aside>
  </div>
</template>
