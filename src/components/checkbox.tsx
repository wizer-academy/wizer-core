'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { ComponentProps } from 'react'

type CheckBoxProps = ComponentProps<typeof CheckboxPrimitive.Root>

export function Checkbox(props: CheckBoxProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        id="terms"
        className="flex h-4 w-4 items-center justify-center rounded-sm bg-white"
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          <Check className="text-black" size={13} strokeWidth={2.5} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <label htmlFor="terms">
        Eu concordo com os <a href="#">termos e condições</a>
      </label>
    </div>
  )
}
