<script setup lang="ts">
import SearchField from "~/components/elements/fields/search-field.vue";
import PrimaryBtn from "~/components/elements/buttons/primary-btn.vue";
import Card from "~/components/elements/cards/card.vue";
import TableHeader from "~/components/ui/table-header.vue";
import Datatable from "~/components/elements/tables/datatable.vue";
import DefaultBtn from "~~/components/elements/buttons/default-btn.vue";
</script>

<template>
  <div>
    <h1 class="text-slate-500 dark:text-slate-400 text-xl">
      {{ $t("admins") }}
    </h1>
    <div class="flex items-center justify-between mt-2">
      <SearchField
        id="admins-search"
        rounded
        shadow
        icon
        :placeholder="$t('search')"
        class="w-2/3"
      />
      <PrimaryBtn>
        {{ $t("create") }}
        <span class="hidden md:block">{{ $t("admin") }}</span>
      </PrimaryBtn>
    </div>
    <Card class="mt-6">
      <div class="divide-y divide-slate-100 dark:divide-slate-700">
        <TableHeader />

        <Datatable />

        <div class="flex items-center justify-between">
          <DefaultBtn small :disabled="true">{{ $t("previous") }}</DefaultBtn>
          <div class="text-sm px-4 text-slate-500 tracking-tighter">
            1-1 {{ $t("of") }} 1
          </div>
          <DefaultBtn small :disabled="true">{{ $t("next") }}</DefaultBtn>
        </div>
      </div>
    </Card>
  </div>
</template>
