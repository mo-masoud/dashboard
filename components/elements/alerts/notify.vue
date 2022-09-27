<script setup lang="ts">
import { TransitionRoot, TransitionChild } from "@headlessui/vue";
import { useStore } from "~/stores/app";
const store = useStore();
</script>

<template>
  <div>
    <TransitionRoot appear :show="!!store.notify" as="template">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div>
          <div
            v-if="store.notify"
            @mouseenter="store.setIsWaitForNotify(true)"
            @mouseleave="store.setIsWaitForNotify(false)"
            class="cursor-pointer fixed bottom-8 right-10 rounded-lg text-sm font-bold shadow-2xl min-w-[14rem] max-w-sm z-50 p-3 italic capitalize"
            :class="{
              'bg-green-500 text-green-50 shadow-green-300':
                store.notify.type === 'success',
              'bg-yellow-500 text-yellow-50 shadow-yellow-300':
                store.notify.type === 'alert',
              'bg-red-500 text-red-50 shadow-red-300':
                store.notify.type === 'error',
            }"
          >
            {{ store.notify.message }}
          </div>
        </div>
      </TransitionChild>
    </TransitionRoot>
  </div>
</template>
