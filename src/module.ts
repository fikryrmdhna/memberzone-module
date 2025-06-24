import { defineNuxtModule, addPlugin, addComponentsDir, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  // Define any configuration options here
  prefix?: string
  viewport?: {
    breakpoints?: Record<string, number>
    defaultBreakpoints?: Record<string, string>
    fallbackBreakpoint?: string
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@fikry/memberzone-module',
    configKey: 'memberzoneModule',
  },
  defaults: {
    prefix: 't',
    viewport: {
      breakpoints: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536
      },
      defaultBreakpoints: {
        mobile: 'xs',
        tablet: 'md',
        desktop: 'lg'
      },
      fallbackBreakpoint: 'lg'
    }
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // Example: Add a runtime plugin
    addPlugin(resolve('./runtime/plugin'))

    await addComponentsDir({
      path: resolve('./runtime/components'),
      pathPrefix: false,
      prefix: 't',
      global: true
    })

    // Add Tailwind CSS
    nuxt.options.css = nuxt.options.css || []
    nuxt.options.css.push(resolve('./runtime/assets/css/main.css'))

    // Add Tailwind Vite plugin
    // Add Tailwind Vite plugin directly
    const tailwindcss = (await import('@tailwindcss/vite')).default
    nuxt.options.vite = nuxt.options.vite || {}
    nuxt.options.vite.plugins = nuxt.options.vite.plugins || []
    nuxt.options.vite.plugins.push(tailwindcss())

    // Register Radix Vue module
    nuxt.options.modules = nuxt.options.modules || []
    nuxt.options.modules.push('radix-vue/nuxt')
    nuxt.options.modules.push(['nuxt-viewport', options.viewport || {}])

    // Log module options for debugging
    console.log('My Nuxt Module Options:', options)
  }
})