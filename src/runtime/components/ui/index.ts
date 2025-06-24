import { type VariantProps, cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-main text-neutral-50 hover:bg-primary-hover',
        destructive:
          'bg-red-500 text-neutral-50 hover:bg-red-500/90',
        secondary:
          'bg-neutral-1200 text-neutral-100 hover:bg-neutral-1100',
        ghost: 'hover:bg-neutral-500 hover:text-neutral-900',
        link: 'text-neutral-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'py-2 rounded-none px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      outlined: {
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        outlined: true,
        class: 'border border-primary-main bg-transparent text-primary-main hover:bg-primary-main/10',
      },
      {
        variant: 'destructive',
        outlined: true,
        class: 'border border-red-500 bg-transparent text-red-500 hover:bg-red-500/10',
      },
      {
        variant: 'secondary',
        outlined: true,
        class: 'border border-neutral-1200 bg-neutral-100 text-neutral-1200 hover:bg-neutral-200 hover:border-neutral-900',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export const memberzoneVariants = cva(
  'fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

export type MemberzoneVariants = VariantProps<typeof memberzoneVariants>
export type ButtonVariants = VariantProps<typeof buttonVariants>