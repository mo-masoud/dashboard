<template>
  <div class="relative bg-slate-100 dark:bg-gray-900">
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
