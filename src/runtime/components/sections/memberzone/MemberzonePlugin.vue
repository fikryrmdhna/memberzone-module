<script setup lang="ts">
defineProps<{
  useInitial?: string
  templateFor: string
  side: 'right' | 'left'
  headerLogo: string
}>()
</script>

<template>
  <tempo-memberzone>
      <tempo-memberzone-trigger as-child>
        <button type="button" class="text-black cursor-pointer">
          <figure class="bg-white w-8 h-8 relative overflow-hidden rounded-full border border-gray-600">
            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-sm text-gray-600">
              {{ useInitial || 'X' }}
            </p>
          </figure>
        </button>
      </tempo-memberzone-trigger>
      <tempo-memberzone-base :template-for="templateFor" :side="side" :header-logo="headerLogo" />
    </tempo-memberzone>
</template>
