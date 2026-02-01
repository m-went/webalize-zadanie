import type { Block } from 'payload'

export const NewsText: Block = {
  slug: 'newsText',
  labels: {
    singular: 'Tekst',
    plural: 'Teksty',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
}
