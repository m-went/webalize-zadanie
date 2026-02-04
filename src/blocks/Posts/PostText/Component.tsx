import React from 'react'
import type { PostText as PostTextProps } from '@/payload-types'

export const PostTextBlock: React.FC<PostTextProps> = (props) => {
  const { content } = props

  if (!content) return null

  return (
    <section>
      <p>
        {content.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </section>
  )
}
