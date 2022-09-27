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
    class="cursor-pointer focus:outline-none focus:ring rounded border-2 border-sky-300 dark:border-sky-500 hover:border-sky-500 active:border-sky-400 dark:hover:border-sky-400 dark:active:border-sky-300 bg-white dark:bg-transparent text-sky-500 dark:text-sky-400 px-3 h-9 inline-flex items-center font-bold flex-shrink-0"
  >
    <slot />
  </button>
</template>
