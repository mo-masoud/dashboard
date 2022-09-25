<script setup lang="ts">
//@ts-ignore
import logo from "~/assets/images/logo.png";
const config = useRuntimeConfig();

const APP_NAME = config.APP_NAME;

defineProps({
  large: {
    default: false,
  },
});
</script>

<template>
  <div>
    <NuxtLink
      to="/"
      class="flex items-end rounded active:outline-none active:ring focus:outline-none focus:ring focus:ring-sky-200 dark:focus:ring-slate-600 py-0.5 px-2 gap-2"
    >
      <img
        :src="logo"
        alt="Dashboard"
        class="object-cover rtl:rotate-180"
        :class="[large ? 'w-9 h-9' : 'w-8 h-8']"
      />
      <span
        class="text-sky-700 dark:text-sky-100 font-extrabold"
        :class="[large ? 'text-2xl' : 'text-base']"
      >
        {{ $t(APP_NAME) }}
      </span>
    </NuxtLink>
  </div>
</template>
