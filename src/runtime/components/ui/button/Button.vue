<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '..'
import { cn } from '../../../lib/utils'

defineOptions({ name: 'RadixButton' })

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  outlined?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Primitive
    v-ripple
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size, outlined }), props.class)"
  >
    <slot />
  </Primitive>
</template>
