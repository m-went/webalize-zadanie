import type { ButtonProps } from '@/components/ui/button'

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

const Pagination = ({ ...props }: React.ComponentProps<'nav'>) => (
  <nav aria-label="pagination" role="navigation" {...props} />
)

const PaginationContent: React.FC<
  { ref?: React.Ref<HTMLUListElement> } & React.HTMLAttributes<HTMLUListElement>
> = ({ ref, ...props }) => <ul ref={ref} {...props} />

const PaginationItem: React.FC<
  { ref?: React.Ref<HTMLLIElement> } & React.HTMLAttributes<HTMLLIElement>
> = ({ ref, ...props }) => <li ref={ref} {...props} />

type PaginationLinkProps = {
  isActive?: boolean
} & ButtonProps &
  React.ComponentProps<'button'>

const PaginationLink = ({ isActive, ...props }: PaginationLinkProps) => (
  <button aria-current={isActive ? 'page' : undefined} {...props} />
)

const PaginationPrevious = ({ ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" {...props}>
    <ChevronLeft />
    <span>Previous</span>
  </PaginationLink>
)

const PaginationNext = ({ ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" {...props}>
    <span>Next</span>
    <ChevronRight />
  </PaginationLink>
)

const PaginationEllipsis = ({ ...props }: React.ComponentProps<'span'>) => (
  <span aria-hidden {...props}>
    <MoreHorizontal />
    <span>More pages</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
