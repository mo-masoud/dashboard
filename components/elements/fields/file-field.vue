<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import OutlinePrimaryBtn from "../buttons/outline-primary-btn.vue";

interface Props {
  id?: string;
  name?: string;
  label?: string;
  btnText?: string;
  required?: boolean;
  accept?: string;
  modelValue?: any;
  error?: string;
}

const { id, name, btnText, required, accept, modelValue, error } = withDefaults(
  defineProps<Props>(),
  {
    id: "file",
    name: "file",
    btnText: () => {
      const { t } = useI18n({});

      return t("choose_file");
    },
    required: false,
    accept: "image/*",
  }
);

const file = ref<HTMLInputElement | null>();
const filename = ref<string | null>();

const choseFile = () => {
  file.value?.click();
};

const emit = defineEmits(["update:modelValue"]);

const selectFile = (e: Event) => {
  filename.value = file.value?.files[0]?.name;
  const reader = new FileReader();
  reader.readAsDataURL(file.value?.files[0]);
  reader.onload = function () {
    emit("update:modelValue", reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
};
</script>

<template>
  <div class="flex">
    <label
      class="text-sm font-bold md:font-normal px-6 md:px-8 mt-2 md:mt-0 w-full md:w-1/5 md:py-5"
    >
      {{ label }}<span v-if="required" class="text-red-500"> *</span>
    </label>
    <div class="mt-1 md:mt-0 pb-5 px-6 md:px-8 w-full md:w-3/5 md:py-5">
      <div class="flex item-center gap-2">
        <input
          ref="file"
          class="w-0"
          type="file"
          :name="name"
          :id="id"
          :required="required"
          capture
          :accept="accept"
          @change="selectFile"
        />
        <OutlinePrimaryBtn @click="choseFile">{{ btnText }}</OutlinePrimaryBtn>
        <span
          v-if="filename"
          class="flex items-center select-none text-sm text-slate-400"
        >
          {{ filename }}
        </span>
      </div>
    </div>
  </div>
</template>
