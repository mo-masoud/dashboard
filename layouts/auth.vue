<script setup lang="ts"></script>

<template>
  <div
    class="py-14 min-h-screen bg-slate-100 dark:bg-slate-900 font-sans rtl:font-arabic"
  >
    <main class="flex flex-col items-center space-y-6">
      <Logo :large="true" />

      <div
        class="bg-white dark:bg-slate-800 rounded-lg shadow p-8 w-[25rem] mx-auto"
      >
        <slot />
      </div>
    </main>
  </div>
</template>
