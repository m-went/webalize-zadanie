import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { hero } from '@/heros/config'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'
import { Faq } from '@/blocks/Faq/config'
import { seoTab } from '@/fields/seoTab'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                Faq,
                {
                  slug: 'archive',
                  labels: { singular: 'Kolekcja', plural: 'Kolekcje' },
                  fields: [
                    {
                      name: 'selectCollection',
                      type: 'select',
                      defaultValue: 'news',
                      options: [{ label: 'Newsy', value: 'news' }],
                    },
                    {
                      name: 'limit',
                      type: 'number',
                      defaultValue: 10,
                      label: 'Ilość wpisów na stronę',
                    },
                  ],
                },
              ],
              required: true,
            },
          ],
          label: 'Content',
        },
        seoTab,
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: new Date(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      localized: true,
      admin: {
        position: 'sidebar',
        description: 'Używany w URL, np. /news/moj-artykul',
      },
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
