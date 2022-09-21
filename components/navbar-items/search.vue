<script setup lang="ts">
const searchValue = ref("");
const results = ref<
  {
    key: string;
    label: string;
    child: {
      key: string;
      label: string;
    }[];
  }[]
>([]);
const isSearched = ref(false);

const search = () => {
  isSearched.value = true;
  results.value = [
    {
      key: "users",
      label: "Users",
      child: [
        {
          key: "users",
          label: "Mohamed Masoud",
        },
        {
          key: "users",
          label: "Khaled Mohamed",
        },
      ],
    },
    {
      key: "products",
      label: "Products",
      child: [
        {
          key: "products",
          label: "Item 1",
        },
      ],
    },
  ];
};

const resetSearch = () => {
  isSearched.value = false;
  results.value = [];
};

watch(searchValue, (newSearch) => {
  if (newSearch.length > 2) {
    search();
  }

  if (newSearch.length === 0) {
    resetSearch();
  }
});
</script>

<template>
  <div>
    <div class="relative z-40">
      <div class="relative">
        <span
          class="absolute top-0 ltr:left-0 rtl:right-0 mt-1.5 ltr:ml-1.5 rtl:mr-1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 text-slate-400 stroke-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <input
          type="text"
          v-model="searchValue"
          :placeholder="$t('search')"
          class="bg-slate-100 dark:bg-slate-900 rounded-full text-sm text-slate-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring focus:ring-sky-200 dark:focus:ring-slate-600 w-64 lg:w-80 ltr:pr-3 ltr:pl-9 rtl:pl-3 rtl:pr-9 py-1.5"
        />
      </div>
      <div class="absolute inset-0 mt-12 bg-slate-50 rounded-xl w-64 lg:w-80">
        <div v-for="(res, i) in results" :key="i">
          <span
            class="block bg-slate-300 text-slate-500 font-bold uppercase text-xs py-1.5 px-4"
            :class="[i === 0 ? 'rounded-t-lg' : '']"
          >
            {{ res.label }}
          </span>
          <NuxtLink
            v-for="(child, j) in res.child"
            :key="j"
            to="/"
            class="flex items-center bg-white text-slate-700 hover:bg-slate-100 text-sm font-light w-full py-1.5 px-4"
            :class="[i === results.length - 1 ? 'rounded-b-lg' : '']"
          >
            {{ child.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      v-if="isSearched"
      class="block absolute inset-0 bg-slate-600 dark:bg-slate-900 opacity-60 z-30"
      @click="resetSearch"
    ></div>
  </div>
</template>
