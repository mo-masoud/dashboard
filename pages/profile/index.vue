<script setup lang="ts">
import View from "~~/components/ui/view.vue";
import { ViewAttribute, ViewTypes } from "~~/types/ViewAttribute";

const attributes: ViewAttribute[] = [
  {
    label: "ID",
    type: ViewTypes.ID,
    value: 1,
  },
  {
    label: "Avatar",
    type: ViewTypes.IMAGE,
    value:
      "https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=300",
  },
  {
    label: "Name",
    type: ViewTypes.STRING,
    value: "Admin",
  },
  {
    label: "Email",
    type: ViewTypes.EMAIL,
    value: "admin@admin.com",
  },
];
</script>
<template>
  <div>
    <View
      title="User details: Admin"
      edit-path="/profile/update"
      :attributes="attributes"
    />
  </div>
</template>
