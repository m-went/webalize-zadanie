'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'

const Label: React.FC<
  { ref?: React.Ref<HTMLLabelElement> } & React.ComponentProps<typeof LabelPrimitive.Root>
> = ({ ref, ...props }) => <LabelPrimitive.Root ref={ref} {...props} />

export { Label }
