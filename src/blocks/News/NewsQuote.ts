import type { Block } from 'payload'

export const NewsQuote: Block = {
  slug: 'newsQuote',
  labels: {
    singular: 'Cytat',
    plural: 'Cytaty',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
  ],
}
