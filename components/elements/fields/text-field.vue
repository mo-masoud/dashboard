<script setup lang="ts">
interface Props {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  modelValue?: any;
  error?: string;
}

const { id, name, placeholder, required, modelValue, error } =
  defineProps<Props>();
</script>

<template>
  <div class="flex items-center">
    <label
      v-if="label"
      class="text-sm font-bold md:font-normal px-6 md:px-8 mt-2 md:mt-0 w-full md:w-1/5 md:py-5"
    >
      {{ label }}<span v-if="required" class="text-red-500"> *</span>
    </label>
    <div
      :class="{
        'mt-1 md:mt-0 pb-5 px-6 md:px-8 w-full md:w-3/5 md:py-5': label,
        'w-full': !label,
      }"
    >
      <div>
        <input
          type="text"
          :id="id"
          :name="name"
          :placeholder="placeholder"
          :required="required"
          v-model="modelValue"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
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
      </div>
    </div>
  </div>
</template>
