import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

/**
 * As variantes do botão precisam ser ajustadas conforme a necessidade do layout.
 */

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center rounded-[10px] md:text-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:bg-[#32405B]',
  variants: {
    variant: {
      default: 'bg-primary hover:bg-primary/80',
      destructive:
        'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
      outline:
        'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
      secondary:
        'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'py-3.5',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-11 w-[60px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
