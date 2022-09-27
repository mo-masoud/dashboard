<script setup lang="ts">
import { useI18n } from "vue-i18n";

import Card from "~/components/elements/cards/card.vue";
import EmailField from "~/components/elements/fields/email-field.vue";
import TextField from "~/components/elements/fields/text-field.vue";
import PasswordField from "~/components/elements/fields/password-field.vue";
import FileField from "~/components/elements/fields/file-field.vue";
import PrimaryBtn from "~/components/elements/buttons/primary-btn.vue";

import { useStore } from "~/stores/app";
const { t } = useI18n({});

const store = useStore();

const name = ref("Admin");
const email = ref("admin@admin.com");
const avatar = ref();

const updateData = (e: Event) => {
  e.preventDefault();

  console.log({
    name: name.value,
    email: email.value,
    avatar: avatar.value,
  });

  store.setNotify({
    message: `${t("admin")} ${t("updated_successfully")}`,
    type: "success",
  });
};

const oldPassword = ref("");
const newPassword = ref("");
const passwordConfirmation = ref("");

const oldPasswordErr = ref<string | null>();
const newPasswordErr = ref<string | null>();
const passwordConfirmationErr = ref<string | null>();

const updatePassword = (e: Event) => {
  e.preventDefault();

  if (oldPassword.value.length < 6) {
    oldPasswordErr.value = `${t("old_password")} ${t("less_then")} 6 ${t(
      "characters"
    )}`;
    return;
  }

  if (newPassword.value.length < 6) {
    newPasswordErr.value = `${t("new_password")} ${t("less_then")} 6 ${t(
      "characters"
    )}`;
    return;
  }

  if (newPassword.value !== passwordConfirmation.value) {
    newPasswordErr.value = t("passwords_not_matched");
    passwordConfirmationErr.value = t("passwords_not_matched");
    return;
  }

  newPassword.value = null;
  oldPassword.value = null;
  passwordConfirmation.value = null;

  store.setNotify({
    message: `${t("password")} ${t("updated_successfully")}`,
    type: "success",
  });
};
</script>
<template>
  <div>
    <h2 class="text-slate-500 font-normal text-xl md:text-2xl">
      {{ $t("update") }} {{ $t("admin") }}: Admin
    </h2>
    <form @submit="updateData" class="mt-2">
      <Card>
        <div class="divide-y divide-slate-100 text-slate-500">
          <TextField
            v-model="name"
            required
            id="name"
            placeholder="Name"
            label="Name"
          />
          <EmailField
            v-model="email"
            required
            id="email"
            placeholder="Email"
            label="Email"
          />
          <FileField v-model="avatar" label="Avatar" id="avatar" name="file" />
        </div>
      </Card>

      <div class="flex items-center justify-end mt-8">
        <PrimaryBtn type="submit">
          {{ $t("update") }} {{ $t("admin") }}
        </PrimaryBtn>
      </div>
    </form>

    <h2 class="text-slate-500 font-normal text-xl md:text-2xl capitalize">
      {{ $t("update_password") }}
    </h2>
    <form @submit="updatePassword" class="mt-2">
      <Card>
        <div class="divide-y divide-slate-100 text-slate-500">
          <PasswordField
            :error="oldPasswordErr"
            v-model="oldPassword"
            id="old-password"
            name="old_password"
            :placeholder="$t('old_password')"
            :label="$t('old_password')"
          />
          <PasswordField
            :error="newPasswordErr"
            v-model="newPassword"
            id="new-password"
            name="new_password"
            :placeholder="$t('new_password')"
            :label="$t('new_password')"
          />
          <PasswordField
            :error="passwordConfirmationErr"
            v-model="passwordConfirmation"
            id="password-confirmation"
            name="password_confirmation"
            :placeholder="$t('password_confirmation')"
            :label="$t('password_confirmation')"
          />
        </div>
      </Card>

      <div class="flex items-center justify-end mt-8">
        <PrimaryBtn type="submit">
          {{ $t("update") }} {{ $t("password") }}
        </PrimaryBtn>
      </div>
    </form>
  </div>
</template>
