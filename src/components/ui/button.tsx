import { Slot } from '@radix-ui/react-slot'

import * as React from 'react'

export interface ButtonProps extends React.ComponentProps<'button'> {
  asChild?: boolean
}

const Button: React.FC<ButtonProps> = ({ asChild = false, ...props }) => {
  const Comp = asChild ? Slot : 'button'

  return <Comp data-slot="button" {...props} />
}

export { Button }
