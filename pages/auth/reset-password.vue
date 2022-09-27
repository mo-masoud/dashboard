<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PasswordField from "~/components/elements/fields/password-field.vue";
import PrimaryBtn from "~/components/elements/buttons/primary-btn.vue";
import TextField from "~/components/elements/fields/text-field.vue";

const { t } = useI18n({});

definePageMeta({
  layout: "auth",
});

const code = ref("");
const password = ref("");
const passwordConfirmation = ref("");

const codeError = ref<string>(null);
const passwordError = ref<string>(null);
const passwordConfirmationError = ref<string>(null);

const handleSubmit = (e: Event) => {
  e.preventDefault();

  if (password.value !== passwordConfirmation.value) {
    passwordError.value = t("passwords_not_matched");
    passwordConfirmationError.value = t("passwords_not_matched");
    return;
  }

  console.log(code.value);
  console.log(password.value);
  console.log(passwordConfirmation.value);
  const router = useRouter();
  router.push("/auth");
};
</script>

<template>
  <form class="space-y-6" @submit="handleSubmit">
    <h1
      class="text-2xl text-center font-thin mb-6 text-gray-500 dark:text-gray-400"
    >
      {{ $t("reset_password") }}
    </h1>
    <svg
      class="block mx-auto mb-6"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="2"
      viewBox="0 0 100 2"
    >
      <path fill="#D8E3EC" d="M0 0h100v2H0z"></path>
    </svg>
    <div class="mb-6">
      <label for="email" class="text-slate-400 text-sm block mb-2">
        {{ $t("code") }}
      </label>
      <TextField v-model="code" :error="codeError" required id="code" />
    </div>
    <div class="mb-6">
      <label for="password" class="text-slate-400 text-sm block mb-2">
        {{ $t("password") }}
      </label>
      <PasswordField
        v-model="password"
        :error="passwordError"
        required
        id="password"
        placeholder=""
      />
    </div>

    <div class="mb-6">
      <label for="password" class="text-slate-400 text-sm block mb-2">
        {{ $t("password_confirmation") }}
      </label>
      <PasswordField
        v-model="passwordConfirmation"
        :error="passwordConfirmationError"
        required
        id="password-confirmation"
        placeholder=""
        name="password_confirmation"
      />
    </div>

    <PrimaryBtn type="submit" class="w-full capitalize">{{
      $t("reset_password")
    }}</PrimaryBtn>
  </form>
</template>
