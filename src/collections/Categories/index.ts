import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Posts', value: 'posts' },
        { label: 'Integrations', value: 'integrations' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Category name' },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      admin: { description: 'Short category description' },
    },
  ],
}
