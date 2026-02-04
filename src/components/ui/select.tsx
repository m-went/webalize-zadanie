'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'

const Select: React.FC<React.ComponentProps<typeof SelectPrimitive.Root>> = (props) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

const SelectGroup: React.FC<React.ComponentProps<typeof SelectPrimitive.Group>> = (props) => {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

const SelectValue: React.FC<React.ComponentProps<typeof SelectPrimitive.Value>> = (props) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

const SelectTrigger: React.FC<React.ComponentProps<typeof SelectPrimitive.Trigger>> = ({
  children,

  ...props
}) => {
  return (
    <SelectPrimitive.Trigger data-slot="select-trigger" {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

const SelectContent: React.FC<React.ComponentProps<typeof SelectPrimitive.Content>> = ({
  children,

  position = 'popper',
  ...props
}) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content data-slot="select-content" position={position} {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

const SelectLabel: React.FC<React.ComponentProps<typeof SelectPrimitive.Label>> = ({
  ...props
}) => {
  return <SelectPrimitive.Label data-slot="select-label" {...props} />
}

const SelectItem: React.FC<React.ComponentProps<typeof SelectPrimitive.Item>> = ({
  children,

  ...props
}) => {
  return (
    <SelectPrimitive.Item data-slot="select-item" {...props}>
      <span>
        <SelectPrimitive.ItemIndicator>
          <Check />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

const SelectSeparator: React.FC<React.ComponentProps<typeof SelectPrimitive.Separator>> = ({
  ...props
}) => {
  return <SelectPrimitive.Separator data-slot="select-separator" {...props} />
}

const SelectScrollUpButton: React.FC<
  React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>
> = ({ ...props }) => {
  return (
    <SelectPrimitive.ScrollUpButton data-slot="select-scroll-up-button" {...props}>
      <ChevronUp />
    </SelectPrimitive.ScrollUpButton>
  )
}

const SelectScrollDownButton: React.FC<
  React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>
> = ({ ...props }) => {
  return (
    <SelectPrimitive.ScrollDownButton data-slot="select-scroll-down-button" {...props}>
      <ChevronDown />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
