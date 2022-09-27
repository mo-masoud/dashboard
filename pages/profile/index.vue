<script setup lang="ts">
import { useI18n } from "vue-i18n";

import View from "~/components/ui/view.vue";
import { ViewAttribute, ViewTypes } from "~/types/ViewAttribute";

const { t } = useI18n({});

const attributes: ViewAttribute[] = [
  {
    label: t("id"),
    type: ViewTypes.ID,
    value: 1,
  },
  {
    label: t("avatar"),
    type: ViewTypes.IMAGE,
    value:
      "https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=300",
  },
  {
    label: t("name"),
    type: ViewTypes.STRING,
    value: "Admin",
  },
  {
    label: t("email"),
    type: ViewTypes.EMAIL,
    value: "admin@admin.com",
  },
];
</script>
<template>
  <div>
    <View
      :title="`${$t('admin_details')}: Admin`"
      edit-path="/profile/update"
      :attributes="attributes"
    />
  </div>
</template>
