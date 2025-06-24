<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div class="p-6 border border-gray-200 rounded-lg">
    <slot />
  </div>
</template>

