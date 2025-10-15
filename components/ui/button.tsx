"use client"

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: [
          'bg-primary text-primary-foreground hover:bg-primary/90',
          // Transition effects for all themes
          'hover:translate-y-[-1px] active:translate-y-[1px]',
          'shadow-md hover:shadow-lg active:shadow-sm',
          // Light mode neumorphic effect (applied by default)
          'shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]',
          'hover:shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_rgba(255,255,255,0.85)]',
          'active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.12),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]',
          // Dark mode glow effect (overrides light mode styles)
          'dark:shadow-[0_0_15px_rgba(var(--primary)/0.3)]',
          'dark:hover:shadow-[0_0_25px_rgba(var(--primary)/0.4)]',
          'dark:active:shadow-md',
        ],
        destructive: [
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
          // Transition effects for all themes
          'hover:translate-y-[-1px] active:translate-y-[1px]',
          'shadow-md hover:shadow-lg active:shadow-sm',
          // Light mode neumorphic effect (applied by default)
          'shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]',
          'hover:shadow-[6px_6px_12px_rgba(0,0,0,0.12),-6px_-6px_12px_rgba(255,255,255,0.85)]',
          'active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.12),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]',
          // Dark mode effect (overrides light mode styles)
          'dark:shadow-[0_0_15px_rgba(var(--destructive)/0.3)]',
          'dark:hover:shadow-[0_0_20px_rgba(var(--destructive)/0.4)]',
          'dark:active:shadow-md',
        ],
        outline: [
          'border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
          // Transition effect for all themes
          'hover:translate-y-[-1px] active:translate-y-[1px]',
          // Light mode neumorphic effect (applied by default)
          'shadow-[3px_3px_5px_rgba(0,0,0,0.06),-3px_-3px_5px_rgba(255,255,255,0.6)]',
          'hover:shadow-[4px_4px_8px_rgba(0,0,0,0.08),-4px_-4px_8px_rgba(255,255,255,0.7)]',
          'active:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.1),inset_-2px_-2px_3px_rgba(255,255,255,0.4)]',
          // Dark mode effect (overrides light mode styles)
          'dark:shadow-[0_0_8px_rgba(255,255,255,0.05)]',
          'dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]',
        ],
        secondary: [
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          // Transition effect for all themes
          'hover:translate-y-[-1px] active:translate-y-[1px]',
          // Light mode neumorphic effect (applied by default)
          'shadow-[3px_3px_6px_rgba(0,0,0,0.08),-3px_-3px_6px_rgba(255,255,255,0.7)]',
          'hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]',
          'active:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.08),inset_-2px_-2px_3px_rgba(255,255,255,0.4)]',
          // Dark mode subtle effect (overrides light mode styles)
          'dark:shadow-[0_0_10px_rgba(255,255,255,0.08)]',
          'dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.12)]',
          'dark:active:shadow-md',
        ],
        ghost: [
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
          'hover:shadow-[2px_2px_5px_rgba(0,0,0,0.06),-2px_-2px_5px_rgba(255,255,255,0.5)]',
          'dark:hover:shadow-none',
        ],
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'
  
  // We'll use client-side theme detection via CSS instead of React state
  // This avoids SSR hydration mismatches and works with both server and client components
  
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
