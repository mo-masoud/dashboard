<script setup lang="ts">
interface Props {
  value?: string | number;
}

const { value } = defineProps<Props>();
</script>

<template>
  <div class="text-sm">
    {{ value }}
  </div>
</template>
