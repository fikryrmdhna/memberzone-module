<script setup lang="ts">
import { ref } from 'vue'
// import { useViewport } from 'nuxt-viewport'

// const viewport = useViewport()
const sidebarHeader = ref<HTMLElement | null>(null)
</script>

<template>
  <t-memberzone-content class="w-full p-0 bg-[#F5F5F5]" aria-describedby="hello world" side="right">
    <t-memberzone-header ref="sidebarHeader">
      <t-memberzone-title class="py-3 text-xl bg-white font-semibold border-b border-[#EEEEEE] text-left lg:text-center">
        <nuxt-link to="/" external class="flex items-center">
            <nuxt-img
                src="/img/teras_logo.png"
                alt="Logo Teras"
                format="webp"
                class="ps-5 w-[140px] block lg:hidden"
            />
        </nuxt-link>
        <span class="hidden lg:block">Akun</span>
      </t-memberzone-title>
      <t-memberzone-description class="hidden">
        Sidebar menu mobile
      </t-memberzone-description>
    </t-memberzone-header>
    <t-memberzone-section sidebar="trigger" />
  </t-memberzone-content>
</template>
