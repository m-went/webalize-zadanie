'use client'

import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

export type CardPostData = Pick<Post, 'slug' | 'category' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'

  doc?: CardPostData
  relationTo?: 'posts' | 'integrations'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, category, meta, title } = doc || {}
  const { description } = meta || {}

  const hasCategories = category && Array.isArray(category) && category.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ')
  const href = `/${relationTo}/${slug}`

  return (
    <article ref={card.ref}>
      <div>
        {showCategories && hasCategories && (
          <div>
            {showCategories && hasCategories && (
              <div>
                {category?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {<Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <div>
            <h3>
              <Link href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}
        {description && <div>{description && <p>{sanitizedDescription}</p>}</div>}
      </div>
    </article>
  )
}
