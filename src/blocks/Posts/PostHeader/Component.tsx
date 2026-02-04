import React from 'react'
import type { PostHeader as PostHeaderProps } from '@/payload-types'

export const PostHeaderBlock: React.FC<PostHeaderProps> = (props) => {
  const { level, text } = props

  const HeaderLevel = level || 'h2'

  return (
    <header>
      <HeaderLevel>{text}</HeaderLevel>
    </header>
  )
}
