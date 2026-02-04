'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import * as React from 'react'

const Checkbox: React.FC<React.ComponentProps<typeof CheckboxPrimitive.Root>> = ({ ...props }) => (
  <CheckboxPrimitive.Root data-slot="checkbox" {...props}>
    <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
      <Check />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
)

export { Checkbox }
