<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import SelectField from "../elements/fields/select-field.vue";

const options = ref<{ text: string; key: string | number }[]>([
  { text: "15", key: 15 },
  { text: "25", key: 25 },
  { text: "100", key: 100 },
]);
</script>
<template>
  <div class="relative flex items-center justify-end p-2">
    <Popover class="relative">
      <PopoverButton
        class="flex items-center gap-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 active:outline-none active:ring focus:outline-none focus:ring focus:ring-sky-200 dark:focus:ring-slate-600 px-2 md:px-4 py-1.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-slate-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5 text-slate-500"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </PopoverButton>
      <PopoverPanel
        class="absolute top-10 ltr:right-0 rtl:left-0 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-600 z-10 py-1"
      >
        <div class="w-full">
          <div class="p-1 px-2">
            <span class="block font-bold text-sm text-slate-500 uppercase">
              {{ $t("per_page") }}
            </span>
            <SelectField :options="options" />
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  </div>
</template>
