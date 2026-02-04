import React from 'react'
import type { PostQuote as PostQuoteProps } from '@/payload-types'

export const PostQuoteBlock: React.FC<PostQuoteProps> = (props) => {
  const { quote, author } = props

  if (!quote) return null

  return (
    <section>
      <figure>
        <blockquote>
          <p>{quote}</p>
        </blockquote>
        {author && (
          <figcaption>
            — <cite>{author}</cite>
          </figcaption>
        )}
      </figure>
    </section>
  )
}
