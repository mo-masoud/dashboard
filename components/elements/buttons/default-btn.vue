<script setup lang="ts">
interface Props {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  small?: boolean;
}

const { type, disabled } = withDefaults(defineProps<Props>(), {
  type: "button",
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="font-bold focus:outline-none hover:text-slate-300 inline-flex items-center justify-center h-9 px-3"
    :class="[
      disabled
        ? 'cursor-not-allowed text-slate-300'
        : 'cursor-pointer text-slate-400',
      small ? 'text-xs' : 'text-sm',
    ]"
  >
    <slot />
  </button>
</template>
