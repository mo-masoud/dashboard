<script setup lang="ts">
interface Props {
  type?: "button" | "submit" | "reset";
}

const { type } = withDefaults(defineProps<Props>(), {
  type: "button",
});
</script>

<template>
  <button
    :type="type"
    class="shadow relative bg-sky-500 hover:bg-sky-400 text-white dark:text-slate-900 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-sky-200 dark:ring-slate-600 inline-flex items-center justify-center h-9 px-3"
  >
    <slot />
  </button>
</template>
