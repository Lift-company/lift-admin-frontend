<script setup lang="ts">
import Logo from '@/assets/lift-logo.svg'
import { RoutePath } from '@/constants'
import MageBox3d from '~icons/mage/box-3d'
import MageDashboard from '~icons/mage/dashboard'
import MageSettings from '~icons/mage/settings'
import MageUsers from '~icons/mage/users'
</script>

<template>
  <aside class="w-72 h-screen bg-card px-4 py-4 flex flex-col justify-between">
    <div>
      <a target="_blank" class="flex items-center">
        <img :src="Logo" alt="Lift" class="w-[28px] h-[28px]">
        <span class="text-4xl font-semibold">Lift</span>
        <span class="text-sm self-end px-[3px] pb-[2px] font-light text-muted-foreground">admin</span>
      </a>
      <p class=" text-lg uppercase font-light mt-16 px-4 mb-4">
        Главное меню
      </p>
      <nav class="flex flex-col gap-2">
        <RouterLink active-class="bg-primary/10 hover:bg-primary/10 cursor-default" class="font-medium transition-colors hover:bg-primary/5 rounded-xl px-4 py-3 flex items-center gap-2" :to="RoutePath.dashboard">
          <MageDashboard class="w-6 h-6 text-primary" />
          <span>Главная</span>
        </RouterLink>
        <RouterLink active-class="bg-primary/10 hover:bg-primary/10 cursor-default" class="font-medium transition-colors hover:bg-primary/5 rounded-xl px-4 py-3 flex items-center gap-2" :to="RoutePath.users">
          <MageUsers class="w-6 h-6 text-primary" />
          <span>Пользователи</span>
        </RouterLink>
        <RouterLink active-class="bg-primary/10 hover:bg-primary/10 cursor-default" class="font-medium transition-colors hover:bg-primary/5 rounded-xl px-4 py-3 flex items-center gap-2" :to="RoutePath.products">
          <MageBox3d class="w-6 h-6 text-primary" />
          <span>Продукты</span>
        </RouterLink>
      </nav>
    </div>
    <div class="flex flex-col gap-10">
      <RouterLink active-class="bg-primary/10 hover:bg-primary/10 cursor-default" class="font-medium transition-colors hover:bg-primary/5 rounded-xl px-4 py-3 flex items-center gap-2" :to="RoutePath.settings">
        <MageSettings class="w-6 h-6 text-primary" />
        <span>Настройки</span>
      </RouterLink>
      <div class="flex items-center justify-between border-t border-foreground/30 pt-4 px-4">
        <div class="flex items-center gap-2">
          <span class="w-10 h-10 bg-primary rounded-full" />
          <div>
            <p class="text-sm font-medium">
              Паша Техник
            </p>
            <span class="text-xs text-muted-foreground">admin@lift.ru</span>
          </div>
        </div>
        <button class="flex items-center gap-2">
          •••
        </button>
      </div>
    </div>
  </aside>
</template>
