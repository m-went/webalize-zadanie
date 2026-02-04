import type { Block } from 'payload'

export const PostList: Block = {
  slug: 'postList',
  interfaceName: 'PostList',
  labels: {
    singular: 'List',
    plural: 'Lists',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Ordered', value: 'ordered' },
        { label: 'Unordered', value: 'unordered' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
