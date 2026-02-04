import React from 'react'
import type { PostList as PostListProps } from '@/payload-types'

export const PostListBlock: React.FC<PostListProps> = (props) => {
  const { type, items } = props

  if (!items || items.length === 0) return null

  const ListTag = type === 'ordered' ? 'ol' : 'ul'

  return (
    <ListTag>
      {items.map((item, index) => (
        <li key={index}>{item.text}</li>
      ))}
    </ListTag>
  )
}
