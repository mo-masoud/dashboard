<script setup lang="ts">
interface Props {
  value?: string;
  alt?: string;
}

const { value, alt } = defineProps<Props>();

const isOpen = ref(false);

const openFull = () => (isOpen.value = true);
const closeFull = () => (isOpen.value = false);
</script>

<template>
  <div>
    <img
      @click="openFull"
      class="w-12 h-12 rounded-full shadow-lg cursor-pointer"
      :src="value"
      :alt="alt"
    />
    <div
      v-if="isOpen"
      class="absolute flex pt-28 justify-center inset-0 bg-black z-40 bg-opacity-80"
    >
      <button
        class="absolute flex items-center justify-center top-10 right-10 bg-white p-2 rounded-full w-8 h-8"
        @click="closeFull"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <img :src="value" :alt="alt" />
    </div>
  </div>
</template>
