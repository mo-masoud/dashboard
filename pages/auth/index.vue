<script setup lang="ts">
import EmailField from "~/components/elements/fields/email-field.vue";
import PasswordField from "~/components/elements/fields/password-field.vue";
import PrimaryBtn from "~/components/elements/buttons/primary-btn.vue";
import CheckboxField from "~/components/elements/fields/checkbox-field.vue";
import DefaultLink from "~/components/elements/links/default-link.vue";

definePageMeta({
  layout: "auth",
});

const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const emailError = ref<string>(null);
const passwordError = ref<string>(null);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(email.value);
  console.log(password.value);
  console.log(rememberMe.value);
  const router = useRouter();
  router.push("/");
};
</script>

<template>
  <form class="space-y-6" @submit="handleSubmit">
    <h1
      class="text-2xl text-center font-thin mb-6 text-gray-500 dark:text-gray-400"
    >
      {{ $t("welcome_back") }}
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
        {{ $t("email_address") }}
      </label>
      <EmailField
        v-model="email"
        :error="emailError"
        required
        id="email"
        placeholder=""
      />
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
    <div class="flex items-center justify-between mb-6">
      <CheckboxField
        id="remember-me"
        name="remember_me"
        :label="$t('remember_me')"
        v-model="rememberMe"
      />

      <DefaultLink to="/auth/forgot-password">
        {{ $t("forgot_your_password") }}
      </DefaultLink>
    </div>

    <PrimaryBtn type="submit" class="w-full">{{ $t("login") }}</PrimaryBtn>
  </form>
</template>
