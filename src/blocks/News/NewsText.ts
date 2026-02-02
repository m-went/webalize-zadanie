import type { Block } from 'payload'

export const NewsText: Block = {
  slug: 'newsText',
  labels: {
    singular: 'Tekst',
    plural: 'Teksts',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
}
