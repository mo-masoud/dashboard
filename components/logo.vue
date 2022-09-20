<script setup lang="ts">
//@ts-ignore
import logo from "~/assets/images/logo.png";
const config = useRuntimeConfig();

const APP_NAME = config.APP_NAME;
</script>

<template>
  <div>
    <NuxtLink
      to="/"
      class="flex items-center rounded active:outline-none active:ring focus:outline-none focus:ring focus:ring-sky-200 dark:focus:ring-slate-600 py-0.5 px-2 gap-2"
    >
      <img
        :src="logo"
        alt="Dashboard"
        class="w-8 h-8 object-cover rtl:rotate-180"
      />
      <span class="text-sky-700 dark:text-sky-100 font-extrabold">
        {{ $t(APP_NAME) }}
      </span>
    </NuxtLink>
  </div>
</template>
