'use client'

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import * as ProgressPrimitive from '@radix-ui/react-progress'

const Progress = forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={twMerge(
      ' relative h-[10px] w-full overflow-hidden rounded-full bg-[#011C53]',
      className,
    )}
    {...props}
  >
    <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[8px] text-[#84B6EF]">
      {value}%
    </span>

    <ProgressPrimitive.Indicator
      className="flex h-full w-full flex-1 items-center justify-center bg-progress-gradient  transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
