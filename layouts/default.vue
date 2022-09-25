<template>
  <div
    class="relative bg-slate-100 dark:bg-slate-900 font-sans rtl:font-arabic"
  >
    <LayoutsNavbar />

    <div class="flex">
      <LayoutsSidebar />
      <div class="min-h-screen p-6">
        <slot />
      </div>
      <LayoutsNotificationsSidebar />
    </div>
  </div>
</template>
