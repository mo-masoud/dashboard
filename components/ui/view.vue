<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

import { ViewAttribute } from "~~/types/ViewAttribute";
import IconBtn from "../elements/buttons/icon-btn.vue";
import Card from "../elements/cards/card.vue";
import DangerBtn from "../elements/buttons/danger-btn.vue";
import DefaultBtn from "../elements/buttons/default-btn.vue";

interface Props {
  title?: string;
  edit?: boolean;
  remove?: boolean;
  editPath?: string;
  attributes: ViewAttribute[];
}

const { title, attributes } = withDefaults(defineProps<Props>(), {
  edit: true,
  remove: true,
  editPath: "/",
});

const rowComponent = (type: string) =>
  defineAsyncComponent(
    () => import(`~/components/elements/rows/${type}-row.vue`)
  );

const openDel = ref(false);
</script>

<template>
  <div>
    <TransitionRoot appear :show="openDel" as="template">
      <Dialog as="div" @close="openDel = false" class="relative z-40">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-slate-500 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="p-6 max-w-sm mx-auto">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="mx-auto w-96 transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-sm font-bold text-slate-500 uppercase border-b border-slate-200 px-6 py-4"
                >
                  {{ $t("delete_resource") }}
                </DialogTitle>

                <DialogDescription
                  class="text-sm text-slate-500 font-light px-6 py-4"
                >
                  {{ $t("sure_to_delete") }}
                </DialogDescription>
                <div
                  class="flex items-center justify-end gap-4 px-6 py-4 bg-slate-100"
                >
                  <DefaultBtn @click="openDel = false">Cancel</DefaultBtn>
                  <DangerBtn @click="openDel = false">Delete</DangerBtn>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="flex items-center justify-between">
      <h2 class="text-slate-500 font-normal text-xl md:text-2xl">
        {{ title || $t("view") }}
      </h2>
      <div class="flex items-center gap-1">
        <NuxtLink v-if="edit" :to="editPath">
          <IconBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              class="w-6 h-6 text-slate-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </IconBtn>
        </NuxtLink>
        <IconBtn v-if="remove" @click="openDel = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            class="w-6 h-6 text-slate-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </IconBtn>
      </div>
    </div>
    <Card class="mt-2">
      <div class="divide-y divide-slate-100 text-slate-500">
        <div v-for="(attr, i) in attributes" :key="i" class="flex py-4 px-8">
          <h4 class="text-sm font-bold md:font-normal w-1/4">
            {{ attr.label }}
          </h4>
          <div class="w-3/4">
            <Component :is="rowComponent(attr.type)" :value="attr.value" />
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
