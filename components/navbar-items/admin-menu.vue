<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const handleLogout = () => {
  const router = useRouter();
  router.push("/auth");
};
</script>

<template>
  <div class="relative w-full">
    <Menu>
      <MenuButton
        class="flex items-center gap-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 active:outline-none active:ring focus:outline-none focus:ring focus:ring-sky-200 dark:focus:ring-slate-600 px-2 md:px-4 py-1.5 w-full"
      >
        <img
          src="https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=300"
          alt="Avatar"
          class="w-8 h-8 rounded-full"
        />
        <span class="text-sm">Admin</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 hidden md:block"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </MenuButton>
      <MenuItems
        class="absolute top-12 ltr:right-0 rtl:left-0 w-full md:w-52 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600 z-10 py-1"
      >
        <MenuItem class="w-full">
          <NuxtLink
            to="/profile"
            class="flex items-center gap-2 text-slate-600 dark:text-slate-300 rounded text-sm font-light hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-300 dark:active:text-slate-300 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <span>{{ $t("profile") }}</span>
          </NuxtLink>
        </MenuItem>
        <MenuItem class="w-full">
          <NuxtLink
            to="/profile/update"
            class="flex items-center gap-2 text-slate-600 dark:text-slate-300 rounded text-sm font-light hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-300 dark:active:text-slate-300 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            <span>{{ $t("edit_profile") }}</span>
          </NuxtLink>
        </MenuItem>
        <MenuItem class="w-full">
          <button
            @click="handleLogout"
            class="flex items-center gap-2 text-slate-600 dark:text-slate-300 rounded text-sm font-light hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-300 dark:active:text-slate-300 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>

            <span>{{ $t("logout") }}</span>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</template>
