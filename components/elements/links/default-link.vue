<script setup lang="ts">
import { PropType } from "vue";
import { RouteLocationRaw } from "vue-router";

defineProps({
  to: {
    type: String as PropType<string | RouteLocationRaw>,
  },
});
</script>
<template>
  <NuxtLink :to="to" class="text-sm font-bold text-slate-500">
    <slot />
  </NuxtLink>
</template>
