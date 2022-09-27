<script setup lang="ts">
import EmailField from "~/components/elements/fields/email-field.vue";
import PrimaryBtn from "~/components/elements/buttons/primary-btn.vue";
definePageMeta({
  layout: "auth",
});

const email = ref("");

const emailError = ref<string>(null);

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log(email.value);
  const router = useRouter();
  router.push("/auth/reset-password");
};
</script>

<template>
  <form class="space-y-6" @submit="handleSubmit">
    <h1
      class="text-2xl text-center font-thin mb-6 text-gray-500 dark:text-gray-400"
    >
      {{ $t("forgot_your_password") }}
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
    <PrimaryBtn type="submit" class="w-full">{{
      $t("send_password_reset_code")
    }}</PrimaryBtn>
  </form>
</template>
