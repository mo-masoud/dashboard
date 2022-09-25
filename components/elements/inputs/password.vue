<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
    default: "email",
  },
  placeholder: {
    type: String,
    default: () => {
      const { t } = useI18n({});
      return t("password");
    },
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
  },
  error: {
    type: String,
  },
});
</script>

<template>
  <input
    type="password"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    v-model="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    class="dark:bg-slate-900 text-sm text-slate-500 dark:text-slate-300 border border-slate-300 dark:border-slate-800 rounded focus:outline-none focus:border-sky-500 dark:focus:border-slate-500 focus:ring focus:ring-sky-100 dark:focus:ring-slate-600 w-full py-2 px-2.5"
    :class="[
      error
        ? 'border border-red-300 dark:bg-slate-700 dark:border-red-600 ring ring-red-100 dark:ring-slate-600 bg-slate-100'
        : '',
    ]"
  />
  <span
    v-if="error"
    class="text-red-500 text-xs italic font-thin mt-1.5 inline-block"
  >
    {{ error }}
  </span>
</template>
