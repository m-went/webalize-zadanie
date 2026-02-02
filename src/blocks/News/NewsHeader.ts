import type { Block } from 'payload'

export const NewsHeader: Block = {
  slug: 'newsHeader',
  labels: {
    singular: 'Header',
    plural: 'Headers',
  },
  fields: [
    {
      name: 'level',
      type: 'select',
      required: true,
      options: [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
      ],
    },
    {
      name: 'text',
      type: 'text',
      required: true,
    },
  ],
}
