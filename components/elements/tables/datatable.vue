<script setup lang="ts"></script>

<template>
  <div class="overflow-hidden overflow-x-auto relative">
    <table class="w-full table-default">
      <thead class="bg-slate-50 dark:bg-slate-800">
        <tr>
          <th
            class="text-left px-6 whitespace-nowrap uppercase text-slate-500 text-xxs tracking-wide py-2"
          >
            <span>ID</span>
          </th>
          <th
            class="text-left px-6 whitespace-nowrap uppercase text-slate-500 text-xxs tracking-wide py-2"
          >
            <span>Avatar</span>
          </th>
          <th
            class="text-left px-6 whitespace-nowrap uppercase text-slate-500 text-xxs tracking-wide py-2"
          >
            <span>Name</span>
          </th>
          <th
            class="text-left px-6 whitespace-nowrap uppercase text-slate-500 text-xxs tracking-wide py-2"
          >
            <span>Email</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            class="px-6 py-4 text-slate-500 border-t border-slate-100 dark:border-slate-700 whitespace-nowrap cursor-pointer dark:bg-slate-800 group-hover:bg-slate-50 dark:group-hover:bg-slate-900 text-sm"
          >
            <div class="text-left">
              <span class="whitespace-nowrap font-bold text-sky-500"> 1 </span>
            </div>
          </td>
          <td
            class="px-6 py-4 text-slate-500 border-t border-slate-100 dark:border-slate-700 whitespace-nowrap cursor-pointer dark:bg-slate-800 group-hover:bg-slate-50 dark:group-hover:bg-slate-900 text-sm"
          >
            image
          </td>
          <td
            class="px-6 py-4 text-slate-500 border-t border-slate-100 dark:border-slate-700 whitespace-nowrap cursor-pointer dark:bg-slate-800 group-hover:bg-slate-50 dark:group-hover:bg-slate-900 text-sm"
          >
            Admin
          </td>
          <td
            class="px-6 py-4 text-slate-500 border-t border-slate-100 dark:border-slate-700 whitespace-nowrap cursor-pointer dark:bg-slate-800 group-hover:bg-slate-50 dark:group-hover:bg-slate-900 text-sm"
          >
            admin@admin.com
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
