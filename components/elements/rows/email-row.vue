<script setup lang="ts">
interface Props {
  value?: string;
}

const { value } = defineProps<Props>();
</script>

<template>
  <a :href="`mailto:${value}`" class="text-sm">
    {{ value }}
  </a>
</template>
