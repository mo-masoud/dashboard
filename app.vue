<script setup>
import store2 from "store2";

import { useStore } from "~/stores/app";
const store = useStore();

onMounted(() => {
  store.changeColorMode(store2("colorMode"));
  store.changeLang(store2("lang"), false);
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
