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
    class="cursor-pointer text-sm font-bold focus:outline-none text-slate-400 hover:text-slate-300 inline-flex items-center justify-center h-9 px-3"
  >
    <slot />
  </button>
</template>
