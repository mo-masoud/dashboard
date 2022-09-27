<template>
  <div
    class="relative bg-slate-100 dark:bg-slate-900 font-sans rtl:font-arabic"
  >
    <LayoutsNavbar />

    <div class="flex">
      <LayoutsSidebar />
      <div class="min-h-screen flex-1 p-10">
        <NuxtPage />
        <div class="text-center mt-8 text-xs text-slate-400 space-y-2">
          <p>
            Powered by
            <a
              class="text-sky-500 font-bold"
              href="https://www.linkedin.com/in/mohamed-masoud-999188165/"
            >
              Mohamed Masoud
            </a>
            · v0.0.1
          </p>
          <p>© {{ new Date().getFullYear() }} · Mohamed Masoud.</p>
        </div>
      </div>
      <LayoutsNotificationsSidebar />

      <ElementsAlertsNotify />
    </div>
  </div>
</template>
