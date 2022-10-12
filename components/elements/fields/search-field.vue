<script setup lang="ts">
interface Props {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  modelValue?: any;
  error?: string;
  rounded?: boolean;
  shadow?: boolean;
  icon?: boolean;
}

const {
  id,
  name,
  placeholder,
  required,
  modelValue,
  error,
  rounded,
  shadow,
  icon,
} = defineProps<Props>();
</script>

<template>
  <div class="flex flex-col md:flex-row items-center">
    <label
      v-if="label"
      class="text-sm font-light md:font-normal px-6 md:px-8 mt-2 md:mt-0 w-full md:w-1/5 md:py-5"
    >
      {{ label }}<span v-if="required" class="text-red-500"> *</span>
    </label>
    <div
      :class="{
        'mt-1 md:mt-0 pb-5 px-6 md:px-8 w-full md:w-3/5 md:py-5': label,
        'w-full': !label,
      }"
    >
      <div class="relative">
        <span
          v-if="icon"
          class="absolute top-0 ltr:left-0 rtl:right-0 mt-1.5 ltr:ml-1.5 rtl:mr-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 text-slate-400 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
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
          class="dark:bg-slate-900 text-sm text-slate-500 dark:text-slate-300 border border-slate-300 dark:border-slate-800 rounded focus:outline-none focus:border-sky-500 dark:focus:border-slate-500 focus:ring dark:focus:ring-slate-600 w-full py-2 px-2.5"
          :class="[
            error
              ? 'border border-red-300 dark:bg-slate-700 dark:border-red-600 ring ring-red-100 dark:ring-slate-600 bg-slate-100'
              : '',
            rounded ? 'rounded-full' : '',
            shadow
              ? 'shadow border-none focus:ring-sky-200'
              : 'focus:ring-sky-100',
            icon ? 'lg:w-80 ltr:pr-3 ltr:pl-9 rtl:pl-3 rtl:pr-9 py-1.5' : '',
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
