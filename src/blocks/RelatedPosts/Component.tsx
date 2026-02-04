import React from 'react'
import RichText from '@/components/RichText'
import type { Post } from '@/payload-types'
import { Card } from '../../components/Card'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export type RelatedPostsProps = {
  docs?: Post[]
  introContent?: DefaultTypedEditorState
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { docs, introContent } = props

  return (
    <div>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div>
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return <Card key={index} doc={doc} relationTo="posts" showCategories />
        })}
      </div>
    </div>
  )
}
