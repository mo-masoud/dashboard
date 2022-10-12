<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

interface Props {
  to?: string | RouteLocationRaw;
}

const { to } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-2 font-light text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 active:text-sky-200 active:outline-none active:ring focus:outline-none focus:ring focus:ring-sky-200 dark:focus:ring-slate-600 p-1.5 px-4 rounded"
    activeClass="text-sky-500 dark:text-sky-500 font-bold"
    exactActiveClass="text-sky-500 dark:text-sky-500 font-bold"
  >
    <slot />
  </NuxtLink>
</template>
