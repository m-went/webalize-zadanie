import { NewsHeader } from '@/blocks/News/NewsHeader'
import { NewsImage } from '@/blocks/News/NewsImage'
import { NewsList } from '@/blocks/News/NewsList'
import { NewsQuote } from '@/blocks/News/NewsQuote'
import { NewsText } from '@/blocks/News/NewsText'
import type { CollectionConfig } from 'payload'

export const News: CollectionConfig<'news'> = {
  slug: 'news',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedAt'],
  },

  access: {
    read: () => true,
  },

  fields: [
    // ===== LIST VIEW =====
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'readingTime',
      type: 'number',
      required: true,
      min: 1,
      admin: {
        description: 'Czas czytania w minutach',
      },
    },
    {
      name: 'listImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    // ===== PAGE VIEW =====
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [NewsHeader, NewsText, NewsQuote, NewsList, NewsImage],
    },

    // ===== META =====
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: new Date(),
      required: true,
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

  versions: {
    drafts: {
      autosave: {
        interval: 300,
      },
    },
  },
}
