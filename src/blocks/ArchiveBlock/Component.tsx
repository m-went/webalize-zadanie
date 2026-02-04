import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Card } from '@/components/Card'
import type { ArchiveBlock as ArchiveBlockProps, Post, Integration } from '@/payload-types'

export const ArchiveBlock: React.FC<ArchiveBlockProps> = async (props) => {
  const { limit, populateBy, relationTo, selectedDocs, selectedCategories } = props

  let docs: (Post | Integration)[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const fetchedDocs = await payload.find({
      collection: relationTo as 'posts' | 'integrations',
      limit: limit || 10,
      where: {
        ...(selectedCategories && selectedCategories.length > 0
          ? {
              categories: {
                in: selectedCategories.map((cat) => (typeof cat === 'object' ? cat.id : cat)),
              },
            }
          : {}),
      },
    })

    docs = fetchedDocs.docs as (Post | Integration)[]
  } else {
    docs = (selectedDocs?.map((row) => row.value) as (Post | Integration)[]) || []
  }

  if (docs.length === 0) return null

  return (
    <section>
      <header>
        <h2>Archive: {relationTo}</h2>
      </header>

      <div>
        {docs.map((doc, index) => (
          <article key={index}>
            <Card doc={doc} relationTo={relationTo as 'posts' | 'integrations'} />
          </article>
        ))}
      </div>
    </section>
  )
}
