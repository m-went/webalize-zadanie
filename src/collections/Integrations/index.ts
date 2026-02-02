import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { seoTab } from '@/fields/seoTab'
import type { CollectionConfig } from 'payload'

export const Integrations: CollectionConfig = {
  slug: 'integrations',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'updatedAt'],
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
          label: 'Content',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'category',
              type: 'relationship',
              relationTo: 'categories',
              required: true,
              hasMany: true,
              filterOptions: () => {
                return {
                  type: {
                    equals: 'integrations',
                  },
                }
              },
            },
            {
              name: 'excerpt',
              type: 'textarea',
              required: true,
              localized: true,
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
              localized: true,
            },
          ],
        },
        seoTab,
      ],
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
}
