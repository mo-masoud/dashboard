<script setup lang="ts">
import { useStore } from "~/stores/app";
const store = useStore();
</script>

<template>
  <div class="flex lg:block">
    <div
      class="lg:block absolute lg:relative inset-0 lg:w-60 bg-slate-600 lg:bg-inherit dark:bg-slate-900 opacity-75"
      :class="[!store.isDrawerOpen ? 'hidden' : 'block']"
      @click="store.closeDropdown"
    >
      <button
        @click="store.closeDropdown"
        class="lg:hidden absolute left-60 ml-4 mt-4 text-white"
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
      class="flex lg:block flex-col absolute lg:relative top-0 bg-white lg:bg-inherit w-60 h-screen"
      :class="[!store.isDrawerOpen ? 'hidden' : 'block']"
    >
      <div class="lg:hidden py-2 border-b border-slate-200">
        <Logo />
      </div>
      <div
        class="flex flex-col overflow-hidden lg:overflow-auto hover:overflow-auto space-y-6 p-4 lg:p-6"
      >
        <NuxtLink to="/" class="flex items-center gap-2 text-slate-500">
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
          <span>Home</span>
        </NuxtLink>
        <NuxtLink to="/" class="flex items-center gap-2 text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            ></path>
          </svg>
          <span>Sections</span>
        </NuxtLink>
      </div>
    </aside>
  </div>
</template>
