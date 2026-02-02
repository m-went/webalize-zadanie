import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { NewsHeader } from '@/blocks/News/NewsHeader/config'
import { NewsImage } from '@/blocks/News/NewsImage/config'
import { NewsList } from '@/blocks/News/NewsList/config'
import { NewsQuote } from '@/blocks/News/NewsQuote/config'
import { NewsText } from '@/blocks/News/NewsText/config'
import { seoTab } from '@/fields/seoTab'
import { type CollectionConfig } from 'payload'

export const News: CollectionConfig<'news'> = {
  slug: 'news',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedAt'],
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'News content',
          fields: [
            { name: 'title', type: 'text', required: true, localized: true },
            { name: 'heroImage', type: 'upload', relationTo: 'media', required: true },
            {
              name: 'content',
              type: 'blocks',
              blocks: [NewsHeader, NewsText, NewsQuote, NewsList, NewsImage],
            },
          ],
        },
        {
          label: 'List view',
          fields: [
            { name: 'excerpt', type: 'textarea', required: true, localized: true },
            { name: 'readingTime', type: 'number', required: true },
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'categories',
              required: true,
              hasMany: true,
              filterOptions: () => {
                return {
                  type: {
                    equals: 'news',
                  },
                }
              },
            },
          ],
        },
        seoTab,
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      defaultValue: new Date(),
      required: true,
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
        description: 'Used in the URL, e.g., /news/my-article',
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
