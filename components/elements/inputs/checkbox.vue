<script setup lang="ts">
defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
    default: "check",
  },
  label: {
    type: String,
  },
  modelValue: {
    type: Boolean,
  },
});
</script>
<template>
  <label
    :for="id"
    class="flex items-center gap-2 select-none text-slate-500 dark:text-slate-400 text-sm cursor-pointer"
  >
    <input
      type="checkbox"
      :name="name"
      :id="id"
      v-model="modelValue"
      :true-value="true"
      :false-value="false"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      class="form-checkbox dark:bg-slate-900 dark:checked:bg-sky-500 rounded w-[16px] h-[16px] border-slate-300 dark:border-slate-700 text-sky-500 focus:ring-sky-200 dark:focus:ring-slate-600 focus:ring focus:ring-offset-0"
    />
    {{ label }}
  </label>
</template>
