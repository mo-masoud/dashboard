<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>

<template>
  <div class="relative">
    <Menu>
      <MenuButton
        class="flex items-center gap-2 rounded-lg text-slate-700 hover:bg-slate-100 active:outline-none active:ring focus:outline-none focus:ring focus:ring-sky-200 dark:focus:ring-slate-600 px-2 md:px-4 py-1.5"
      >
        <img
          src="https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=300"
          alt="Avatar"
          class="w-8 h-8 rounded-full"
        />
        <span class="hidden md:block text-sm">Admin</span>
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
        class="absolute top-12 right-0 w-52 bg-white dark:bg-slate-800 rounded-lg shadow-lg border z-10 py-1"
      >
        <MenuItem>
          <button
            class="flex items-center gap-2 w-full hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white py-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-slate-600"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>

            <span>Logout</span>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</template>
