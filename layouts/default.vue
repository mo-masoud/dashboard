<template>
  <div class="relative bg-slate-100">
    <LayoutsNavbar />

    <div class="flex">
      <LayoutsSidebar />
      <div class="min-h-screen">
        <slot />
      </div>
    </div>
  </div>
</template>
