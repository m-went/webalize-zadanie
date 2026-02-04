import React from 'react'
import { Media } from '@/components/Media'
import type { PostImage as PostImageProps } from '@/payload-types'

export const PostImageBlock: React.FC<PostImageProps> = (props) => {
  const { image, caption } = props

  if (!image) return null

  return (
    <figure>
      <Media resource={image} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
