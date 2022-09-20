<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useStore } from "~/stores/app";
const store = useStore();
</script>

<template>
  <div class="relative">
    <Menu>
      <MenuButton
        class="rounded text-slate-800 dark:text-slate-200 focus-visible:ring focus-visible:ring-sky-200 active:outline-none active:ring focus:outline-none focus:ring focus:ring-sky-200 dark:focus:ring-gray-600 p-2"
      >
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
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      </MenuButton>
      <MenuItems
        class="absolute top-12 w-36 ltr:left-0 rtl:right-0 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600 z-10 py-1"
      >
        <MenuItem class="w-full">
          <button
            @click="store.changeColorMode('light')"
            class="flex items-center gap-2 text-slate-600 dark:text-slate-300 rounded text-sm font-light hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-300 dark:active:text-slate-300 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
              />
            </svg>

            <span>{{ $t("light") }}</span>
          </button>
        </MenuItem>
        <MenuItem class="w-full">
          <button
            @click="store.changeColorMode('dark')"
            class="flex items-center gap-2 text-slate-600 dark:text-slate-300 rounded text-sm font-light hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-300 dark:active:text-slate-300 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
              class="inline-block"
              role="presentation"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>

            <span>{{ $t("dark") }}</span>
          </button>
        </MenuItem>
        <!-- <MenuItem class="w-full">
          <button
            class="flex items-center gap-2 text-slate-600 rounded text-sm font-light hover:bg-slate-100 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span>System</span>
          </button>
        </MenuItem> -->
      </MenuItems>
    </Menu>
  </div>
</template>
